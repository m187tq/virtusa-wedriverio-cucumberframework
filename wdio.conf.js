const allure = require('allure-commandline');

exports.config = {

    /*user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    services: [
        ['browserstack', {
            browserstackLocal: true
        }]
    ],*/

    specs: [
        './features/**/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    // https://saucelabs.com/platform/platform-configurator

    capabilities: [{

        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 5,
        //
        browserName: 'chrome',
        acceptInsecureCerts: true

    }],

    // ===================
    // Test Configurations
    // ===================

    logLevel: 'info',

    bail: 0,

    baseUrl: 'https://www.lloydsbank.com',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['chromedriver'],

    // see also: https://webdriver.io/docs/frameworks

    framework: 'cucumber',

    reporters: ['spec'],
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
    }]],

    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./features/step-definitions/login.steps.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },

    afterTestStepHookDefinitions: function (step, scenario, { error, duration, passed }, context) {
        if (error) {
        browser.takeScreenshot();
        }

    },
    onComplete: async function (){
        const reportError = await new Error('Could not generate Allure report')
        const generation = await allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                12000)

            generation.on('exit', async function(exitCode) {
                await clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }
                await console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
}
