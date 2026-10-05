module.exports = function (config) {
	config.addFilter('cleanAndTrim', require('./app/filters/cleanAndTrim.js'));
	config.addFilter('isoDate', require('./app/filters/isoDate.js'));
	config.addFilter('readableDate', require('./app/filters/readableDate.js'));
	config.addFilter("limit", (arr, limit) => arr.slice(0, limit));

	config.addPassthroughCopy({ 'app/assets': 'assets' });

	config.addCollection('podcasts', (collection) => {
		let now = new Date();
		return collection
			.getFilteredByGlob('./app/content/podcasts/*.md')
			.filter((p) => (p.date <= now && !p.data.draft))
			.sort(function(a, b) {
				return b.date - a.date;
			});
	});

	config.addCollection('interviews', (collection) => {
		let now = new Date();
		return collection
			.getFilteredByGlob('./app/content/interviews/*.md')
			.filter((p) => (p.date <= now && !p.data.draft))
			.sort(function(a, b) {
				return b.date - a.date;
			});
	});

	return {
		dir: {
			input: 'app/content',
			output: 'html',

			data: './../data',
			includes: './../includes',
			layouts: './../layouts'
		}
	};
};
