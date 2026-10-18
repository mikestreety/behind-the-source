const profiles = {
	github: 'https://github.com/',
	codepen: 'https://codepen.io/',
	twitter: 'https://x.com/',
};

// Full profile URLs for a person's social links (used for schema sameAs)
module.exports = function (social) {
	return (social || [])
		.map(link => link.href || (profiles[link.type] && profiles[link.type] + link.title))
		.filter(Boolean)
		.filter((url, index, urls) => urls.indexOf(url) === index);
};
