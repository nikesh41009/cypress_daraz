Feature: Merojob Login Action
Scenario: Check Positive and Negative Login Scenario of Merojob 
Given I visit merolagani login page
When I type invalid email and password
And I type a valid email and invalid password
And I type an invalid email and valid password
Then I type valid email and valid password
