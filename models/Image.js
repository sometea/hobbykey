const fs = require('fs');
const keystone = require('keystone');
const Types = keystone.Field.Types;

const uploadedFilesStorage = require('./uploadedFilesStorage');

const Image = new keystone.List('Image');

const uploadDir = './public/uploads/';
const mimetypes = [
    'image/png',
    'image/jpeg',
    'image/gif',
  ];

Image.add({
  title: { type: Types.Text, initial: true, required: true, index: true },
  file: { type: Types.File, storage: uploadedFilesStorage },
  fileToDeleteWhenUpdated: { type: Types.Text, hidden: true}
});

Image.schema.pre('validate', function(next) {
  if (this.file.originalname && mimetypes.indexOf(this.file.mimetype) === -1) {
    next(new Error('The file is not an image file!'));
    return;
  }
  next();
});

Image.schema.post('remove', function(image) {
  if (image.fileToDeleteWhenUpdated) {
    fs.unlink(uploadDir + image.fileToDeleteWhenUpdated, (err) => {
      if (err) {
       console.log('error removing file: ' + err.message);
      } else {
        console.log('removed file: ' + image.fileToDeleteWhenUpdated);
     }
    });
  }
});

Image.schema.pre('save', function(next) {
  if (this.isModified('file')) {
    fs.unlink(uploadDir + this.fileToDeleteWhenUpdated, (err) => {
     if (err) {
       console.log('error removing file: ' + err.message);
     } else {
       console.log('removed file: ' + this.fileToDeleteWhenUpdated);
     }
    });
    this.fileToDeleteWhenUpdated = this.file.filename;
  }
  next();
});

Image.defaultColumns = 'title, file, url';
Image.register();
