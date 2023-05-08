import { AppearingText } from "./appearingtext"
import { motion, useAnimationControls } from "framer-motion";
import React, { useState, useEffect } from "react";
import brady_p from '../assets/brady_profile.jpg'
import black_p from '../assets/black_profile.jpg'
import mccarthy_p from '../assets/mccarthy_profile.jpg'

export function SELECTION_MENU( {UserSelection, SetterUserSelection,ScrollToSelection}){
    const [hoverB1, setHoverB1] = useState(false);
    const [hoverB2, setHoverB2] = useState(false);
    const [hoverB3, setHoverB3] = useState(false);
    const controlsB1 = useAnimationControls();
    const controlsB2 = useAnimationControls();
    const controlsB3 = useAnimationControls();
    const controlsI1 = useAnimationControls();
    const controlsI2 = useAnimationControls();
    const controlsI3 = useAnimationControls();
    useEffect(() => {
        if(hoverB1){
            controlsB1.start({
                scale:1.1,
                opacity:1,
                })
            controlsI1.start({
                y:"-5vw",
                opacity: 1,
            })
            controlsB2.start({opacity:0.5,scale:1})
            controlsI2.start({
                y:"-0vw",
                opacity:0
            })
            controlsB3.start({opacity:0.5,scale:1})
            controlsI3.start({
                y:"-0vw",
                opacity:0
            })
        }
        if(hoverB2){
            controlsB1.start({opacity:0.5,scale:1})
            controlsI1.start({
                y:"-0vw",
                opacity:0
            })
            controlsB2.start({
                scale:1.1,
                opacity:1,
                })
            controlsI2.start({
                y:"-5vw",
                opacity: 1,
                })
            controlsB3.start({opacity:0.5,scale:1})   
            controlsI3.start({
                y:"-0vw",
                opacity:0
            })        
        }
        if(hoverB3){
            controlsB1.start({opacity:0.5,scale:1})
            controlsI1.start({
                y:"-0vw",
                opacity:0
            })
            controlsB2.start({opacity:0.5,scale:1})
            controlsI2.start({
                y:"-0vw",
                opacity:0
            })
            controlsB3.start({
                scale:1.1,
                opacity:1,
                })          
            controlsI3.start({
                y:"-5vw",
                opacity: 1,
                })
        }
        if (!hoverB1 && !hoverB2 && !hoverB3){
            controlsB1.start({opacity:1,scale:1})
            controlsI1.start({
                y:"0vw",
                opacity:0,
            })
            controlsB2.start({opacity:1,scale:1})
            controlsI2.start({
                y:"0vw",
                opacity:0,
            })
            controlsB3.start({opacity:1,scale:1})  
            controlsI3.start({
                y:"0vw",
                opacity:0,
            })     
        }
    }, [hoverB1,hoverB2,hoverB3]);

    return (
        <div className="menu_section">

            <div className="menu_buttons_div">
                <div className="menu_buttons_background">
                    <div className="menu_buttons_wrapper">
                        <div className="menu_button_block">
                            <motion.img src={brady_p} alt="" className="menu_pic" animate={controlsI1} />
                            <a  href="#0">
                            <motion.div className="menu_button sports" onClick={() => {SetterUserSelection("@TomBrady");ScrollToSelection();}} onHoverStart={e => {setHoverB1(true)}} onHoverEnd={e => {setHoverB1(false)}} animate={controlsB1} >Sports</motion.div>
                            </a>
                        </div>
                        <div className="menu_button_block">
                            <motion.img src={mccarthy_p} alt="" className="menu_pic" animate={controlsI2}/>
                            <a  href="#0">
                            <motion.div className="menu_button news" onClick={() => {SetterUserSelection("@SpeakerMcCarthy");ScrollToSelection();}} onHoverStart={e => {setHoverB2(true)}} onHoverEnd={e => {setHoverB2(false)}} animate={controlsB2}  >News</motion.div>
                            </a>
                        </div>
                        <div className="menu_button_block">
                            <motion.img src={black_p} alt="" className="menu_pic" animate={controlsI3}/>
                            <a  href="#0">
                            <motion.div className="menu_button entertainment" onClick={() => {SetterUserSelection("@6lack");ScrollToSelection();}} onHoverStart={e => {setHoverB3(true)}} onHoverEnd={e => {setHoverB3(false)}} animate={controlsB3} >Entertainment</motion.div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menu_text_div">
                <div className="menu_text">
                   <AppearingText>Let's dive into one of these tweets!<br/></AppearingText> 
                    <br/>
                    <br/>
                   <AppearingText>Select a category to get started.</AppearingText> 
                </div>

            </div>

        </div>
        
    )



}