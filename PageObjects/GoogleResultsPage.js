import Base from './Base'

class GoogleResultsPage extends Base{

    get resultLink(){
        return $('h3')
    }
    LinkDisplayed(Result)
    {
        this.resultLink.waitForDisplayed()  
        expect(this.resultLink).toBeDisplayed(Result)

      }
        
    }


export default new GoogleResultsPage()