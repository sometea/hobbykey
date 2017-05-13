var keystone = require('keystone');
var Types = keystone.Field.Types;

var uploadedFilesStorage = require('./uploadedFilesStorage');

var Image = new keystone.List('Image');

const mimetypes = [
    'image/png',
    'image/jpeg',
    'image/gif',
  ];

Image.add({
  title: { type: Types.Text, initial: true, required: true, index: true },
  file: { type: Types.File, storage: uploadedFilesStorage },
});

Image.schema.pre('validate', function(next) {
  if (this.file.originalname && mimetypes.indexOf(this.file.mimetype) === -1) {
    next(new Error('The file is not an image file!'));
    return;
  }
  next();
});

Image.defaultColumns = 'title, file, url';
Image.register();
