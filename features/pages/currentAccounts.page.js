class CurrentAccountsPage{

    get classicAccount() {
        return $('body.expansion-alids-init:nth-child(16) div.main:nth-child(2) div.content:nth-child(2) div.c-106-grid-layout.base:nth-child(4) div.container-fluid div.row div.col-xs-12.col-sm-12.col-md-12.bg-white.grid-col.column-1 div.c-106-grid-layout.base:nth-child(2) div.lg-pad-bottom div.container-fluid div.row div.col-xs-12.col-sm-12.col-md-6.grid-col.column-1:nth-child(1) div.c-110-promo-box.c-252-skin-container-component.parbase div.promo-box.title-icon.green-theme div.inner div.content div.heading-container h2.heading > span:nth-child(1)')
    }
    get clubLloydsAccount() {
        return $('body.expansion-alids-init:nth-child(16) div.main:nth-child(2) div.content:nth-child(2) div.c-106-grid-layout.base:nth-child(4) div.container-fluid div.row div.col-xs-12.col-sm-12.col-md-12.bg-white.grid-col.column-1 div.c-106-grid-layout.base:nth-child(2) div.lg-pad-bottom div.container-fluid div.row div.col-xs-12.col-sm-12.col-md-6.grid-col.column-2:nth-child(2) div.c-110-promo-box.c-252-skin-container-component.parbase div.promo-box.title-icon.green-theme div.inner div.content div.heading-container h2.heading > span:nth-child(1)')
    }
    get platinumAccount() {
        return $('body.expansion-alids-init:nth-child(16) div.main:nth-child(2) div.content:nth-child(2) div.c-106-grid-layout.base:nth-child(4) div.container-fluid div.row div.col-xs-12.col-sm-12.col-md-12.bg-white.grid-col.column-1 div.c-106-grid-layout.base:nth-child(3) div.no-padding div.container-fluid div.row div.col-xs-12.col-sm-12.col-md-6.grid-col.column-1:nth-child(1) div.c-110-promo-box.c-252-skin-container-component.parbase div.promo-box.title-icon.green-theme div.inner div.content div.heading-container h2.heading > span:nth-child(1)')
    }

    get platinumAccountMonthlyFee() {
        return $('body.expansion-alids-init:nth-child(16) div.main:nth-child(2) div.content:nth-child(2) div.c-106-grid-layout.base:nth-child(4) div.container-fluid div.row div.col-xs-12.col-sm-12.col-md-12.bg-white.grid-col.column-1 div.c-106-grid-layout.base:nth-child(3) div.no-padding div.container-fluid div.row div.col-xs-12.col-sm-12.col-md-6.grid-col.column-1:nth-child(1) div.c-110-promo-box.c-252-skin-container-component.parbase div.promo-box.title-icon.green-theme div.inner div.content div.c-103-rich-text p:nth-child(1) span.rte-body--large-text > strong:nth-child(1)')
    }
    get platinumAccount$21MonthlyFee() {
        return $('body.expansion-alids-init:nth-child(16) div.main:nth-child(3) div.content:nth-child(2) div.c-106-grid-layout.base:nth-child(4) div.container-fluid div.row div.col-xs-12.col-sm-12.col-md-12.bg-white.grid-col.column-1 div.c-106-grid-layout.base:nth-child(3) div.no-padding div.container-fluid div.row div.col-xs-12.col-sm-12.col-md-6.grid-col.column-1:nth-child(1) div.c-110-promo-box.c-252-skin-container-component.parbase div.promo-box.title-icon.green-theme div.inner div.content div.c-103-rich-text p:nth-child(1) span.rte-body--large-text > strong:nth-child(1)')
    }

    get allCurrentAccounts() {
        return $$('//body/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]')
    }


}

export default new CurrentAccountsPage();