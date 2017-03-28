var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var locals = res.locals;
	locals.section = 'home';

	var Release = keystone.list('Release');

	Release.model.find()
	.limit(100)
	.exec()
	.then(releases => res.json(releases));
};