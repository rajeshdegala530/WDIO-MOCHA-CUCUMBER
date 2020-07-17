
import {Given, When, Then } from 'cucumber'
import Url from '../../../PageObjects/Url'
import GoogleSearchPage from '../../../PageObjects/GoogleSearchPage'
import GoogleResultsPage from '../../../PageObjects/GoogleResultsPage'

Given('a web browser is on Google home page',()=>{

    Url.loadURL()
})

When(/^the user enter "(.*)" into the search box$/, (SearchText) => {
    GoogleSearchPage.SearchInput(SearchText)
})

Then (/^links related to "(.*)" are shown on the results page$/,(Result) =>{

GoogleResultsPage.LinkDisplayed(Result)

})

//the user enter "cucumber" into the search field

