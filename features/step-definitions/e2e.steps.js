import {Given, When, Then} from '@wdio/cucumber-framework';

import IndexPage from '../pages/index.page';
import topNavigationPage from "../pages/topNavigation.page";
import currentAccountsPage from "../pages/currentAccounts.page";
import allureReporter from '@wdio/allure-reporter'
const expectChai = require('chai').expect;
export default expectChai
import { faker } from '@faker-js/faker';

Given(/^user is on the index page as "([^"]*)"$/, async (httpswwwlloydsbankcom) => {
    allureReporter.addFeature('The Lloydsbank Website');
    await IndexPage.navigateToHomePageUrl(httpswwwlloydsbankcom)
    await expect(browser).toHaveUrl(httpswwwlloydsbankcom)
    await (topNavigationPage.logoImage).waitForDisplayed()
    await (topNavigationPage.logoImage).isEnabled()
    await topNavigationPage.clickOnCompanyLogo()

});
When(/^user validates page title as "([^"]*)"$/, async (lloydsbankpersonalbankingpersonalfinancesbankaccounts) => {
    allureReporter.addStep("user validates page title displayed is correct");
    allureReporter.addSeverity("Critical")
    await expect(browser).toHaveTitleContaining(lloydsbankpersonalbankingpersonalfinancesbankaccounts)

});
Then(/^user hover over Products and Services tab and should be able to see the dropdown list$/, async () => {
    allureReporter.addStep("user hover over Products and Services tab to see dropdown list");
    await expect(topNavigationPage.hoverOverPersonalServiceBtn).toBePresent()
    await topNavigationPage.hoverOverPersonalServiceDropdownBtn()
});
When(/^user clicks on Current Accounts from the dropdown to navigate to current accounts page$/, async () => {
    allureReporter.addStep("user clicks on current accounts link to navigate to current accounts page");
    allureReporter.addSeverity("Critical")
    await expect(topNavigationPage.currentAccountBtn).toBePresent()
    await topNavigationPage.clickOnCurrentAccountsDropdownBtnAndNavigateToCurrentAccountsPage()
});
Then(/^user is on current accounts page and verifies page url and title as includes "([^"]*)" and "([^"]*)" respectively$/, async (httpswwwlloydsbankcomcurrentaccountshtml, openacurrentaccountonlineukbankaccountslloydsbank) => {
    allureReporter.addStep("user validates page title displayed is correct");
    allureReporter.addSeverity("Critical")
    await expect(browser).toHaveUrl(httpswwwlloydsbankcomcurrentaccountshtml);
    await expect(browser).toHaveTitle(openacurrentaccountonlineukbankaccountslloydsbank)
});
Then(/^user validates current account products as "([^"]*)" and "([^"]*)" and "([^"]*)" are displayed$/, async (classicaccount, clublloydsaccount, platinumaccount) => {
    allureReporter.addStep("user confirms three current accounts displayed");
    await expect(currentAccountsPage.allCurrentAccounts).toHaveTextContaining(classicaccount)
    await expect(currentAccountsPage.allCurrentAccounts).toHaveTextContaining(clublloydsaccount)
    await expect(currentAccountsPage.allCurrentAccounts).toHaveTextContaining(platinumaccount)
});
Then(/^user confirms "([^"]*)" for Platinum account$/, async ($21monthlyfeeformaintainingtheaccount) => {
    allureReporter.addStep("user confirms £21 monthly fee for maintaining the Platinum account is displayed");
    allureReporter.addSeverity("Critical")
    await currentAccountsPage.platinumAccountMonthlyFee.isExisting()
    await expect(currentAccountsPage.allCurrentAccounts).toHaveTextContaining($21monthlyfeeformaintainingtheaccount)
});
