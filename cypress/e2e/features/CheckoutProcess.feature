Feature: Checkout Process

  Scenario: User completes the checkout process successfully
    Given the user has logged in successfully
    And the user has added products to the cart
    And the user is on the cart page
    When the user clicks the "Checkout" button
    And the user enters payment information: first name, last name, and postal code
    And the user clicks the "Continue" button
    And the user clicks the "Finish" button
    Then the user sees a confirmation message saying "THANK YOU FOR YOUR ORDER"
