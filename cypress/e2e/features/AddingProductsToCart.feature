Feature: Adding Products to Cart
  
   Scenario: User adds a product to the cart
    Given the user has logged in successfully
    When the user is on the inventory page
    And the user clicks the "Add to cart" button for the product "Sauce Labs Backpack"
    Then the cart icon shows 1 item
 
  Scenario: User removes a product from the cart
    Given the user has logged in successfully
    And the user has added "Sauce Labs Backpack" to the cart
    When the user is on the inventory page
    And the user clicks the "Remove" button for the product "Sauce Labs Backpack"
    Then the cart icon shows 0 items
   
   Scenario: User adds multiple different products to the cart
   Given the user has logged in successfully
   When the user is on the inventory page
   And the user clicks the "Add to cart" button for the product "Sauce Labs Bike Light"
   And the user clicks the "Add to cart" button for the product "Sauce Labs Fleece Jacket"
   Then the cart icon shows 2 items



   