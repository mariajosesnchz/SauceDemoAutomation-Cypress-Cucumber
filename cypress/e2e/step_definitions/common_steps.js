import inventoryNavPage from '../../support/pages_objects/inventoryNavigationPage.js';
import LoginPage from '../../support/pages_objects/LoginPage.js';
import addingProductsToCartPage from '../../support/pages_objects/AddingProductsToCartPage.js';



// Steps comunes
Given("the user has logged in successfully", () => {
    LoginPage.visit();
    LoginPage.loginWithValidCredentials();
    LoginPage.clickLoginButton();
  
  });
  When("the user is on the inventory page", () => {
      inventoryNavPage.inventoryPage();
      
  });

  And ('the user has added products to the cart', () => {
    addingProductsToCartPage.addToCart('Test.allTheThings() T-Shirt (Red)');
    addingProductsToCartPage.addToCart('Sauce Labs Fleece Jacket');
}
);
