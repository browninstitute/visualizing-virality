import React, {  useRef, useState} from "react";
import { motion, useScroll,  useTransform, useSpring } from "framer-motion";
import {styles_with_css} from'./motion.ts'
import {TWEET_SVG} from './tweet_svg'
import {AppearingText} from './appearingtext.js'
import { useInView } from "framer-motion";
import { Counter } from "./counter";
import {Heart} from "./heart.js"


import App from "../App";

export function ONBOARDING_METHODOLOGY(){
    const tweets_scroll_points = {
    
    };
    


    const sec_ref = useRef(null);
    const {scrollYProgress} = useScroll({
      target:sec_ref,
      offset:["start end", "end start"]
    });

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    console.log(isInView);

    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(100);
    // let [ref, bounds] = useMeasure()
   

  

    // const tweet_height = useTransform(scrollYProgress, [
    //     tweets_scroll_points.highlight_lines_start,
    //     tweets_scroll_points.highlight_lines_finish
    //     ], [ 100 ,0 ])
    
  
    // const position_phone = useTransform(scrollYProgress, (scroll_pos) => {
    //   return scroll_pos===tweets_scroll_points.phone_scale_up_finish ? "relative" : "fixed";
    // })
  
  
    return (
      <div className="onboarding2" ref={sec_ref}>
         
         <AppearingText>
        <div className="text_main definition_text"> We defined a "viral" tweet as a tweet that had at least 5x the engagement of the author's average tweet. </div>
        </AppearingText>
        <div className="stage">
            <Heart></Heart>
        </div>
        <AppearingText>
        <div className=" text_main counting_text"> From this group of tweets, we selected those with more than&nbsp;<span><Counter></Counter></span>&nbsp; likes to explore. </div>
        </AppearingText>
        

     </div>
 
    
  
    );
  };