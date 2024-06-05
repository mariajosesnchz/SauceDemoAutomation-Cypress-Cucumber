import { Given, When, And, Then, Before, After } from "cypress-cucumber-preprocessor/steps";
import inventoryNavPage from '../../support/pages_objects/inventoryNavigationPage.js';
import LoginPage from '../../support/pages_objects/LoginPage.js';
import common_steps from './common_steps.js';
import addingProductsToCartPage from '../../support/pages_objects/AddingProductsToCartPage.js';
import VerificationCartPage from "../../support/pages_objects/VerificationCartPage.js";


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
// Steps for the first scenario (User verifies that added products are in the cart)


When ('the user clicks the cart icon', () => {
    VerificationCartPage.clickCart();
}
);

Then ('the user sees a list of the added products with their names and prices', () => {
    VerificationCartPage.verifyCart();
    
}
);