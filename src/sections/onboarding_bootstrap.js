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
import { AppearingTweet } from "./appearingtweet";

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
    
    const t_variants = {
        enter: {
            x: 0,
            opacity: 1,
          },
          exit: {
            x: 20,
            opacity: 0.2,
          },
      };

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
            <motion.div className="tweets_div"
              initial={"exit"}
              whileInView={"enter"}
              viewport={{once:true, amount:0.9}}
              transition={{staggerChildren:0.2}}>
                  <motion.div className="tweet_nonmain" variants={t_variants}>
                  <motion.div className="tweets_animate" style={styles_with_css({opacity:remove_opacity})}  >
                        <TWEET_SVG_NONAPPEAR  username="@StateFarm" image={profile4} text="We manifested that State Farm red, Rihanna. Epic! #SuperBowl" date="02/12/2023" likes="52" rts="10" replies="6" t_link={"https://twitter.com/StateFarm/status/1624945135917191169"}/>    
                  </motion.div>
                  </motion.div>

                  <motion.div className="tweet_nonmain" variants={t_variants}>
                  <motion.div className="tweets_animate" style={styles_with_css({opacity:remove_opacity})} >
                        <TWEET_SVG_NONAPPEAR username="@Wendys" image={profile3} text="Where's the beef?" date="02/13/2023" likes="6399" rts="411" replies="1250" t_link={"https://twitter.com/Wendys/status/1625165317189009409"}/>    
                  </motion.div>
                  </motion.div>

                  <motion.div className="tweet_nonmain" variants={t_variants}>
                  <motion.div className="tweets_animate" style={styles_with_css({x:emphasize,opacity:remove_opacity})}>
                        <TWEET_SVG_NONAPPEAR username="@cxrtezs" text="Nvm = you should have listened when i was talking to u." date="04/23/2023" likes="82.1k" rts="21.1k" replies="63" image={profile1} t_link={"https://twitter.com/cxrtezs/status/1648949370690076672"} />    
                  </motion.div>
                  </motion.div>

                  <motion.div className="tweet_nonmain" variants={t_variants}>
                  <motion.div className="tweets_animate" style={styles_with_css({opacity:remove_opacity})} >
                        <TWEET_SVG_NONAPPEAR username="@MTA" image={profile5} text="Tomorrow is the big day, @Yankees fans! ⚾️ Pitch your travel advice to your fellow fans, what's the best way to get to the home opener? 🏟️" date="03/29/2023" likes="13" rts="5" replies="0" t_link={"https://twitter.com/MTA/status/1641074159621996545"}/>    
                  </motion.div>
                  </motion.div>

                  <motion.div className="tweet_main"  variants={t_variants}>
                    <motion.div className="tweets_animate" id='main' style={styles_with_css({x:emphasize,y:move_up})} >
                          
                          
                          <a  href="https://twitter.com/JUNlPER/status/1620265396539629570">
                            <motion.div className="tweet-wrap"  >
                                <div className="tweet-header">
                                  <img src={profile2} alt="" className="avator"/>
                                  
                                  <div className="tweet-header-info">
                                  <span>@JUNlPER</span><span>01/30/2023</span>
                                  <p>the fact there hasn’t been any new internet famous cat for the last couple of years is a sign of the oncoming apocalypse</p>  
                                  </div>
                                  
                                </div>

                                
                        
                                <div className="tweet-info-counts">
                                  <div className="comments">
                                    <svg className="feather feather-message-circle sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                    <div className="comment-count">4872</div>
                                  </div>
                                  <div className="retweets">
                                    <svg className="feather feather-repeat sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
                                    <div className="retweet-count">19.6k</div>
                                  </div>
                                  <div className="likes">
                                    <svg className="feather feather-heart sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    <div className="likes-count">203.6k</div>
                                  </div>
                                  <div className="message">
                                    <svg id="Logo" xmlns="http://www.w3.org/2000/svg" width="20" height="20" x="0px" y="0px"
                                      viewBox="0 0 248 204">
                                      <g id="Logo_1_">
                                        <path id="white_background" fill="#1D9BF0" d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
                                          C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
                                          c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
                                          c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
                                          c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
                                          c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"/>
                                      </g>
                                    </svg>
                                  </div>
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
                                </div>
                        
                            </motion.div>
                          </a>
                    
                    </motion.div>
                  </motion.div> 

            </motion.div>
          </div>
          </div>
        
            
      </div>
    </div>


      
    );
  };