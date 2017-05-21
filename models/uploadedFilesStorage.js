var keystone = require('keystone');
var nameFunctions = require('keystone-storage-namefunctions');

module.exports = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  schema: {
    originalname: true,
    url: true,
    mimetype: true,
  },
  fs: {
    path: keystone.expandPath('./public/uploads'),
    publicPath: '/uploads/',
    generateFilename: nameFunctions.originalFilename,
    whenExists: 'error',
  },
});