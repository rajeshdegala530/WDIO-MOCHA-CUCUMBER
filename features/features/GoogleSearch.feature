Feature: Google Searching

Scenario: Search from the search bar provides correct links
Given a web browser is on Google home page
When the user enter "Back to the Future" into the search box
Then links related to "Back to the Future - Wikipedia" are shown on the results page


Scenario Outline: Search form the google search bar provide correct links - Outline Test
Given a web browser is on Google home page
When the user enter "<SearchText>" into the search box
Then links related to "<Result>" are shown on the results page

Examples:
|SearchText | Result |
|Cucumber   | Cucumber - Wikipedia|
|News       |Home - BBC News|
|Weather    |Wellingborough - BBC Weather|



