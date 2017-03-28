var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var locals = res.locals;
	locals.section = 'home';

	var Post = keystone.list('Post');

	Post.model.findById(req.params.id)
	.exec()
	.then(post => res.json(post))
	.catch(err => res.status(404).send('Could not find post.'));
};