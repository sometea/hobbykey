var keystone = require('keystone');
var Types = keystone.Field.Types;

var Post = new keystone.List('Post', {
	track: true
});

Post.add({
	title: { type: Types.Text, initial: true, required: true, index: true },
	body: { type: Types.Markdown, initial: true, required: false, index: false },
});

/**
 * Registration
 */
Post.defaultColumns = 'title, body';
Post.register();
