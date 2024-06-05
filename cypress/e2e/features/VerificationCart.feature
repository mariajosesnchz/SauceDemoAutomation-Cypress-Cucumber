Feature: Cart Verification
  @focus
  Scenario: User verifies that added products are in the cart
    Given the user has logged in successfully
    And the user has added products to the cart
    When the user clicks the cart icon
    Then the user sees a list of the added products with their names and prices




  