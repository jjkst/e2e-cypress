import Page from './page';

class AccountOverviewPage extends Page {
    get h1title () { return cy.get('h1[class="title"]'); }
    get alogout () { return cy.get('a=Log Out'); }

    getTitle (): this {
        return this.h1title;
    }

    logout () {
        this.alogout.click();
    }

}

export default new AccountOverviewPage();
