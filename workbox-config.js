module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{avif,jpg,jpeg,js,html,json}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};