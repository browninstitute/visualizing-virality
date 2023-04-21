import {motion, useScroll, useTransform, useSpring} from 'framer-motion';
import {TWEET_SVG_NONAPPEAR} from './tweet_svg_nonappearing'
import React, { useState, useEffect ,  useRef} from "react";
import {AppearingText} from './appearingtext.js'
import {styles_with_css} from'./motion.ts'
export function DEMOTION_INTRO({UserSelection}){

    const sec_ref = useRef(null);
    const {scrollYProgress} = useScroll({
      target:sec_ref,
      offset:["start end", "end start"]
    });

    const amplify_scale = useTransform(scrollYProgress,[
        0.1,
        0.2
      ], ["1.5rem","2.5rem"])
    
    const demotion_scale = useTransform(scrollYProgress,[
        0.1,
        0.2
      ], ["1.5rem","0.7rem"]) 
    

    const move_tweet_down =useTransform(scrollYProgress,[
        0.5,
        0.7
      ], ["0%","420%"]) 
    
      const move_tweet_right = useTransform(scrollYProgress,[
        0.48,
        0.5,
        0.7,
        0.72,
      ], ["0%","50%","50%","0%"]) 
      
    const move_tweet_up = useTransform(scrollYProgress,[
    0.5,
    0.55
    ], ["0%","-100%"]) 

    return(
        <div className="demotion_intro_section" ref={sec_ref}>
            <div className="amplification_demotion" >
                <div className="amplification_text">
                    But such ranking is intended to accomodate <span className='non_changing'><motion.span className='changing' style={styles_with_css({fontSize:amplify_scale,color:"#1DA1F2"})}>amplification</motion.span></span> of tweets that are deemed individually or wholly worthwhile. There is also <span  className='non_changing'><motion.span  className='changing' style={styles_with_css({fontSize:demotion_scale,color:"#1DA1F2"})}>demotion</motion.span></span> within the platform for tweets that are deemed problematic.
                </div>
                </div>
            <div className="demotion_how">
                <div className="demotion_tweet_div">
                    <div className="demotion_tweet_div_sticky">
                            <motion.div className="tweets_div" >
                                <motion.div className="tweets_animate" id='main' style={styles_with_css({y:move_tweet_down,x:move_tweet_right})} >
                                    {/* animate={{height: bounds.height > 0 ? bounds.height: null}}
                                        transition={{type:"spring", bounce: 0.2, duration: 0.4}}
                                    */}
                                    <TWEET_SVG_NONAPPEAR username={UserSelection.username} text="" date={UserSelection.date} likes="" rts="" replies="" image={UserSelection.image}/>    
                                </motion.div>
                                <motion.div className="tweets_animate" style={styles_with_css({y:move_tweet_up})}>
                                    <TWEET_SVG_NONAPPEAR username="@username" text="" date="" likes="" rts="" replies=""/>    
                                </motion.div>
                                <motion.div className="tweets_animate" style={styles_with_css({y:move_tweet_up})}>
                                    <TWEET_SVG_NONAPPEAR username="@username" text="" date="" likes="" rts="" replies=""/>    
                                </motion.div>
                                <motion.div className="tweets_animate" style={styles_with_css({y:move_tweet_up})}>
                                    <TWEET_SVG_NONAPPEAR username="@username" text="" date="" likes="" rts="" replies=""/>    
                                </motion.div>
                                <motion.div className="tweets_animate" style={styles_with_css({y:move_tweet_up})}>
                                        
                                    <TWEET_SVG_NONAPPEAR username="@username" text="" date="" likes="" rts="" replies=""/>    
                                </motion.div>
                                
                            </motion.div> 
                        
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