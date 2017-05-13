var keystone = require('keystone');
var Types = keystone.Field.Types;

var uploadedFilesStorage = require('./uploadedFilesStorage');

var Image = new keystone.List('Image');

Image.add({
  title: { type: Types.Text, initial: true, required: true, index: true },
  file: { type: Types.File, storage: uploadedFilesStorage },
});

Image.schema.pre('validate', function(next) {
  if (this.file.originalname !== 'test.png' && this.file.originalname) {
    let err = new Error('Not the correct file');
    next(err);
  }
  next();
});

Image.defaultColumns = 'title, file, url';
Image.register();
