var fs = require('fs');

module.exports = {
	process: function(layouts, opt, Handlebars) {
		return new Promise(function(resolve, reject) {
			return fs.readFile(__dirname + '/scss.hbs', function(err, data) {
				return err ? reject(err) : resolve(data.toString());
			});
		})
		.then(function(template) {
			return Handlebars.compile(template)({
				layouts: layouts,
				opt: opt,
				indicator: '.'
			});
		});
	},
	isBeautifyable: function() {
		return true;
	},
	extension: function() {
		return 'scss';
	}
};
