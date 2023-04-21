import { motion, useScroll, useSpring, useTransform, useMotionValue, useAnimation } from "framer-motion";
import React, { useState, useEffect ,  useRef} from "react";
import {useInView} from 'react-intersection-observer';
import {TWEET_SVG} from './tweet_svg'
import { TIMELINE_TWEET_SVG } from "./timeline_tweet_svg";

export function TIMELINE_BLOCK({username,name,profile,text,image,date,likes,rts,replies,t_image,t_vid,t_link}){
    const {ref, inView} = useInView({threshold:0.1, triggerOnce:true});
    const animation_movein = useAnimation();
    useEffect(() => {
  
      if(inView){
        animation_movein.start({
          y:0,
          opacity:1,
          transition:{
            type: 'spring', duration: 1, bounce: 0.3
          }
        })
      }
      if(!inView){
        animation_movein.start({y:'2vw',opacity:0})
      }
      
    }, [inView]);
  
    return(
      <div ref={ref} className='timeline_block'>
        
        <TIMELINE_TWEET_SVG username={username} text={text} date={date} likes={likes} rts={rts} replies={replies} image={image} t_image={t_image} t_vid={t_vid} t_link={t_link}/>   
        
        <motion.div className='timeline_text' animate={animation_movein}>
          <p>{name}</p>
          <h5>{date}</h5>
        </motion.div>
      </div>
    );
  
  };