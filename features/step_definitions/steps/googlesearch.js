
import {Given, When, Then } from 'cucumber'
import Url from '../../../PageObjects/Url'
import GoogleSearchPage from '../../../PageObjects/GoogleSearchPage'
import GoogleResultsPage from '../../../PageObjects/GoogleResultsPage'

Given('a web browser is on Google home page',()=>{

    Url.loadURL()
})

When(/^the user enter "(.*)" into the search box$/, keyword => {
    GoogleSearchPage.SearchInput(keyword)
})

Then (/^links related to "(.*)" are shown on the results page$/,(linktext) =>{

GoogleResultsPage.LinkDisplayed(linktext)

})

//the user enter "cucumber" into the search field

