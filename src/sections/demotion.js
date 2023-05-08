
import { motion,  useAnimationControls } from "framer-motion";
import React, { useEffect } from "react";

export function DEMOTION({UserSelection, UserDemotion, SetterUserDemotion}){
    const controlsB1 = useAnimationControls();
    const controlsB2 = useAnimationControls();
    const controlsB3 = useAnimationControls();
    const controlsS1 = useAnimationControls();
    const controlsS2 = useAnimationControls();
    useEffect(() => {
        if (UserDemotion == 3){


            controlsS2.start({
                x:"-330%",
                backgroundColor: "#A7DBFA"
            })
        }
        if (UserDemotion == 6){


            controlsS2.start({
                x:0,
                backgroundColor: "#1DA1F2"
            })
            
        }
        if (UserDemotion == 9){
                

            controlsS2.start({
                x:"330%",
                backgroundColor: "#076BA6"
            })
            
        }
    }, [UserDemotion]);
    return (
        
        <div className="demotion_section">



            <div className="demotionText">
                Select the level of demotion for {UserSelection.username}'s tweet to visualize
            </div>

            <div className="demotion_slider_container">
                <div className="demotion_clicker">  

                    <a href="#0"><div className="button" onClick={() => {SetterUserDemotion(3);}} ></div></a>
                    <a href="#0"><div className="button" onClick={() => {SetterUserDemotion(6);}} ></div></a>
                    <a href="#0"><div className="button" onClick={() => {SetterUserDemotion(9);}} ></div></a>
                </div>

                <div className="demotion_nonclicker">
                    <div className="demotion_slider">
                        <motion.div className="demotion_slider_main" ></motion.div>
                        <motion.div className="demotion_slider_bar" animate={controlsS2}></motion.div>
                    </div>
                    <div className="demotion_buttons">
                        <div className="demotion_button_container"> <motion.div className="demotion_button low"  animate={controlsB1}>Low</motion.div> </div>
                        <div className="demotion_button_container"> <motion.div className="demotion_button medium" animate={controlsB2}>Medium</motion.div> </div>
                        <div className="demotion_button_container"> <motion.div className="demotion_button high" animate={controlsB3}>High</motion.div> </div>
                    </div>
                </div>
                
            </div>
            

        </div>
        
    )
}