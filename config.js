//Automation test case 2
//AA-TC-16 Candidate sign -in

exports.config = {
	
	framework: 'jasmine',
	directConnect: true, // Runs directly without the selenium server
	// seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['Spec.js'],

	/*This is to run the test on firefox browser
	capabilities: {
		browserName: 'firefox',
		marionette : true,
	}, */


	/* To run the tests on multiple browsers
	 multiCapabilities: [
		{ 'browserName': 'chrome' },
		{ 'browserName': 'firefox' },
	],*/

	/*To run the tests on headless chrome
	capabilities: {
		browserName: 'chrome',

		chromeOptions: {
			args: ["--headless", "--disable-gpu", "--window-size=800,600"]
		}
	},
	*/
	//To run the tests on headless firefox
	capabilities: {
		browserName: 'firefox',

		'moz:firefoxOptions': {
			args: ["--headless"]
		}
	},


	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000
	},
	// Generate xml report
	onPrepare: function () {
		var jasmineReporters = require('jasmine-reporters'); // CHECK this
		jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
			consolidateAll: true,
			savePath: './',
			filePrefix: 'xmlresults'
		}));
	},

	// Generate a report (.html from xml)
	onComplete: function () {
		var browserName, browserVersion;
		var capsPromise = browser.getCapabilities();

		capsPromise.then(function (caps) {
			browserName = caps.get('browserName');
			browserVersion = caps.get('version');
			platform = caps.get('platform');

			var HTMLReport = require('protractor-html-reporter-2');
			testConfig = {
				reportTitle: 'Protractor Test Execution Report',
				outputPath: 'https://github.com/NoviceCoder17/Signin/',
				outputFilename: 'ProtractorTestReport',
				screenshotPath: 'https://github.com/NoviceCoder17/Signin/screenshots',
				testBrowser: browserName,
				browserVersion: browserVersion,
				modifiedSuiteName: false,
				screenshotsOnlyOnFailure: true,
				testPlatform: platform
			};
			new HTMLReport().from('xmlresults.xml', testConfig);
		});
	}
};
