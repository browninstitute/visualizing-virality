import { motion, useScroll, useSpring, useTransform, useMotionValue, useAnimation } from "framer-motion";
import React, { useState, useEffect ,  useRef} from "react";
import {useInView} from 'react-intersection-observer';
import {TWEET_SVG_NONAPPEAR} from './tweet_svg_nonappearing'

export function ALGORITHM({UserSelection, SetterUserSelection}){
  // const {ref, inView} = useInView({threshold:0.2, triggerOnce:true});

  // useEffect(() => {
  //   if(inView){
  //     if (!("unchecked" in UserSelection)){
  //       SetterUserSelection("@TomBrady2")
  //     }
  //   }

    
  // }, [inView]);


  return(
    <>      
    <div className="algorithm_section">
      <div className="algorithm_text">  
       
      { (!("unselected" in UserSelection)) && 
        <span>You selected the {UserSelection.category} category. </span>
      }
      { (("unselected" in UserSelection)) && 
        <span>Since you did not select a category, we selected {UserSelection.category} category for you. </span>
      }
       Within this category, {UserSelection.username} tweeted this:
      </div>
      <div className="algorithm_tweet_container">
      <TWEET_SVG_NONAPPEAR username={UserSelection.username} text={UserSelection.text} date={UserSelection.date} likes={UserSelection.likes} rts={UserSelection.rts} replies={UserSelection.replies} image={UserSelection.image} t_image={UserSelection.t_image} t_vid={UserSelection.t_vid} t_link={UserSelection.t_link}  />    
      </div>
      <div className="algorithm_text">
      We're going to visualize how this tweet spread on Twitter's platform.
      </div>
    </div>




    <div className="gradient-transition" />
    </>


  )
  }