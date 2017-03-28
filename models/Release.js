var keystone = require('keystone');
var Types = keystone.Field.Types;

var uploadedFilesStorage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: keystone.expandPath('./public/uploads'),
    publicPath: '/public/uploads',
  },
})

var Release = new keystone.List('Release');

Release.add({
  title: { type: Types.Text, initial: true, required: true, index: true },
  description: { type: Types.Markdown },
  thumbnail: { type: Types.File, storage: uploadedFilesStorage },
  cover: { type: Types.File, storage: uploadedFilesStorage },
  oggDownload: { type: Types.File, storage: uploadedFilesStorage },
  mp3Download: { type: Types.File, storage: uploadedFilesStorage },
});

Release.defaultColumns = 'title, thumbnail, cover, oggDownload, mp3Download';
Release.register();
