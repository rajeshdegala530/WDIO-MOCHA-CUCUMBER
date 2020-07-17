import Base from './Base'

class GoogleSearchPage extends Base {

    get searchInputbox(){
        return $('.gLFyf.gsfi')
    }

    get searchButton()
    {
        return $('.gNO89b')
    }

    SearchInput(SearchText)
    {
        this.searchInputbox.waitForDisplayed()
        this.searchInputbox.click()
        this.searchInputbox.setValue(SearchText)
        this.searchButton.waitForDisplayed()
        this.searchButton.click()

    }
}

export default new GoogleSearchPage()