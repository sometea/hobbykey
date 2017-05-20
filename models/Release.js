var keystone = require('keystone');
var Types = keystone.Field.Types;

var uploadedFilesStorage = require('./uploadedFilesStorage');

const mimetypesImages = [
    'image/png',
    'image/jpeg',
    'image/gif',
  ];

const mimetypeZip = 'application/zip';

var Release = new keystone.List('Release');

Release.add({
  title: { type: Types.Text, initial: true, required: true, index: true },
  description: { type: Types.Markdown },
  thumbnail: { type: Types.File, storage: uploadedFilesStorage },
  cover: { type: Types.File, storage: uploadedFilesStorage },
  flacDownload: { type: Types.File, storage: uploadedFilesStorage },
  mp3Download: { type: Types.File, storage: uploadedFilesStorage },
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
  if (this.oggDownload.originalname && this.oggDownload.mimetype !== mimetypeZip) {
    next(new Error('The flac download is not a zip file!'));
    return;
  }
  if (this.mp3Download.originalname && this.mp3Download.mimetype !== mimetypeZip) {
    next(new Error('The mp3 download is not a zip file!'));
    return;
  }
  next();
});

Release.defaultColumns = 'title, thumbnail, cover, flacDownload, mp3Download';
Release.register();
