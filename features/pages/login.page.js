import loginPage from "./login.page";

class LoginPage{

    get inputUsername () {
        return $('.field.setFocus');
    }
    get inputPassword () {
        return $('.wide.showPwd');
    }
    get continueBtn () {
        return $("input[id='frmLogin:btnLogin1']")
    }
    get rememberUsernameRadioBtn(){
        return $("input[type='checkbox']")
    }
    get welcomeMsgHomePage(){
        return $('h1')
    }
    get errorWarningMsgForFailedLoginAttempt(){
        return $('#useridInvalidError')
    }

    get errorWarningMsgForPleaseEnterValueTxt(){
        return $('span.error')
    }
    get showPasswordLink(){
        return $('a#pwdLink')
    }
    get textInfo()
    {
        return $("p")
    }
    get hidePasswordLink(){
        return $("a#pwdLink.btn")
    }

    get forgottenYourLogonDetailsLink(){
        return $("a[id='frmLogin:lkFrgtLogonLinkDMC']")
    }


    async login (username, password) {
        await this.inputUsername.addValue(username);
        await console.log(await this.inputUsername.getValue())
        await this.inputPassword.addValue(password);
        await console.log(await this.inputPassword.getValue())
    }
    async clicksOnShowAndHideLink() {
        await (this.showPasswordLink).waitForClickable()
        await this.showPasswordLink.click()
        await (this.hidePasswordLink).waitForClickable()
        await this.hidePasswordLink.click()
        /*await browser.waitUntil(async()=>await loginPage.hidePasswordLink.isDisplayed(),
            {timeout: 3000, timeoutMsg: 'Hide link is not showing up'})*/

    }
    async clicksOnRememberUsernameRadioBtn () {
        await this.rememberUsernameRadioBtn.click()

    }
    async clickOnContinueBtn () {
        await this.continueBtn.click()
    }

    /*await browser.waitUntil(async()=>await loginPage.errorWarningMsg.isDisplayed(),
            {timeout: 3000, timeoutMsg: 'errorWarningMsg text not showing up'})*/


}

export default new LoginPage();
