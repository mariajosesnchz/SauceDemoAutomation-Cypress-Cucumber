Feature: Inventory Navigation
  
  Scenario: User sees all products in the inventory
    Given the user has logged in successfully
    When the user is on the inventory page
    Then the user sees a list of products with images, names, descriptions, and prices
  
  Scenario: User sorts products by price (low to high)
    Given the user has logged in successfully
    When the user is on the inventory page
    And the user selects Price "low to high" from the sort dropdown
    Then the products are sorted by price in ascending order
  
  Scenario: User sorts products by name (A to Z)
    Given the user has logged in successfully
    When the user is on the inventory page
    And the user selects "Name A to Z" from the sort dropdown
    Then the products are sorted by name in alphabetical order

  Scenario: User views product details
    Given the user has logged in successfully
    When the user is on the inventory page
    And the user clicks on the product name "Sauce Labs Backpack"
    Then the user is redirected to the product details page
    And the user sees the product name, image, description, and price
  
  Scenario: User navigates back to inventory page from product details
    Given the user has logged in successfully
    And the user is on the product details page for "Sauce Labs Backpack"
    When the user clicks the "Back to products" button
    Then the user is redirected to the inventory page
  
  Scenario: User logs out from the inventory page
    Given the user has logged in successfully
    When the user is on the inventory page
    And the user clicks the menu button
    And the user clicks the "Logout" link
    Then the user is redirected to the login page

