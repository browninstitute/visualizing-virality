import { AppearingText } from "./appearingtext"

export function DEMOTION({UserSelection, SetterUserSelection}){
    return (
        <div className="demotion_section container">
            {/* <div className="row demotionText">
                DEMOTIoN ONBOARDING
            </div> */}
            <AppearingText>
            <div className="row demotionText basicText">
                Now let's see the effect demotion has on {UserSelection.username}'s tweet we explored earlier.
            </div>
            </AppearingText>
            <div className="row demotionText">
                <div className="col-4 demo_but_sec">
                <button className="demo_but" style={{backgroundColor:"#a7dbfa"}} onClick={() => {
                    SetterUserSelection(UserSelection.username, 3)
                }}>Low</button>
                </div>

                <div className="col-4 demo_but_sec">
                <button className="demo_but" style={{backgroundColor:"#44b8fc"}} onClick={() => {
                    SetterUserSelection(UserSelection.username, 6)
                }}>Medium</button>
                </div>

                <div className="col-4 demo_but_sec">
                <button className="demo_but" style={{backgroundColor:"#076ba6"}} onClick={() => {
                    SetterUserSelection(UserSelection.username, 9)
                }}>High</button>
                </div>
        </div>
        <AppearingText>
        <div className="row demotionText basicText">
                Use the above buttons to control the level of demotion in the visual below.
            </div>
        </AppearingText>

        </div>
        
    )
}