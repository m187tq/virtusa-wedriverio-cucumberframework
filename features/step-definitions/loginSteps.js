import {Given, Then} from '@wdio/cucumber-framework';

import TopNavigationPage from '../pages/topNavigation.page';
import IndexPage from '../pages/index.page';
import { faker } from '@faker-js/faker';
import topNavigationPage from "../pages/topNavigation.page";

Given(/^user navigates to the Home page url as "([^"]*)"$/, async (httpswwwlloydsbankcom) => {
    await IndexPage.navigateToHomePageUrl(httpswwwlloydsbankcom)
    await expect(browser).toHaveUrl(httpswwwlloydsbankcom)
    await (TopNavigationPage.logoImage).waitForDisplayed()

});

Then(/^user can see heading text as "([^"]*)" and page title as "([^"]*)"$/, async (welcometointernetbanking, lloydsbankwelcometointernetbanking) => {
    await expect(browser).toHaveTitle(lloydsbankwelcometointernetbanking)

});

Then(/^user gets a red warning confirmation message displaying "([^"]*)"$/, async (sorrybutwecantidentifyyoufromyouruseridorpasswordpleasetryagain) => {

});

Then(/^user verifies the page title as "([^"]*)"$/, async (lloydsbankpersonalbankingpersonalfinancesbankaccounts) => {

});

Then(/^user clicks on Log on Button and personal Link$/, async () => {

});

Then(/^user enters User ID as "([^"]*)" and password as "([^"]*)" and clicks on continue button$/, async (userid, password) => {

});

Then(/^user should see second line error confirmation message displayed as "([^"]*)"$/, async (pleaseamendthefieldshighlightedbelowandresubmitthisform) => {

});

Then(/^user confirms the fields highlighted as "([^"]*)"$/, async (pleaseenteravalue) => {

});



