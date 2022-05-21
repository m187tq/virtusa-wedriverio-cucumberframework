import {Given, Then, When} from '@wdio/cucumber-framework';
import topNavigationPage from '../pages/topNavigation.page';
import loginPage from '../pages/login.page';
import { faker } from '@faker-js/faker';
import allureReporter from "@wdio/allure-reporter";
import indexPage from "../pages/index.page";
import primaryLoginPage from "../pages/primaryLogin.page";


Given(/^user is on the home page as "([^"]*)"$/, async (httpswwwlloydsbankcom) => {
    allureReporter.addFeature('The Lloydsbank Website');
    await indexPage.navigateToHomePageUrl(httpswwwlloydsbankcom)
    await expect(browser).toHaveUrl(httpswwwlloydsbankcom)
    await (topNavigationPage.logoImage).waitForDisplayed()
    await (topNavigationPage.logoImage).isEnabled()
    await topNavigationPage.clickOnCompanyLogo()

});

Then(/^user verifies the page title as "([^"]*)"$/, async (lloydsbankpersonalbankingpersonalfinancesbankaccounts) => {
    await expect(browser).toHaveTitle(lloydsbankpersonalbankingpersonalfinancesbankaccounts)
});

Then(/^user clicks on Log on button and personal menu Link$/, async () => {
    await topNavigationPage.logonBtn.isExisting()
    await topNavigationPage.clickOnLogonBtn()
    await topNavigationPage.clickOnPersonalFromLogonDropdownBtnToNavigateToLogonPage()

});

Then(/^user can see heading text as "([^"]*)" and page title as "([^"]*)"$/, async (welcometointernetbanking, lloydsbankwelcometointernetbanking) => {
    await expect(browser).toHaveTitle(lloydsbankwelcometointernetbanking)
    await expect(loginPage.welcomeMsgHomePage).toHaveTextContaining(welcometointernetbanking)
});

Then(/^user enters User ID as "([^"]*)" and Password as "([^"]*)" in respective fields$/, async (userid, password) => {
await loginPage.login(userid, password)
});

When(/^user clicks on show and hide link to confirm show hide link and inputted text in Password text field$/, async () => {
    await loginPage.clicksOnShowAndHideLink()

});

Then(/^user clicks on Remember my User ID radio button$/, async () =>{
    await (loginPage.rememberUsernameRadioBtn).waitForClickable()
    await loginPage.clicksOnRememberUsernameRadioBtn()
});

When(/^user clicks on continue button$/, async () =>{
    await loginPage.forgottenYourLogonDetailsLink.isDisplayed()
    await (loginPage.continueBtn).waitForDisplayed()
    await (loginPage.continueBtn).waitForClickable()
    await loginPage.clickOnContinueBtn()

});


Then(/^user validates page url as "([^"]*)"$/, async (httpsonlinelloydsbankcoukpersonalprimarylogin) => {
    await expect(browser).toHaveUrl('https://online.lloydsbank.co.uk/personal/primarylogin')
});

Then(/^user gets a heading error confirmation message as "([^"]*)"$/, async (sorrywevehadtologyouofferror1007id18) => {
    await primaryLoginPage.errorMessagePrimaryLogin.waitForDisplayed()
    console.log(await primaryLoginPage.errorMessagePrimaryLogin.getText())
    await expect(primaryLoginPage.errorMessagePrimaryLogin).toHaveTextContaining(sorrywevehadtologyouofferror1007id18)
});

