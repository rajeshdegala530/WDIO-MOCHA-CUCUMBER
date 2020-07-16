import Base from './Base'

class GoogleResultsPage extends Base{

    get resultLink(){
        return $('h3')
    }
    LinkDisplayed(linktext)
    {
        this.resultLink.waitForDisplayed()  
        expect(this.resultLink).toHaveText(linktext)

      }
        
    }


export default new GoogleResultsPage()