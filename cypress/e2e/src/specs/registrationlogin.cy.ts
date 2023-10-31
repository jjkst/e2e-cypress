import AccountOverviewPage from '../pageobjects/accountoverview.page';
import Functions from '../../../support/functions';
import { Customer } from '../modal/customer';
import HomePage from '../pageobjects/home.page';
import RegisterPage from '../pageobjects/register.page';

describe('Register', () => {
  it('As a new user i want to register in parabank', () => {
    // Given
    Functions.cleanDatabase();
    HomePage.open('/');
    HomePage.register();

    // When
    const customer = new Customer();
    customer.setDefaultValues();
    RegisterPage.fillRegistrationInfo(customer);
    RegisterPage.register();

    // Then
    const successMessage =  RegisterPage.getMessage();
    successMessage.should('contain', 'Your account was created successfully. You are now logged in.');
  });
});

describe('Login', () => {
  it('As a new user I can log into the parabank with invalid login info', () => {
    // Given
    HomePage.open('/');

    // When
    HomePage.login('foobar', 'barfoo');
    
    // Then
    expect(AccountOverviewPage.getTitle()).to.not.equal('Accounts Overview');;
    const errorMessage = AccountOverviewPage.getMessage();
    errorMessage.should('contain', 'An internal error has occurred and has been logged.');
  });

  it('As a new user I can log into the parabank with valid login info', () => {
    // Given
    HomePage.open('/');

    // When
    const customer = new Customer();
    customer.setDefaultValues();
    HomePage.login(customer.Username, customer.Password);

    // Then
    expect(AccountOverviewPage.getTitle()).to.not.equal('Accounts Overview');;
  });
});