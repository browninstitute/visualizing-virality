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

      phone_scale_up_start: 0.133,
      phone_scale_up_finish: 0.1586,
  
      highlight_lines_start: 0.167,
      highlight_lines_finish: 0.18,
  
      remove_nonviral_start: 0.2567,
      remove_nonviral_finish: 0.28,

      
      remove_annotation_start: 0.46,
      remove_annotation_finish: 0.5,

      opacity_median_tweets_start: 0.367,
      opacity_median_tweets_middle1: 0.4067,
      opacity_median_tweets_middle2: 0.433,
      opacity_median_tweets_finish: 0.46,
      move_median_tweets_start: 0.367,
      move_median_tweets_finish: 0.4267,

      bring_bars_start: 0.57,
      bring_bars_finish: 0.62,

      remove_tweets_start: 0.5533,
      remove_tweets_finish: 0.555,

      bar_resize1: 0.633,
      bar_resize2: 0.658,
      bar_resize3: 0.758,
      bar_resize4: 0.783,

      bar_resize5: 0.883,
      bar_resize6: 0.908,

      show_percent1_start: 0.658,
      show_percent1_mid1: 0.6581,
      show_percent1_mid2: 0.6829,
      show_percent1_finish: 0.683,
      scale_percent1_start: 0.658,
      scale_percent1_mid1: 0.6581,
      scale_percent1_mid2: 0.6829,
      scale_percent1_finish: 0.683,

      show_percent2_start: 0.783,
      show_percent2_mid1: 0.7831,
      show_percent2_mid2: 0.8079,
      show_percent2_finish: 0.808,
      scale_percent2_start: 0.783,
      scale_percent2_mid1: 0.7831,
      scale_percent2_mid2: 0.8079,
      scale_percent2_finish: 0.808,

      show_percent3_start: 0.908,
      show_percent3_mid1: 0.9081,
      show_percent3_mid2: 0.9329,
      show_percent3_finish: 0.933,
      scale_percent3_start: 0.908,
      scale_percent3_mid1: 0.9081,
      scale_percent3_mid2: 0.9329,
      scale_percent3_finish: 0.933,

      finish: 1,
    };


    const sec_ref = useRef(null);
    const {scrollYProgress} = useScroll({
      target:sec_ref,
      offset:["start end", "end start"]
    });


    
    // let [refWithImg, boundsWithImg] = useMeasure()
      
    // const remove_height_t1 = useTransform(scrollYProgress,[
    //   tweets_scroll_points.remove_nonviral_start,
    //   tweets_scroll_points.remove_nonviral_finish      
    // ],[boundsWithImg.height,0])
  
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

    const last_text_opacity = useTransform(scrollYProgress, [
      tweets_scroll_points.bar_resize5,
      tweets_scroll_points.bar_resize6
    ], [0, 1]);

    const median_opacity = useTransform(scrollYProgress,[
      tweets_scroll_points.opacity_median_tweets_start,
      tweets_scroll_points.opacity_median_tweets_middle1,
      tweets_scroll_points.opacity_median_tweets_middle2,
      tweets_scroll_points.opacity_median_tweets_finish
    ], [0,1,1,0]) 


   const median_y_top = useTransform(scrollYProgress,[
      tweets_scroll_points.move_median_tweets_start,
      tweets_scroll_points.move_median_tweets_finish
   ], ["90%","0%"])

   const median_y_med_top = useTransform(scrollYProgress,[
    tweets_scroll_points.move_median_tweets_start,
    tweets_scroll_points.move_median_tweets_finish
 ], ["45%","0%"])

    const median_y_med_bot = useTransform(scrollYProgress,[
      tweets_scroll_points.move_median_tweets_start,
      tweets_scroll_points.move_median_tweets_finish
    ], ["-45%","0%"])

    const median_y_bot = useTransform(scrollYProgress,[
      tweets_scroll_points.move_median_tweets_start,
      tweets_scroll_points.move_median_tweets_finish
    ], ["-90%","0%"])
   const median_x = useTransform(scrollYProgress,[
    tweets_scroll_points.move_median_tweets_start,
    tweets_scroll_points.move_median_tweets_finish
   ], ["-10%","20%"])

   const bars_opacity = useTransform(scrollYProgress,[
    tweets_scroll_points.bring_bars_start,
    tweets_scroll_points.bring_bars_finish
   ], [0,1])

   const tweets_opacity = useTransform(scrollYProgress,[
    tweets_scroll_points.remove_tweets_start,
    tweets_scroll_points.remove_tweets_finish
   ], [1,0])


   const percents1_opacity = useTransform(scrollYProgress,[
    tweets_scroll_points.show_percent1_start,
    tweets_scroll_points.show_percent1_mid1,
    tweets_scroll_points.show_percent1_mid2,
    tweets_scroll_points.show_percent1_finish
   ], [0,1,1,0])
   const percents1_scales = useTransform(scrollYProgress,[
    tweets_scroll_points.scale_percent1_start,
    tweets_scroll_points.scale_percent1_mid1,
    tweets_scroll_points.scale_percent1_mid2,
    tweets_scroll_points.scale_percent1_finish
   ], [0,1,1,0])


   const percents2_opacity = useTransform(scrollYProgress,[
    tweets_scroll_points.show_percent2_start,
    tweets_scroll_points.show_percent2_mid1,
    tweets_scroll_points.show_percent2_mid2,
    tweets_scroll_points.show_percent2_finish
   ], [0,1,1,0])
   const percents2_scales = useTransform(scrollYProgress,[
    tweets_scroll_points.scale_percent2_start,
    tweets_scroll_points.scale_percent2_mid1,
    tweets_scroll_points.scale_percent2_mid2,
    tweets_scroll_points.scale_percent2_finish
   ], [0,1,1,0])


   const percents3_opacity = useTransform(scrollYProgress,[
    tweets_scroll_points.show_percent3_start,
    tweets_scroll_points.show_percent3_mid1,
    tweets_scroll_points.show_percent3_mid2,
    tweets_scroll_points.show_percent3_finish
   ], [0,1,1,0])
   const percents3_scales = useTransform(scrollYProgress,[
    tweets_scroll_points.scale_percent3_start,
    tweets_scroll_points.scale_percent3_mid1,
    tweets_scroll_points.scale_percent3_mid2,
    tweets_scroll_points.scale_percent3_finish
   ], [0,1,1,0])




    // const [windowSize, setWindowSize] = useState([window.innerWidth,window.innerHeight,]);

    // useEffect(() => {
    //   const handleWindowResize = () => {
    //     setWindowSize([window.innerWidth, window.innerHeight]);
    //   };
    //   window.addEventListener('resize', handleWindowResize);
    //   return () => {
    //     window.removeEventListener('resize', handleWindowResize);
    //   };
    // });

    const bar1_height = useTransform(scrollYProgress,[
      tweets_scroll_points.bar_resize1,
      tweets_scroll_points.bar_resize2,
      tweets_scroll_points.bar_resize3,
      tweets_scroll_points.bar_resize4,
      tweets_scroll_points.bar_resize5,
      tweets_scroll_points.bar_resize6  
    ],["25%","59%","59%","32%","32%","67%"])
    const bar2_height = useTransform(scrollYProgress,[
      tweets_scroll_points.bar_resize1,
      tweets_scroll_points.bar_resize2,
      tweets_scroll_points.bar_resize3,
      tweets_scroll_points.bar_resize4,
      tweets_scroll_points.bar_resize5,
      tweets_scroll_points.bar_resize6     
    ],["25%","41%","41%","45%","45%","19%"])
    const bar3_height = useTransform(scrollYProgress,[
      tweets_scroll_points.bar_resize1,
      tweets_scroll_points.bar_resize2,
      tweets_scroll_points.bar_resize3,
      tweets_scroll_points.bar_resize4,
      tweets_scroll_points.bar_resize5,
      tweets_scroll_points.bar_resize6    
    ],["25%","0%","0%","14%","14%","14%"])
    const bar4_height = useTransform(scrollYProgress,[
      tweets_scroll_points.bar_resize1,
      tweets_scroll_points.bar_resize2,
      tweets_scroll_points.bar_resize3,
      tweets_scroll_points.bar_resize4,
      tweets_scroll_points.bar_resize5,
      tweets_scroll_points.bar_resize6      
    ],["25%","0%","0%","8%","8%","0%"])

  
    // const position_phone = useTransform(scrollYProgress, (scroll_pos) => {
    //   return scroll_pos===tweets_scroll_points.phone_scale_up_finish ? "relative" : "fixed";
    // })

  
    return (
      <div className="onboarding" ref={sec_ref}>
  
        <div className="onboarding_tweets">
          <div className="tweets_padding">
            
          </div>
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
                  <motion.div className="tweets_animate" style={styles_with_css({opacity:remove_opacity})}>
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
                  <motion.div className="tweets_animate" style={styles_with_css({opacity:remove_opacity})}>
                    <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
                  </motion.div>
                  <motion.div className="tweets_animate" style={styles_with_css({opacity:remove_opacity_2, y:move_up})}>
                        <div className="svg_wrap" id="second_svg" > 
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
                
            </motion.div>
          </div>
  
        </div>
        
  
        <div className="onboarding_text">
            <div className='intro_text'>
              <div className='text_div'>
                Welcome to your feed.
              </div>
            </div>
            <div className='viral_text'>
              <div className='text_div'>
                Often it has tweets that <br></br> can be considered "viral".
              </div>
            </div>
            <div className='viral_text2'>
              <div className='text_div'>
                But there are many definitions of virality.
              </div>
            </div>
            <div className='viral_text3'>
              <div className='text_div'>
                We defined a "viral" tweet as a tweet that had at least 5x the engagement of the author's average tweet.
              <div className="stage">
            <Heart></Heart>
            </div>
              </div>
            </div>
            <div className='viral_text4'>
              <div className='text_div'>
                From this group of tweets, we selected those with more than&nbsp;<span><Counter></Counter></span>&nbsp; likes to explore. 
              </div>
             
            </div>
            
            <div className='january_text1'>
              <div className='text_div'>
                Out of the 23 billions tweets from January 2023, only 4933 had more than 100000 likes. 
                <br/>
                3407 fit our definition of "viral".
              </div>
            </div>
            <div className='january_text2'>
              <div className='text_div'>
                78% of viral tweets were from users with less than 50,000 followers.
              </div>
            </div>
            <div className='january_text3'>
              <div className='text_div'>
                They also came from a number of different categories.
                <br/>
                
                <motion.span className = 'text_side' style={styles_with_css({opacity:last_text_opacity})}>Now, let's look at some of the heavy-hitters.</motion.span>

              </div>
              

            </div>
           
            
        </div>
  
        <div className="onboarding_flare">
          <AppearingText>
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
          </AppearingText>
          <div className="flare_padding1">

          </div>

          <motion.div className="median_tweets">
            <div className="tweets_movein">
                <motion.div className="tweets_animate_movein" style={styles_with_css({opacity: median_opacity,x: median_x, y:median_y_top})}>
                  <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
                </motion.div>
                <motion.div className="tweets_animate_movein" style={styles_with_css({opacity: median_opacity,x: median_x, y:median_y_med_top})}>
                  <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
                </motion.div>
                <motion.div className="tweets_animate_movein" style={styles_with_css({opacity: median_opacity,x: median_x, y:median_y_med_bot})}>
                  <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
                </motion.div>
                <motion.div className="tweets_animate_movein" style={styles_with_css({opacity: median_opacity,x: median_x, y:median_y_bot})}>
                  <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
                </motion.div>
            </div>
                
          </motion.div>
          <div className="stacked_bars"> 
              <motion.div className="bars_div" style={styles_with_css({opacity: bars_opacity})}>
                <motion.div className="bar1"  style={styles_with_css({height: bar1_height})}>
                  <motion.div className="text1" style={styles_with_css({opacity: percents1_opacity,scale: percents1_scales})}>59% Non-Viral</motion.div>
                  <motion.div className="text2" style={styles_with_css({opacity: percents2_opacity,scale: percents2_scales})}>32% &gt; 1,000,000</motion.div>
                  <motion.div className="text3" style={styles_with_css({opacity: percents3_opacity,scale: percents3_scales})}>67% Entertainment</motion.div>
                </motion.div>
                <motion.div className="bar2" style={styles_with_css({height: bar2_height})}>
                  <motion.div className="text1" style={styles_with_css({opacity: percents1_opacity,scale: percents1_scales})}>41% Non-Viral</motion.div>
                  <motion.div className="text2" style={styles_with_css({opacity: percents2_opacity,scale: percents2_scales})}>45% &lt; 1,000,000</motion.div>
                  <motion.div className="text3" style={styles_with_css({opacity: percents3_opacity,scale: percents3_scales})}>19% Sports</motion.div>
                </motion.div>
                <motion.div className="bar3" style={styles_with_css({height: bar3_height})}>
                  <motion.div className="text1" style={styles_with_css({opacity: percents1_opacity,scale: percents1_scales})}></motion.div>
                  <motion.div className="text2" style={styles_with_css({opacity: percents2_opacity,scale: percents2_scales})}>14% &lt; 100,000</motion.div>
                  <motion.div className="text3" style={styles_with_css({opacity: percents3_opacity,scale: percents3_scales})}>14% News</motion.div>
                </motion.div>
                <motion.div className="bar4" style={styles_with_css({height: bar4_height})}>
                  <motion.div className="text1" style={styles_with_css({opacity: percents1_opacity,scale: percents1_scales})}></motion.div>
                  <motion.div className="text2" style={styles_with_css({opacity: percents2_opacity,scale: percents2_scales})}>8% &lt; 5,000</motion.div>
                  <motion.div className="text3" style={styles_with_css({opacity: percents3_opacity,scale: percents3_scales})}></motion.div>
                </motion.div>
              </motion.div>

          </div>

  
        </div>
  
  
      </div>
    );
  };