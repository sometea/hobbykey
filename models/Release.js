const fs = require('fs');
const keystone = require('keystone');
const Types = keystone.Field.Types;

const uploadedFilesStorage = require('./uploadedFilesStorage');

const uploadDir = './public/uploads/';
const mimetypesImages = [
    'image/png',
    'image/jpeg',
    'image/gif',
  ];

const mimetypeZip = 'application/zip';

var Release = new keystone.List('Release', {
  track: true
});

Release.add({
  title: { type: Types.Text, initial: true, required: true, index: true },
  description: { type: Types.Markdown },
  thumbnail: { type: Types.File, storage: uploadedFilesStorage },
  cover: { type: Types.File, storage: uploadedFilesStorage },
  flacDownload: { type: Types.File, storage: uploadedFilesStorage },
  mp3Download: { type: Types.File, storage: uploadedFilesStorage },
  flacToDeleteWhenUpdated: { type: Types.Text, hidden: true},
  mp3ToDeleteWhenUpdated: { type: Types.Text, hidden: true},
});

Release.schema.pre('validate', function(next) {
  if (this.thumbnail.originalname && mimetypesImages.indexOf(this.thumbnail.mimetype) === -1) {
    next(new Error('The thumbail is not an image file!'));
    return;
  }
  if (this.cover.originalname && mimetypesImages.indexOf(this.cover.mimetype) === -1) {
    next(new Error('The cover is not an image file!'));
    return;
  }
  if (this.flacDownload.originalname && this.flacDownload.mimetype !== mimetypeZip) {
    next(new Error('The flac download is not a zip file!'));
    return;
  }
  if (this.mp3Download.originalname && this.mp3Download.mimetype !== mimetypeZip) {
    next(new Error('The mp3 download is not a zip file!'));
    return;
  }
  next();
});

Release.schema.post('remove', function(release) {
  if (release.flacToDeleteWhenUpdated) {
    fs.unlink(uploadDir + release.flacToDeleteWhenUpdated, (err) => {
      if (err) {
        console.log('error removing file: ' + err.message);
      } else {
        console.log('removed file: ' + release.flacToDeleteWhenUpdated);
      }
    });
  }
  if (release.mp3ToDeleteWhenUpdated) {
    fs.unlink(uploadDir + release.mp3ToDeleteWhenUpdated, (err) => {
      if (err) {
        console.log('error removing file: ' + err.message);
      } else {
        console.log('removed file: ' + release.mp3ToDeleteWhenUpdated);
     }
    });
  }
});

Release.schema.pre('save', function(next) {
  if (this.isModified('mp3Download')) {
    fs.unlink(uploadDir + this.mp3ToDeleteWhenUpdated, (err) => {
     if (err) {
       console.log('error removing file: ' + err.message);
     } else {
       console.log('removed file: ' + this.mp3ToDeleteWhenUpdated);
     }
    });
    this.mp3ToDeleteWhenUpdated = this.mp3Download.filename;
  }
  if (this.isModified('flacDownload')) {
    fs.unlink(uploadDir + this.flacToDeleteWhenUpdated, (err) => {
     if (err) {
       console.log('error removing file: ' + err.message);
     } else {
       console.log('removed file: ' + this.flacToDeleteWhenUpdated);
     }
    });
    this.flacToDeleteWhenUpdated = this.flacDownload.filename;
  }
  next();
});


Release.defaultColumns = 'title, thumbnail, cover, flacDownload, mp3Download';
Release.register();
