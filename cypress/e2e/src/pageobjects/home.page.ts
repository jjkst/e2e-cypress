import Page from './page';

class HomePage extends Page {
    get inputUsername () { return cy.get('input[name="username"]'); }
    get inputPassword () { return cy.get('input[name="password"]'); }
    get btnLogin () { return cy.get('input[value="Log In"]'); }

    login (username: string, password: string) {
        this.inputUsername.type(username).should('have.value', username);
        this.inputPassword.type(password).should('have.value', password);;
        this.btnLogin.click();
    }

    register () {
        cy.clickLink('Register');
    }

    forgotPassword () {
        cy.clickLink('Forgot login info?');
    }
}

export default new HomePage();
