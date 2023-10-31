import Page from './page';
import { Customer } from '../modal/index';

class RegisterPage extends Page {
    get inputFirstname () { return cy.get('input[id="customer.firstName"]'); }
    get inputLastname () { return cy.get('input[id="customer.lastName"]'); }
    get inputStreet () { return cy.get('input[id="customer.address.street"]'); }
    get inputCity () { return cy.get('input[id="customer.address.city"]'); }
    get inputState () { return cy.get('input[id="customer.address.state"]'); }
    get inputZipcode () { return cy.get('input[id="customer.address.zipCode"]'); }
    get inputPhoneNum () { return cy.get('input[id="customer.phoneNumber"]'); }
    get inputSSN () { return cy.get('input[id="customer.ssn"]'); }
    get inputUsername () { return cy.get('input[id="customer.username"]'); }
    get inputPassword () { return cy.get('input[id="customer.password"]'); }
    get inputConfirm () { return cy.get('input[id="repeatedPassword"]'); }
    get btnRegister () { return cy.get('input[value="Register"]'); }

    fillRegistrationInfo (customer: Customer) {
        this.inputFirstname.type(customer.Firstname).should('have.value', customer.Firstname);
        this.inputLastname.type(customer.Lastname).should('have.value', customer.Lastname);
        this.inputStreet.type(customer.Address.Street).should('have.value', customer.Address.Street);
        this.inputCity.type(customer.Address.City).should('have.value', customer.Address.City);
        this.inputState.type(customer.Address.State).should('have.value', customer.Address.State);
        this.inputZipcode.type(customer.Address.Zipcode).should('have.value', customer.Address.Zipcode);
        this.inputPhoneNum.type(customer.PhoneNum).should('have.value', customer.PhoneNum);
        this.inputSSN.type(customer.SSN).should('have.value', customer.SSN);
        this.inputUsername.type(customer.Username).should('have.value', customer.Username);
        this.inputPassword.type(customer.Password).should('have.value', customer.Password);
        this.inputConfirm.type(customer.Password);
    }

    register () {
        this.btnRegister.click();
    }
}

export default new RegisterPage();
