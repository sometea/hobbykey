var keystone = require('keystone');
var Types = keystone.Field.Types;

var uploadedFilesStorage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: keystone.expandPath('./public/uploads'),
    publicPath: '/public/uploads',
  },
})

var Image = new keystone.List('Image');

Image.add({
  title: { type: Types.Text, initial: true, required: true, index: true },
  file: { type: Types.File, storage: uploadedFilesStorage },
  url: { type: Types.Text, noedit: true, watch: 'file',
    value: function() {
      return 'uploads/' + this.file.filename;
    }, },
});

Image.defaultColumns = 'title, file, url';
Image.register();
