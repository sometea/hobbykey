var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var Post = keystone.list('Post');

	Post.model.find()
	.limit(100)
	.exec()
	.then(posts => res.json(posts));
};
