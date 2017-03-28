var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var Image = keystone.list('Image');

	// Render the view
	Image.model.find()
	.limit(100)
	.exec()
	.then(images => res.json(images));
};
