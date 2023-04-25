import {AnimatePresence, motion, useScroll, useTransform, useSpring} from 'framer-motion';
import {TWEET_SVG_NONAPPEAR} from './tweet_svg_nonappearing'
import React, { useState, useEffect ,  useRef} from "react";
import {AppearingText} from './appearingtext.js'
import {styles_with_css} from'./motion.ts'

import profile1 from "../assets/onboarding_profile1.jpg"
import profile2 from "../assets/onboarding_profile2.jpg"
import profile3 from "../assets/onboarding_profile3.jpg"
import profile4 from "../assets/onboarding_profile4.jpg"
import profile5 from "../assets/onboarding_profile5.jpg"
import profile6 from "../assets/onboarding_profile6.jpg"

export function DEMOTION_INTRO({UserSelection}){
    const [heightT,setHeightT] = useState(0)
    const refT =  useRef(null)
    useEffect(() =>{
        setHeightT(refT.current.clientHeight)
    })
    const [heightM,setHeightM] = useState(0)
    const refM =  useRef(null)
    useEffect(() =>{
        setHeightM(refM.current.clientHeight)
    })

    const sec_ref = useRef(null);
    const {scrollYProgress} = useScroll({
      target:sec_ref,
      offset:["start end", "end start"]
    });

    const amplify_scale = useTransform(scrollYProgress,[
        0.1,
        0.25
      ], ["1.5rem","2.5rem"])
    
    const demotion_scale = useTransform(scrollYProgress,[
        0.1,
        0.25
      ], ["1.5rem","0.7rem"]) 
    

    const move_tweet_down = useTransform(scrollYProgress,[
        0.5,
        0.7
      ], [0,heightT])

    
      const move_tweet_right = useTransform(scrollYProgress,[
        0.48,
        0.5,
        0.7,
        0.72,
      ], ["0%","50%","50%","0%"]) 
      
    const move_tweet_up = useTransform(scrollYProgress,[
    0.5,
    0.55
    ], [0,heightM*-1]) 


      const t_variants = {
        enter: {
            x: 0,
            opacity: 1,
          },
          exit: {
            x: -20,
            opacity: 0.2,
          },
      };

    return(
        <div className="demotion_intro_section" ref={sec_ref}>
            <div className="amplification_demotion" >
                <div className="amplification_text">
                    But {heightT} such ranking is intended to accomodate <span className='non_changing'><motion.span className='changing' style={styles_with_css({fontSize:amplify_scale,color:"#1DA1F2"})}>amplification</motion.span></span> of tweets that are deemed individually or wholly worthwhile. There is also <span  className='non_changing'><motion.span  className='changing' style={styles_with_css({fontSize:demotion_scale,color:"#1DA1F2"})}>demotion</motion.span></span> within the platform for tweets that are deemed problematic.
                </div>
                </div>
            <div className="demotion_how">
                <div className="demotion_tweet_div">
                    <div className="demotion_tweet_div_sticky">
                        <div className='demotion_tweet_bg'>
                            <AnimatePresence>
                            <motion.div className="tweets_div" 
                                initial={"exit"}
                                whileInView={"enter"}
                                viewport={{once:true, amount:0.9}}
                                transition={{staggerChildren:0.2}}>
                                    
                                <motion.div className="important_tweets"  id='main' style={styles_with_css({y:move_tweet_down,x:move_tweet_right})} >
                                    {/* animate={{height: bounds.height > 0 ? bounds.height: null}}
                                        transition={{type:"spring", bounce: 0.2, duration: 0.4}}
                                    */}
                                        <motion.div className='tweets_animate' ref={refM}  variants={t_variants} >
                                            <TWEET_SVG_NONAPPEAR username={UserSelection.username} text={UserSelection.text} date={UserSelection.date} likes={UserSelection.likes} rts={UserSelection.rts} replies={UserSelection.replies} image={UserSelection.image} t_image={UserSelection.t_image} t_vid={UserSelection.t_vid} t_link={UserSelection.t_link}/>    
                                
                                        </motion.div>
                                </motion.div>

                                <motion.div className='non_important_tweets' ref={refT} style={styles_with_css({y:move_tweet_up})}>
                                    <motion.div className="tweets_animate" variants={t_variants}  >
                                        <TWEET_SVG_NONAPPEAR  username="@StateFarm" image={profile4} text="We manifested that State Farm red, Rihanna. Epic! #SuperBowl" date="02/12/2023" likes="52" rts="10" replies="6" t_link={"https://twitter.com/StateFarm/status/1624945135917191169"}/>    
                                    </motion.div>
                                    <motion.div className="tweets_animate"  variants={t_variants} >
                                        <TWEET_SVG_NONAPPEAR username="@Wendys" image={profile3} text="Where's the beef?" date="02/13/2023" likes="6399" rts="411" replies="1250" t_link={"https://twitter.com/Wendys/status/1625165317189009409"}/>    
                                    </motion.div>
                                    <motion.div className="tweets_animate"  variants={t_variants} >
                                        <TWEET_SVG_NONAPPEAR username="@cxrtezs" text="Nvm = you should have listened when i was talking to u." date="04/23/2023" likes="82.1k" rts="21.1k" replies="63" image={profile1} t_link={"https://twitter.com/cxrtezs/status/1648949370690076672"} />    
                                    </motion.div>
                                    <motion.div className="tweets_animate"  variants={t_variants} >
                                            
                                        <TWEET_SVG_NONAPPEAR image={profile6} username="@MetroBoomin" text="I Love You Mom. ❤️🌈❤️" date="04/24/2022" likes="73k" rts="8227" replies="595" t_link={"https://twitter.com/MetroBoomin/status/1562515584515903489"}/>    
                                    </motion.div>
                                </motion.div>
                                
                            </motion.div> 
                            </AnimatePresence>
                        </div>
                    </div>
                </div>  
                <div className="demotion_text_div">

                    <div className="demotion_text_div_sticky">
                        
                            What would happen if Tom's tweet were <span style={styles_with_css({fontSize:amplify_scale,color:"#1DA1F2"})}>demoted</span>?
                            <br/>
                            <br/>
                            <br/>
                            Demotion generally works by lowering a particular tweet in your feed. The lower the tweet is in your feed, the <span style={styles_with_css({fontSize:amplify_scale,color:"#1DA1F2"})}>less likely</span> you are to <span style={styles_with_css({fontSize:amplify_scale,color:"#1DA1F2"})}>see it</span> and <span style={styles_with_css({fontSize:amplify_scale,color:"#1DA1F2"})}>engage</span> with it.
                        
                        

                    </div>

                </div>
                              
            </div>
        </div>
    )

}