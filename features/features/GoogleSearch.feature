Feature: Google Searching

Scenario: Search from the search bar provides correct links
Given a web browser is on Google home page
When the user enter "cucumber" into the search box
Then links related to "Cucumber - Wikipedia" are shown on the results page

