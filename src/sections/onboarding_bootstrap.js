import React, { useState, useEffect, useRef} from "react";
import { motion, useScroll,  useTransform, useSpring } from "framer-motion";
import {styles_with_css} from'./motion.ts'
import {TWEET_SVG} from './tweet_svg'
import {AppearingText} from './appearingtext.js'
import {Heart} from './heart.js';
import App from "../App";
import useMeasure from "react-use-measure";
import { Counter } from "./counter";


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
              <div className='text_div container'>
                <div className='row col-12'>
               <span>We defined a "viral" tweet as</span>   <span className="under">a tweet that had at least 5x</span> 
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
                    <TWEET_SVG  username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
                  </motion.div>
                  <motion.div className="tweets_animate" style={styles_with_css({opacity:remove_opacity})}>
                    <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
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
                    <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
                  </motion.div>
                  <motion.div className="tweets_animate" style={styles_with_css({opacity:remove_opacity})}>
                    <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
                  </motion.div>
                  <motion.div className="tweets_animate" style={styles_with_css({opacity:remove_opacity_2, y:move_up, x:emphasize})}>
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
                    <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
                  </motion.div>
                
            </motion.div>
          </div>
  
        
            
        </div>
        </div>
  
        </div>
  
        </div>

      
    );
  };