import { AppearingText } from "./appearingtext"

export function DEMOTION({UserSelection, UserDemotion, SetterUserDemotion}){
    return (
        
        <div className="demotion_section container">

            <div className="row padding">
                
                </div>
            <AppearingText>
            <div className="row demotionText basicText">
                Select the level of demotion for {UserSelection.username}'s tweet to visualize
            </div>
            </AppearingText>
            <div className="row padding">
                
            </div>
            <div className="row demotionText">
                <div className="col-4 demo_but_sec">
                <button className="demo_but" style={{backgroundColor:"#a7dbfa"}} onClick={() => {
                    SetterUserDemotion( 3)
                }}>Low</button>
                </div>

                <div className="col-4 demo_but_sec">
                <button className="demo_but" style={{backgroundColor:"#44b8fc"}} onClick={() => {
                    SetterUserDemotion( 6)
                }}>Medium</button>
                </div>

                <div className="col-4 demo_but_sec">
                <button className="demo_but" style={{backgroundColor:"#076ba6"}} onClick={() => {
                    SetterUserDemotion( 9)
                }}>High</button>
                </div>
            </div>
            

        </div>
        
    )
}