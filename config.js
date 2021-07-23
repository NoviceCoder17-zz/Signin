 //Automation test case 2
//AA-TC-16 Candidate sign -in
// Functional as of 24/June/2021
// Updated other capabilities to run in headless mode
exports.config = {

	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['Spec.js'],

	/* This is to run the test on firefox browser
	capabilities: {
		browserName: 'firefox',
		marionette : true,
	}, */


	/* To run the tests on multiple browsers
	 multiCapabilities: [
		{ 'browserName': 'chrome' },
		{ 'browserName': 'firefox' },
	],*/

	// To run the tests on headless chrome
	capabilities: {
		browserName: 'chrome',

		chromeOptions: {
			args: ["--headless", "--disable-gpu", "--window-size=800,600"]
		}
	},
	
	/*To run the tests on headless firefox
	capabilities: {
		browserName: 'firefox',

		'moz:firefoxOptions': {
			args: ["--headless"]
		}
	},
	*/

	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000
	},
};
