import { Given, When, And, Then, Before, After } from "cypress-cucumber-preprocessor/steps";
import inventoryNavPage from '../../support/pages_objects/inventoryNavigationPage.js';
import LoginPage from '../../support/pages_objects/LoginPage.js';
import common_steps from './common_steps.js';


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

// Steps for the first scenario (User sees all products in the inventory)
Then("the user sees a list of products with images, names, descriptions, and prices", () => {
    inventoryNavPage.listOfProducts();
  }
);


//Steps for the second scenario (User sorts products by price (low to high))
And ('the user selects Price "low to high" from the sort dropdown',()=>{
      inventoryNavPage.priceLowToHigh();

    })
Then ('the products are sorted by price in ascending order',()=>{
      inventoryNavPage.ascendingOrder();

    })
//Steps for the second scenario (User sorts products by price (low to high))

And ('the user selects "Name A to Z" from the sort dropdown',()=>{
  inventoryNavPage.orderByNameAtoZ();

})
Then ('the products are sorted by name in alphabetical order',()=>{
  inventoryNavPage.alphabeticalOrder();
})
//Steps for the third scenario (User views product details)
And ('the user clicks on the product name "Sauce Labs Backpack"',()=>{
  inventoryNavPage.productName();

})
Then ('the user is redirected to the product details page',()=>{
  inventoryNavPage.productDetailPage();

    })
And ('the user sees the product name, image, description, and price',()=>{
  inventoryNavPage.inventoryItemDetails();
})

//Steps for the fourth scenario (User navigates back to inventory page from product details)
And ('the user is on the product details page for "Sauce Labs Backpack"',()=>{
  inventoryNavPage.productName();
  inventoryNavPage.productDetailPage();
})
When ('the user clicks the "Back to products" button',()=>{
  inventoryNavPage.backToProducts();
})
Then ('the user is redirected to the inventory page',()=>{
  inventoryNavPage.inventoryPage();
})

//Steps for the Fifth scenario (User logs out from the inventory page)
And ('the user clicks the menu button',()=>{
  inventoryNavPage.menuBurger();
 
})
And ('the user clicks the "Logout" link',()=>{
  inventoryNavPage.logOut();
  
})
Then ('the user is redirected to the login page',()=>{
  inventoryNavPage.verifyLoginPage();
})

