var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var locals = res.locals;
	locals.section = 'home';

	var Release = keystone.list('Release');

	Release.model.findById(req.params.id)
	.exec()
	.then(release => res.json(release))
    .catch(err => res.status(404).send('Release not found.'));
};