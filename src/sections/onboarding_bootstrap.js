import React, { useState, useEffect, useRef} from "react";
import { motion, useScroll,  useTransform, useSpring, useInView } from "framer-motion";
import {styles_with_css} from'./motion.ts'
import {TWEET_SVG_NONAPPEAR} from './tweet_svg_nonappearing'
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
      highlight_lines_start: 0.33,
      highlight_lines_finish: 0.37,
      highlight_lines_finish2: 0.39,  
      remove_nonviral_start: 0.56,
      remove_nonviral_finish: 0.61,
      annotate_engagemenets_start: 0.77,
      annotate_engagements_finish: .805,
      finish: 1,
    };
    const reft1 = useRef(null);
    const isInViewt1 = useInView(reft1, { once: false, threshold:0.4 });
    const reft2 = useRef(null);
    const isInViewt2 = useInView(reft2, { once: false, threshold:0.4 });
    const reft3 = useRef(null);
    const isInViewt3 = useInView(reft3, { once: false, threshold:0.4 });
    const reft4 = useRef(null);
    const isInViewt4 = useInView(reft4, { once: false, threshold:0.4 });

    const sec_ref = useRef(null);
    const {scrollYProgress} = useScroll({
      target:sec_ref,
      offset:["start end", "end start"]
    });

    const remove_opacity = useTransform(scrollYProgress,[
      tweets_scroll_points.remove_nonviral_start,
      tweets_scroll_points.remove_nonviral_finish
    ], [1,0]) 
    const move_up = useTransform(scrollYProgress,[
      tweets_scroll_points.remove_nonviral_start,
      tweets_scroll_points.remove_nonviral_finish
    ], ["0%", "-160%"]) ;
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
      ], ["0%", "-20%", "0%"], 'spring')

    return (
      <div className="onboarding_section" ref={sec_ref}>
        <div className="onboarding_text">

            <div className="viral_text text1">
            <div className="text_sticky">
              <div className="text_container" ref={reft1} style={{
                transform: isInViewt1 ?  "translateY(-50px)" : "none" ,
                opacity: isInViewt1 ? 1 : 0.2,
                transition: "all 0.25s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"
              }}>
                  Welcome to your feed.
              </div>
            </div>
                
            </div>

            <div className='viral_text text2'>
            <div className="text_sticky">
              <div className="text_container"ref={reft2} style={{
                transform: isInViewt2 ?  "translateY(-50px)" : "none" ,
                opacity: isInViewt2 ? 1 : 0.2,
                transition: "all 0.25s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"
              }}>
                Often it has tweets that can be considered <span style={styles_with_css({color:"#1DA1F2"})}>"viral"</span>.
              </div>
            </div>
            </div>

            <div className='viral_text text3'>
            <div className="text_sticky">
              <div className="text_container" ref={reft3} style={{
                transform: isInViewt3 ?  "translateY(-50px)" : "none" ,
                opacity: isInViewt3 ? 1 : 0.2,
                transition: "all 0.25s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"
              }}>
                But there are many definitions of virality.
              </div>
            </div>
            </div>

            <div className='viral_text text4'>
            <div className="text_sticky">
              <div className="text_container" ref={reft4} style={{
                transform: isInViewt4 ?  "translateY(-50px)" : "none" ,
                opacity: isInViewt4 ? 1 : 0.2,
                transition: "all 0.25s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"
              }}>
               We defined a <span style={styles_with_css({color:"#1DA1F2"})}>"viral"</span> tweet as one that has <span style={styles_with_css({color:"#1DA1F2"})}>at least 5x </span>
               the engagement of the author's typical tweet.
              </div>
            </div>
            </div>          
        </div>

        <div className="onboarding_tweets">
          <div className="onboarding_tweet_div_sticky">
            <div className='onboarding_tweet_bg'>
            <div className="tweets_div">
                  <motion.div className="tweets_animate" style={styles_with_css({opacity:remove_opacity})} >
                        <TWEET_SVG_NONAPPEAR  username="@StateFarm" image={profile4} text="We manifested that State Farm red, Rihanna. Epic! #SuperBowl" date="02/12/2023" likes="52" rts="10" replies="6" t_link={"https://twitter.com/StateFarm/status/1624945135917191169"}/>    
                  </motion.div>
                  <motion.div className="tweets_animate" style={styles_with_css({opacity:remove_opacity})} >
                        <TWEET_SVG_NONAPPEAR username="@Wendys" image={profile3} text="Where's the beef?" date="02/13/2023" likes="6399" rts="411" replies="1250" t_link={"https://twitter.com/Wendys/status/1625165317189009409"}/>    
                  </motion.div>
                  <motion.div className="tweets_animate" style={styles_with_css({x:emphasize,opacity:remove_opacity})}>
                        <TWEET_SVG_NONAPPEAR username="@cxrtezs" text="Nvm = you should have listened when i was talking to u." date="04/23/2023" likes="82.1k" rts="21.1k" replies="63" image={profile1} t_link={"https://twitter.com/cxrtezs/status/1648949370690076672"} />    
                  </motion.div>
                  <motion.div className="tweets_animate" style={styles_with_css({opacity:remove_opacity})} >
                        <TWEET_SVG_NONAPPEAR username="@MTA" image={profile5} text="Tomorrow is the big day, @Yankees fans! ⚾️ Pitch your travel advice to your fellow fans, what's the best way to get to the home opener? 🏟️" date="03/29/2023" likes="13" rts="5" replies="0" t_link={"https://twitter.com/MTA/status/1641074159621996545"}/>    
                  </motion.div>
                  <motion.div className="tweets_animate"  id='main' style={styles_with_css({x:emphasize,y:move_up})}>
                        <div className="svg_wrap" id="second_svg" > 
                            <svg viewBox="-100 -100 500 300" fill="none" className="highlight" >
                               { <motion.path 
                                    d="M157.5 3A154.5 78.5 0 1 0 157.5 157.5A154.5 78.5 0 1 0 157.5 3Z" 
                                    stroke="#0B5684" 
                                    strokeWidth="5"
                                    pathLength={engagments}
                              />}
                            </svg>
                        </div>
                        <TWEET_SVG_NONAPPEAR username="@JUNlPER" text="the fact there hasn’t been any new internet famous cat for the last couple of years is a sign of the oncoming apocalypse" date="01/30/2023" likes="203.6k" rts="19.6k" replies="4872" image={profile2} t_link={"https://twitter.com/JUNlPER/status/1620265396539629570"} />    
                  </motion.div> 

            </div>
          </div>
          </div>
        
            
      </div>
    </div>


      
    );
  };