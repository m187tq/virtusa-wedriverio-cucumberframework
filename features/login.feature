Feature: Verifying login functionality
  As a user,
  User wants to enter credentials,
  In order to access an account

  @login
  Scenario: user should not be able to log in with invalid credentials
    Given user navigates to the Home page url as "https://www.lloydsbank.com/"
    And user verifies the page title as "Lloyds Bank - Personal Banking, Personal Finances & Bank Accounts"
    And user clicks on Log on Button and personal Link
    Then user can see heading text as "Welcome to Internet Banking" and page title as "Lloyds Bank - Welcome to Internet Banking"
    And user enters User ID as "userID" and password as "password" and clicks on continue button
    Then user gets a red warning confirmation message displaying "Sorry but we can’t identify you from your User ID or password. Please try again."
    And user should see second line error confirmation message displayed as "Please amend the fields highlighted below and re-submit this form"
    And user confirms the fields highlighted as "Please enter a value."

