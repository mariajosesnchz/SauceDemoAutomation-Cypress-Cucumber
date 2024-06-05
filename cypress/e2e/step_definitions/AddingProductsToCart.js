import { Given, When, And, Then, Before, After } from "cypress-cucumber-preprocessor/steps";
import inventoryNavPage from '../../support/pages_objects/inventoryNavigationPage.js';
import LoginPage from '../../support/pages_objects/LoginPage.js';
import common_steps from './common_steps.js';
import addingProductsToCartPage from '../../support/pages_objects/AddingProductsToCartPage.js';


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
// Steps for the first scenario (User adds a product to the cart)
And('the user clicks the "Add to cart" button for the product "Sauce Labs Backpack"', () => {
  addingProductsToCartPage.addToCart('Sauce Labs Bike Light');
}
);

Then("the cart icon shows 1 item", () => {
inventoryNavPage.cartIcon('1');
}
);

//Steps for the second scenario (User removes a product from the cart)
And ('the user has added "Sauce Labs Backpack" to the cart',() => {
addingProductsToCartPage.addToCart('Sauce Labs Backpack');
} )

And ('the user clicks the "Remove" button for the product "Sauce Labs Backpack"',()=>{
addingProductsToCartPage.remove();
})

Then ('the cart icon shows 0 items',()=>{
inventoryNavPage.verifyCart();

})

// Steps for the thirth scenario (User adds multiple different products to the cart)
And('the user clicks the "Add to cart" button for the product "Sauce Labs Bike Light"', () => {
  addingProductsToCartPage.addToCart('Sauce Labs Bike Light');
  }
);

And ('the user clicks the "Add to cart" button for the product "Sauce Labs Fleece Jacket"', () => {
  addingProductsToCartPage.addToCart('Sauce Labs Fleece Jacket');
}
);

Then ('the cart icon shows 2 items', () => {
  inventoryNavPage.cartIcon('2');
}
);