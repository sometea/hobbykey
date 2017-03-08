var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var locals = res.locals;
	locals.section = 'home';

	var Image = keystone.list('Image');

	// Render the view
	Image.model.find()
	.limit(100)
	.exec()
	.then(function (posts) {
		res.json(posts);
	});
};
