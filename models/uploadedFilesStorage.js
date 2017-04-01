var keystone = require('keystone');

module.exports = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  schema: {
    originalname: true,
    url: true,
  },
  fs: {
    path: keystone.expandPath('./public/uploads'),
    publicPath: '/uploads/',
  },
});