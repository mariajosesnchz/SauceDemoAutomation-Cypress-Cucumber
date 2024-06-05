import { Given, When, And, Then, Before,After } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../support/pages_objects/LoginPage.js';

// This will run before each scenario
Before(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit('https://www.saucedemo.com/');
});

// This will run after each scenario
After(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

// Steps for the first scenario (Successful login)
Given('User logs in with valid credentials', () => {
  LoginPage.visit();
  LoginPage.loginWithValidCredentials();
});

When('the user is on the login page', () => {
  cy.get('.login_logo').should('have.text', 'Swag Labs');
});

And('clicks the login button', () => {
  LoginPage.clickLoginButton();
});

Then('the user is redirected to the inventory page', () => {
  cy.url().should('include', '/inventory.html');
});

And('the user sees the title "Products"', () => {
  cy.get('.title').should('have.text', 'Products');
});

// Steps for the second scenario (Invalid credentials)
Given('the user is on the login page', () => {
  LoginPage.visit();
});

When('the user enters the username "wrong_user" and the password "wrong_password"', () => {

  LoginPage.loginWithInvalidCredentials();
});

And('clicks the login button', () => {
  LoginPage.clickLoginButton();
});

Then('the user sees an error message saying "Epic sadface: Username and password do not match any user in this service"', () => {
  LoginPage.getErrorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
});