
class TopNavigationPage{

    get firstMenuList() {
        return $$("a.business-nav-a");
    }

    get secondNavMenuList() {
        return $$(".icon");
    }

    get thirdNavMenuList() {
        return $$(".link-text");
    }

    get fourthNavMenuList() {
        return $$(".primary-item");
    }
    get logonBtn() {
        return $("icon[data-svg-path ='/assets/icons/padlock.svg']");
    }

    get personalDropdownBtn() {
        return $(
            "body.homepage:nth-child(2) div.main:nth-child(2) header.header:nth-child(1) div.c-321-reference.reference.parbase:nth-child(2) div.cq-dd-paragraph div.c-122-masthead.v2 div.c-122-meganav-v2.col-parent.dynamic-header.nav-up div.c-122-header div.nav-header.primary-header-row.hidden-mobile div.container-fluid div.row div.container-fluid ul.top-header-right li.default:nth-child(3) div.header-flyout--content div:nth-child(1) div.c-103-rich-text.parbase p:nth-child(2) a.positive.btn.btn-primary > span.btn-text\n"
        );
    }

    get clickOnCurrentAccountsDropdownBtn() {
        return $(
            "li.primary-item:nth-child(2) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1) > span:nth-child(1)"
        ).click();
    }

    get personalFromLogonDropdownBtn() {
        return $("div#nav-header p:nth-child(2) > a > span");
    }

    get logoImage() {
        return $('.col-sm-5 > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > icon:nth-child(1) > svg:nth-child(1) > g:nth-child(1) > g:nth-child(1) > g:nth-child(1) > g:nth-child(2) > path:nth-child(4)')
    }

    get personalServiceBtn() {
        return $('li.primary-item:nth-child(2) > button:nth-child(2)')

    }

    get hoverOverPersonalServiceBtn() {
        return $('li.primary-item:nth-child(2) > button:nth-child(2)')

}
    get currentAccountBtn() {
        return $('li.primary-item:nth-child(2) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1) > span:nth-child(1)')

    }
    async clickOnCompanyLogo() {
        await this.logoImage.click()
    }
    async clickOnCurrentAccountsDropdownBtnAndNavigateToCurrentAccountsPage() {
        await this.currentAccountBtn.click()
    }

    async hoverOverPersonalServiceDropdownBtn() {
        await this.hoverOverPersonalServiceBtn.moveTo()
    }
    async clickOnLogonBtn() {
        await this.logonBtn.click();
    }

    async clickOnPersonalBtn() {
        await this.personalDropdownBtn.click();
    }
    async clickOnPersonalFromLogonDropdownBtnToNavigateToLogonPage() {
        await this.personalFromLogonDropdownBtn.click();
    }

}
export default new TopNavigationPage();