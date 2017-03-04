var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	var Post = keystone.list('Post');

	// Render the view
	Post.model.find()
	.limit(100)
	.exec()
	.then(function (posts) {
		res.json(posts);
	});
};
