
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    get message () { return cy.get('#rightPanel > p'); }

    open (path: string) {
        return cy.visit(`https://parabank.parasoft.com${path}`)
    }

    getMessage (): this {
        return this.message.invoke('text');
    }
}
