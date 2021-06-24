 //Automation test case 2
//AA-TC-16 Candidate sign -in
// Functional as of 24/June/2021

describe("Signin Functionality", function () {
	it("Login with valid password and wrong email ID", function () {
		directConnect: true,
		browser.ignoreSynchronization = true;
		browser.waitForAngularEnabled(false);
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
		browser.get("https://atlas-ui-dev.workland.ca")
		browser.driver.manage().window().maximize();
		element(by.id('loginusername')).sendKeys('teswlauto@gmail.com');
		element(by.id('loginpass')).sendKeys('Test123$');
		element.all(by.css('[ng-click*=login]')).first().click();
		element(by.css('[ng-if*="userDoesntExistErrorMessage"]')).isPresent();
		browser.driver.sleep(10000);
	});

	it("Login with email ID and invalid password", function () {
		directConnect: true,
		browser.ignoreSynchronization = true;
		browser.waitForAngularEnabled(false);
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
		browser.get("https://atlas-ui-dev.workland.ca")
		browser.driver.manage().window().maximize();
		element(by.id('loginusername')).sendKeys('testwlauto@gmail.com');
		element(by.id('loginpass')).sendKeys('Test23$');
		element.all(by.css('[ng-click*=login]')).first().click();
		element(by.css('[ng-if*="loginErrorMessage"]')).isPresent();
		browser.driver.sleep(10000);
	});

	it("Login with valid password and email", function () {
		directConnect: true,
		browser.ignoreSynchronization = true;
		browser.waitForAngularEnabled(false);
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
		browser.get("https://atlas-ui-dev.workland.ca")
		browser.driver.manage().window().maximize();
		element(by.id('loginusername')).sendKeys('testwlauto@gmail.com');
		element(by.id('loginpass')).sendKeys('Test123$');
		element.all(by.css('[ng-click*=login]')).first().click();
		expect(browser.getTitle()).toEqual("Jobs, Staffing, Careers & Workforce Solutions | Workland Canada");
		browser.driver.sleep(10000);
	});
});
