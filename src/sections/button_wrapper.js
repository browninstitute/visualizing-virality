import React, {  useRef} from "react";
import { useScroll} from "framer-motion";
import { useInView, motion } from "framer-motion";
import { AppearingTweetLeft } from "./appearingtweetleft";


export function BUTTON_WRAP({username,profile,text,image,date,likes,rts,replies, children}){

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
      target:ref,
      offset:["start end", "end start"]
    });
    const isInView = useInView(ref, { once: false });
    image = image? image: "https://pbs.twimg.com/profile_images/1609416420076535808/4BwbURyI_400x400.jpg";
    return(
      <AppearingTweetLeft>
      <motion.div className="basic_wrapper" ref={ref}>
          <div className="tweet-header">
            <img src={image} alt="" className="icon"/>
            <div className="tweet-header-info">
             <span>{username}</span><span>{date}</span>
             <p className="category_choose">{children}</p>           
            </div>
            
          </div>
  
  
      </motion.div>
      </AppearingTweetLeft>
    );
    };