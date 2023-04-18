import React, {  useRef} from "react";
import { useScroll} from "framer-motion";
import { useInView, motion } from "framer-motion";
import { AppearingTweet } from "./appearingtweet";


export function TWEET_SVG({username,profile,text,image,date,likes,rts,replies}){

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
      target:ref,
      offset:["start end", "end start"]
    });
    const isInView = useInView(ref, { once: false });
    image = image? image: "https://pbs.twimg.com/profile_images/1609416420076535808/4BwbURyI_400x400.jpg";
    return(
      <motion.div className="tweet-wrap" ref={ref}>
          <div className="tweet-header">
            <img src={image} alt="" className="avator"/>
            <div className="tweet-header-info">
             <span>{username}</span><span>{date}</span>
             <p>{text}</p>           
            </div>
            
          </div>
  
  
          <div className="tweet-info-counts">
            <div className="comments">
              <svg className="feather feather-message-circle sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <div className="comment-count">{replies}</div>
            </div>
            <div className="retweets">
              <svg className="feather feather-repeat sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
              <div className="retweet-count">{rts}</div>
            </div>
            <div className="likes">
              <svg className="feather feather-heart sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              <div className="likes-count">{likes}</div>
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
          </div>
  
      </motion.div>
    );
    };