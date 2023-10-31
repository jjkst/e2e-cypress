/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Functions {

    static adminUrl = 'https://parabank.parasoft.com/parabank/admin.htm';

    static cleanDatabase () {
        cy.visit(this.adminUrl);
        const btnClean = cy.get('button[value="CLEAN"]'); 
        btnClean.click();
    }
}
