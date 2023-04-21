import React, { useState, useEffect, useRef} from "react";
import { motion, useScroll,  useTransform, useSpring } from "framer-motion";
import {styles_with_css} from'./motion.ts'
import {TWEET_SVG} from './tweet_svg'
import {AppearingText} from './appearingtext.js'
import {Heart} from './heart.js';
import App from "../App";
import useMeasure from "react-use-measure";
import { Counter } from "./counter";

import profile1 from "../assets/onboarding_profile1.jpg"
import profile2 from "../assets/onboarding_profile2.jpg"
import profile3 from "../assets/onboarding_profile3.jpg"
import profile4 from "../assets/onboarding_profile4.jpg"
import profile5 from "../assets/onboarding_profile5.jpg"


export function ONBOARDING_INTRO(){
    const tweets_scroll_points = {
      start: 0,
  
      highlight_lines_start: 0.22,
      highlight_lines_finish: 0.25,
      highlight_lines_finish2: 0.278,

  
      remove_nonviral_start: 0.3889,
      remove_nonviral_finish: 0.43,

      annotate_engagemenets_start: 0.5556,
      annotate_engagements_finish: 0.6389,

      
      remove_annotation_start: 0.722,
      remove_annotation_finish: 0.778,

      remove_tweets_start: 0.722,
      remove_tweets_finish: 0.748,

      

      finish: 1,
    };


    const sec_ref = useRef(null);
    const {scrollYProgress} = useScroll({
      target:sec_ref,
      offset:["start end", "end start"]
    });




    const remove_opacity = useTransform(scrollYProgress,[
      tweets_scroll_points.remove_nonviral_start,
      tweets_scroll_points.remove_nonviral_finish
    ], [1,0]) 

    const remove_opacity_2 = useTransform(scrollYProgress,[
      tweets_scroll_points.remove_annotation_start,
      tweets_scroll_points.remove_annotation_finish
    ], [1,0]) 

    const move_up = useTransform(scrollYProgress,[
      tweets_scroll_points.remove_nonviral_start,
      tweets_scroll_points.remove_nonviral_finish
    ], ["0%", "-200%"]) ;


    const engagments = useSpring(useTransform(scrollYProgress,[
        tweets_scroll_points.annotate_engagemenets_start,
        tweets_scroll_points.annotate_engagements_finish,
      ], [0, 1]), { 
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });

    
    const emphasize = useTransform(scrollYProgress,[
        tweets_scroll_points.highlight_lines_start,
        tweets_scroll_points.highlight_lines_finish,
        tweets_scroll_points.highlight_lines_finish2
      ], ["0%", "-40%", "0%"], 'spring')



   const tweets_opacity = useTransform(scrollYProgress,[
    tweets_scroll_points.remove_tweets_start,
    tweets_scroll_points.remove_tweets_finish
   ], [1,0])

  
    return (
      <div className="container onboarding" ref={sec_ref}>
        <div className="row">
        <div className="col-8">
        <div className="onboarding_text">
            <AppearingText>
            <div className="welcome">
              <div className='text_div'>
                Welcome to your feed.
              </div>
            </div>
            </AppearingText>
            <AppearingText>
            <div className='viral_text'>
              <div className='text_div'>
                Often it has tweets that <br></br> can be considered "viral".
              </div>
            </div>
            </AppearingText>
            <AppearingText>
            <div className='viral_text2'>
              <div className='text_div'>
                But there are many definitions of virality.
              </div>
            </div>
            </AppearingText>
            <AppearingText>
            <div className='viral_text3 container'>
              <div className='text_div2 container'>
                <div className='row col-12'>
               <span>We defined a "viral" tweet as</span>  <span>a  tweet that had at least 5x</span>
               <span> the engagement </span> 
                <div className="stage row">
            <Heart></Heart>
               </div> <span>of the author's average tweet.</span>
                </div>
              
              </div>
            </div>
            </AppearingText>
            <AppearingText>
            <div className='viral_text4 container'>
            
              <div className='text_div short container'>
              <div className='row col-12'>We then narrowed that group down to tweets that had at least
              <div className='row col-12 big'>
              <Counter></Counter>
              </div>
              likes.
              </div>
               

              <br></br>
              </div>
             
            </div>
            </AppearingText>
            
            </div>
        </div>
           
        <div className="col-4  ">
          <div className="onboarding_tweets">
            
          <div className="tweets_wrapper">
            <motion.div className="tweets_div" style={styles_with_css({opacity:tweets_opacity})}>
                  <motion.div className="tweets_animate" style={styles_with_css({opacity:remove_opacity})} >
                    {/* animate={{height: bounds.height > 0 ? bounds.height: null}}
                        transition={{type:"spring", bounce: 0.2, duration: 0.4}}
                    */}
                    <TWEET_SVG  username="@StateFarm" image={profile4} text="We manifested that State Farm red, Rihanna. Epic! #SuperBowl" date="02/12/2023" likes="52" rts="10" replies="6" t_link={"https://twitter.com/StateFarm/status/1624945135917191169"}/>    
                  </motion.div>
                  <motion.div className="tweets_animate" style={styles_with_css({opacity:remove_opacity})}>
                    <TWEET_SVG username="@Wendys" image={profile3} text="Where's the beef?" date="02/13/2023" likes="6399" rts="411" replies="1250" t_link={"https://twitter.com/Wendys/status/1625165317189009409"}/>    
                  </motion.div>
                  <motion.div className="tweets_animate" style={styles_with_css({opacity:remove_opacity, x:emphasize})}>
                        <div className="svg_wrap" id="first_svg"> 
                        <svg viewBox="0 0 315 161" fill="none" className="highlight" >
                           {/*} <motion.path 
                                d="M3 3V158H312V3H3Z" 
                                stroke="#0B5684" 
                                strokeWidth="5"
                                pathLength={highlight_pathLength}
                />*/}
                        </svg>
                    </div>
                    <TWEET_SVG username="@cxrtezs" text="Nvm = you should have listened when i was talking to u." date="04/23/2023" likes="82.1k" rts="21.1k" replies="63" image={profile1} t_link={"https://twitter.com/cxrtezs/status/1648949370690076672"} />    
                  </motion.div>
                  <motion.div className="tweets_animate" style={styles_with_css({opacity:remove_opacity})}>
                    <TWEET_SVG username="@MTA" image={profile5} text="Tomorrow is the big day, @Yankees fans! ⚾️ Pitch your travel advice to your fellow fans, what's the best way to get to the home opener? 🏟️" date="03/29/2023" likes="13" rts="5" replies="0" t_link={"https://twitter.com/MTA/status/1641074159621996545"}/>    
                  </motion.div>
                  <motion.div className="tweets_animate" style={styles_with_css({opacity:remove_opacity_2, y:move_up, x:emphasize})}>
                        <div className="svg_wrap" id="second_svg" > 
                            <svg viewBox="-105 -100 450 350" fill="none" className="highlight" >
                               { <motion.path 
                                    d="M157.5 3A154.5 78.5 0 1 0 157.5 157.5A154.5 78.5 0 1 0 157.5 3Z" 
                                    stroke="#0B5684" 
                                    strokeWidth="5"
                                    pathLength={engagments}
                              />}
                            </svg>

                            {/* <svg viewBox="100 100 262 43" fill="none" className="highlight" >
                              {<motion.path
                              d="M3.65003 18.1045C10.8742 11.2415 23.0993 10.2547 32.3572 7.09353C48.309 1.64657 66.8775 2.37455 83.5231 2.37455C119.877 2.37455 156.23 2.37455 192.584 2.37455C203.715 2.37455 214.689 2.4416 225.704 4.34079C232.724 5.55103 241.98 7.74236 247.901 11.6377C250.904 13.6137 258.045 15.224 259.218 19.3279C261.13 26.0223 255.491 29.447 249.998 31.3001C233.133 36.9895 213.297 36.3877 195.73 36.9367C177.664 37.5013 159.632 37.7669 141.549 37.7669C122.42 37.7669 103.463 40.1264 84.3096 40.1264C72.4343 40.1264 58.3575 42.2339 46.9073 38.903C34.5145 35.2978 16.452 42.1817 6.00952 32.2614C1.64106 28.1114 1.3661 21.0993 3.65003 16.5315" 
                              stroke="#0B5684" strokeWidth="3" pathLength={engagments}/>}
                            </svg> */}

                        </div>
                    <TWEET_SVG username="@JUNlPER" text="the fact there hasn’t been any new internet famous cat for the last couple of years is a sign of the oncoming apocalypse" date="01/30/2023" likes="203.6k" rts="19.6k" replies="4872" image={profile2} t_link={"https://twitter.com/JUNlPER/status/1620265396539629570"} />    
                  </motion.div>
                
            </motion.div>
          </div>
  
        
            
        </div>
        </div>
  
        </div>
  
        </div>

      
    );
  };