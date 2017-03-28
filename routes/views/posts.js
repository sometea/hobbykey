var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var Post = keystone.list('Post');

	// Render the view
	Post.model.find()
	.limit(100)
	.exec()
	.then(posts => res.json(posts));
};
