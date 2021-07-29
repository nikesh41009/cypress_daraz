Feature: Daraz Shopper Login by Email
Scenario: Check Positive and Negative Shopper Login by Email Scenario of Daraz Website

Given I visit Daraz's Nepal login page
When I click on login button after I provide empty input data
And I type a valid email and invalid password
And I type an invalid email and valid password
Then I type valid email address and valid password
