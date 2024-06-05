Feature: Login

  User login with valid credentials and invalid credentials
  
  
  Scenario: Successful login
    Given User logs in with valid credentials
    When the user is on the login page
    And clicks the login button
    Then the user is redirected to the inventory page
    And the user sees the title "Products"

  Scenario: User attempts to log in with invalid credentials
  Given the user is on the login page
  When the user enters the username "wrong_user" and the password "wrong_password"
  And clicks the login button
  Then the user sees an error message saying "Epic sadface: Username and password do not match any user in this service"

  

