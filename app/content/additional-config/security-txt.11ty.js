// RFC 9116 security.txt. Expires is set a year after each build, so it
// stays valid as long as the site is deployed at least once a year.
module.exports = class {
	data() {
		return {
			permalink: '.well-known/security.txt',
			sitemapIgnore: true,
		};
	}

	render() {
		const expires = new Date();
		expires.setFullYear(expires.getFullYear() + 1);

		return [
			'Contact: mailto:hello@behindthesource.mikestreety.co.uk',
			`Expires: ${expires.toISOString()}`,
			'Preferred-Languages: en',
			'Canonical: https://behindthesource.mikestreety.co.uk/.well-known/security.txt',
			'',
		].join('\n');
	}
};
