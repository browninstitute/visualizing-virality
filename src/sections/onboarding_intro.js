import React, {  useRef} from "react";
import { motion, useScroll,  useTransform, useSpring } from "framer-motion";
import {styles_with_css} from'./motion.ts'
import {TWEET_SVG} from './tweet_svg'
import useMeasure from "react-use-measure";

export function ONBOARDING_INTRO(){
    const tweets_scroll_points = {
      start: 0,

      phone_scale_up_start: 0.200,
      phone_scale_up_finish: 0.201,
  
      highlight_lines_start: 0.250,
      highlight_lines_finish: 0.265,
  
      remove_nonviral_start: 0.300,
      remove_nonviral_finish: 0.320,

      finish: 1,
    };


    const sec_ref = useRef(null);
    const {scrollYProgress} = useScroll({
      target:sec_ref,
      offset:["start end", "end start"]
    });


    // let [ref, bounds] = useMeasure()

  
    const phone_scaleup = useTransform(scrollYProgress, [
      tweets_scroll_points.phone_scale_up_start,
      tweets_scroll_points.phone_scale_up_finish
    ], [1,1.2])
    const phone_opacity = useTransform(scrollYProgress, [
      tweets_scroll_points.phone_scale_up_start,
      tweets_scroll_points.phone_scale_up_finish   
    ], [1,0])

    const highlight_pathLength = useTransform(scrollYProgress, [
        tweets_scroll_points.highlight_lines_start,
        tweets_scroll_points.highlight_lines_finish
        ], [ 0 ,1 ])
    
    // const tweet_height = useTransform(scrollYProgress, [
    //     tweets_scroll_points.highlight_lines_start,
    //     tweets_scroll_points.highlight_lines_finish
    //     ], [ 100 ,0 ])
    
  
    // const position_phone = useTransform(scrollYProgress, (scroll_pos) => {
    //   return scroll_pos===tweets_scroll_points.phone_scale_up_finish ? "relative" : "fixed";
    // })
  
    return (
      <div className="onboarding" ref={sec_ref}>
  
        <div className="onboarding_tweets">
          <div className="tweets_padding">
            
          </div>
          <div className="tweets_wrapper">
            <motion.div className="tweets_div" >
                  <motion.div className="tweets_animate">
                    {/* animate={{height: bounds.height > 0 ? bounds.height: null}}
                        transition={{type:"spring", bounce: 0.2, duration: 0.4}}
                    */}
                    <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
                  </motion.div>
                  <motion.div className="tweets_animate">
                    <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
                  </motion.div>
                  <motion.div className="tweets_animate">
                        <div className="svg_wrap" id="first_svg"> 
                        <svg viewBox="0 0 315 161" fill="none" className="highlight" >
                            <motion.path 
                                d="M3 3V158H312V3H3Z" 
                                stroke="#0B5684" 
                                strokeWidth="5"
                                pathLength={highlight_pathLength}
                            />
                        </svg>
                    </div>
                    <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
                  </motion.div>
                  <motion.div className="tweets_animate">
                    <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
                  </motion.div>
                  <motion.div className="tweets_animate">
                        <div className="svg_wrap" id="second_svg"> 
                            <svg viewBox="0 0 315 161" fill="none" className="highlight" >
                                <motion.path 
                                    d="M3 3V158H312V3H3Z" 
                                    stroke="#0B5684" 
                                    strokeWidth="5"
                                    pathLength={highlight_pathLength}
                                />
                            </svg>
                        </div>
                    <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
                  </motion.div>
                  <motion.div className="tweets_animate">
                    <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
                  </motion.div>
            </motion.div>
          </div>
  
        </div>
        
  
        <div className="onboarding_text">
            <div className='intro_text'>
              <div className='text_div'>
                Welcome to your feed
              </div>
            </div>
            <div className='viral_text'>
              <div className='text_div'>
                Often it has tweets that can be considered "viral"
              </div>
            </div>
            <div className='viral_text2'>
              <div className='text_div'>
                But there are many definitions of virality
                {/* add text for our definition here that animates in */}
              </div>
            </div>
            
        </div>
  
        <div className="onboarding_flare">
          <motion.div className="intro_phone_screen" style={styles_with_css({opacity: phone_opacity,scale: phone_scaleup})}>
            <div className="svg_wrap">
              <svg viewBox="0 0 484 901" fill="none" className='phone'>
  
                  <g filter="url(#filter0_d_507_113)">
                  <path d="M38 140.791C38 139.802 38.8018 139 39.7908 139H48.2092C49.1983 139 50 139.802 50 140.791V170.209C50 171.198 49.1983 172 48.2092 172H39.7908C38.8018 172 38 171.198 38 170.209V140.791Z" fill="#55585D"/>
                  <path d="M38 200.791C38 199.802 38.8018 199 39.7908 199H48.2092C49.1983 199 50 199.802 50 200.791V260.209C50 261.198 49.1983 262 48.2092 262H39.7908C38.8018 262 38 261.198 38 260.209V200.791Z" fill="#55585D"/>
                  <path d="M38 281.791C38 280.802 38.8018 280 39.7908 280H48.2092C49.1983 280 50 280.802 50 281.791V341.209C50 342.198 49.1983 343 48.2092 343H39.7908C38.8018 343 38 342.198 38 341.209V281.791Z" fill="#55585D"/>
                  <path d="M434 224.791C434 223.802 434.802 223 435.791 223H444.209C445.198 223 446 223.802 446 224.791V317.209C446 318.198 445.198 319 444.209 319H435.791C434.802 319 434 318.198 434 317.209V224.791Z" fill="#55585D"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M44.0003 45.2339C44.0003 27.4316 58.4319 13 76.2342 13H407.767C425.569 13 440.001 27.4316 440.001 45.2339V805.767C440.001 823.569 425.569 838.001 407.767 838.001H76.2342C58.4319 838.001 44.0003 823.569 44.0003 805.767V45.2339ZM59.0004 53.0707C59.0004 39.2245 70.225 27.9999 84.0712 27.9999H143.001V45.4646C143.001 52.3877 148.613 58 155.536 58H328.465C335.389 58 341.001 52.3877 341.001 45.4646V27.9999H399.93C413.776 27.9999 425.001 39.2245 425.001 53.0707V797.93C425.001 811.776 413.776 823 399.93 823H84.0712C70.225 823 59.0004 811.776 59.0004 797.93V53.0707Z" fill="#3E3E3E"/>
                  <path d="M211.999 37.001C211.999 35.3441 213.342 34.001 214.999 34.001H268.999C270.656 34.001 271.999 35.3441 271.999 37.001C271.999 38.6578 270.656 40.001 268.999 40.001H214.999C213.342 40.001 211.999 38.6578 211.999 37.001Z" fill="#5E5E5E"/>
                  <path d="M299 37C299 40.3137 296.313 43 293 43C289.686 43 287 40.3137 287 37C287 33.6863 289.686 31 293 31C296.313 31 299 33.6863 299 37Z" fill="black"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_507_113" x="0" y="-3" width="484" height="907.001" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feMorphology radius="12" operator="erode" in="SourceAlpha" result="effect1_dropShadow_507_113"/>
                  <feOffset dy="25"/>
                  <feGaussianBlur stdDeviation="25"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_507_113"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_507_113" result="shape"/>
                  </filter>
                  </defs>
              
              </svg>
            </div>
          
          </motion.div>
  

  
        </div>
  
  
      </div>
    );
  };