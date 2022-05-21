Feature: Verifying login functionality
  As a user,
  User wants to enter credentials,
  In order to access an account

  @login
  Scenario: user should not be able to log in with invalid credentials
    Given user is on the home page as "https://www.lloydsbank.com/"
    And user verifies the page title as "Lloyds Bank - Personal Banking, Personal Finances & Bank Accounts"
    And user clicks on Log on button and personal menu Link
    Then user can see heading text as "Welcome to Internet Banking" and page title as "Lloyds Bank - Welcome to Internet Banking"
    And user enters User ID as "userID2005" and Password as "Password_2005*" in respective fields
    And user clicks on show and hide link to confirm show hide link and inputted text in Password text field
    And user clicks on Remember my User ID radio button
    And user clicks on continue button
    And user validates page url as "https://online.lloydsbank.co.uk/personal/primarylogin"
    Then user gets a heading error confirmation message as "Sorry, we've had to log you off [Error: 1007 ID: 18."

#
#    Examples:
#      | Url                              | loginName       | password    | loginValidationMessage |
#      | https://automationteststore.com/ | datastudioplace | Manchester1 | Welcome back           |
