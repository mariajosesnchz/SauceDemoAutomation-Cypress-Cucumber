import { Given, When, And, Then, Before, After } from "cypress-cucumber-preprocessor/steps";
import inventoryNavPage from '../../support/pages_objects/inventoryNavigationPage.js';
import LoginPage from '../../support/pages_objects/LoginPage.js';
import common_steps from './common_steps.js';
import addingProductsToCartPage from '../../support/pages_objects/AddingProductsToCartPage.js';
import CheckoutProcessPage from "../../support/pages_objects/CheckoutProcessPage.js";
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
// Steps for the first scenario (User completes the checkout process successfully)
And('the user is on the cart page', () => {
  VerificationCartPage.clickCart();
  CheckoutProcessPage.onTheCartPage();
}
);

When('the user clicks the "Checkout" button', () => {
  CheckoutProcessPage.checkoutButton();
}
);
And('the user enters payment information: first name, last name, and postal code', () => {
  CheckoutProcessPage.paymantInformation();

}
);
And('the user clicks the "Continue" button', () => {
  CheckoutProcessPage.continueButton();

}
);
And('the user clicks the "Finish" button', () => {
  CheckoutProcessPage.finishButton();
}
);
Then('the user sees a confirmation message saying "THANK YOU FOR YOUR ORDER"',()=>{
  CheckoutProcessPage.confMessage();

})

