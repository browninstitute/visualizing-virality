import { AppearingText } from "./appearingtext"
import { BUTTON_WRAP } from "./button_wrapper"

export function SELECTION_MENU( {UserSelection, SetterUserSelection}){
    const scrollHeight =11650;

    return (
        <div className = "container">
        <div className = "row">
            <div className = "col-6">
        <div className="selection_menu">
            <div className='buttons_div'>
                <BUTTON_WRAP image='https://pbs.twimg.com/profile_images/1592153812315394050/E4iwHS_B_400x400.jpg'>
                <button className="selection_but" onClick={() => {
                    SetterUserSelection("@TomBrady")
                   // window.scrollTo({ top: scrollHeight, behavior: 'smooth' }); //must connect to element not height

                }}>Sports</button>
                </BUTTON_WRAP>
                
                <BUTTON_WRAP image='https://pbs.twimg.com/profile_images/1636533747154550784/Gz_R3VU0_400x400.jpg'>
                <button className = "selection_but" onClick={() => {
                   SetterUserSelection("@6lack")
                   // window.scrollTo({ top: scrollHeight, behavior: 'smooth' }); //must connect to element not height

                }}>Entertainment</button>
                </BUTTON_WRAP>

                <BUTTON_WRAP image='https://pbs.twimg.com/profile_images/1613262093800677376/r3bwUusR_400x400.jpg'>
                <button className = "selection_but" onClick={() => {
                    SetterUserSelection("@SpeakerMcCarthy")
                   // window.scrollTo({ top: scrollHeight, behavior: 'smooth' }); //must connect to element not height
                }}>News</button>
                </BUTTON_WRAP>
            </div>
        </div>
        </div>
        <div className="col-6">
            <AppearingText><p className="basicText select">Now, let's dive into one of these tweets.</p></AppearingText> 

           <AppearingText><p className="basicText select">Select a category to get started</p></AppearingText> 
        </div>
        </div>
        </div>
        
    )



}