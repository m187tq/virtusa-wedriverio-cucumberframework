Feature: The Lloydsbank Website
  As a user,
  User should be able to navigate pages
  In order to view current accounts and associated fees

  @e2e
  Scenario: user should be able to navigate from home to current accounts page to view current accounts
    Given user is on the index page as "https://www.lloydsbank.com/"
    When user validates page title as "Personal Banking, Personal Finances & Bank Accounts"
    And user hover over Products and Services tab and should be able to see the dropdown list
    When user clicks on Current Accounts from the dropdown to navigate to current accounts page
    Then user is on current accounts page and verifies page url and title as includes "https://www.lloydsbank.com/current-accounts.html" and "Open a Current Account Online | UK Bank Accounts | Lloyds Bank" respectively
    And user validates current account products as "Classic account" and "Club Lloyds account" and "Platinum account" are displayed
    And user confirms "£21 monthly fee for maintaining the account" for Platinum account

