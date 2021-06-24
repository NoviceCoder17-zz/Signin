// JavaScript source code
exports.config = {

	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['Spec.js'],
	capabilities: {
		'browserName': 'chrome'
	},

	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000
	},
};
