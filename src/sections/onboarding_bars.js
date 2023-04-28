import {motion, useScroll, useTransform} from 'framer-motion';
import React, { useEffect, useState, useRef } from 'react';
import {styles_with_css} from'./motion.ts'

export function ONBOARDING_BARS(){
    const scroll_points = {
        bar_resize1: .318,
        bar_resize2: .409,
        bar_resize3: .5,
        bar_resize4: .591
    };
    const sec_ref = useRef(null);
    const {scrollYProgress} = useScroll({
      target:sec_ref,
      offset:["start end", "end start"]
    });

    const bar1_height = useTransform(scrollYProgress,[
        scroll_points.bar_resize2,
        scroll_points.bar_resize2+0.05,
        scroll_points.bar_resize3,
        scroll_points.bar_resize3+0.05,
        scroll_points.bar_resize4,
        scroll_points.bar_resize4+0.05,
      ],["100%","69%","69%","33%","33%","67%"])
      const bar2_height = useTransform(scrollYProgress,[
        scroll_points.bar_resize2,
        scroll_points.bar_resize2+0.05,
        scroll_points.bar_resize3,
        scroll_points.bar_resize3+0.05,
        scroll_points.bar_resize4,
        scroll_points.bar_resize4+0.05, 
      ],["0%","31%","31%","38%","38%","19%"])
      const bar3_height = useTransform(scrollYProgress,[
        scroll_points.bar_resize2,
        scroll_points.bar_resize2+0.05,
        scroll_points.bar_resize3,
        scroll_points.bar_resize3+0.05,
        scroll_points.bar_resize4,
        scroll_points.bar_resize4+0.05,
      ],["0%","0%","0%","21%","21%","14%"])
      const bar4_height = useTransform(scrollYProgress,[
        scroll_points.bar_resize2,
        scroll_points.bar_resize2+0.05,
        scroll_points.bar_resize3,
        scroll_points.bar_resize3+0.05,
        scroll_points.bar_resize4,
        scroll_points.bar_resize4+0.05,
      ],["0%","0%","0%","8%","8%","0%"])


      const text1_opacity = useTransform(scrollYProgress,[
        scroll_points.bar_resize1-0.05,
        scroll_points.bar_resize1,
        scroll_points.bar_resize1+0.09,
        scroll_points.bar_resize1+0.1049,
        scroll_points.bar_resize1+0.105,
      ], [0.4,1,1,0.4,0])
      const text1_y = useTransform(scrollYProgress,[
        scroll_points.bar_resize1-0.05,
        scroll_points.bar_resize1,
        scroll_points.bar_resize1+0.09,
        scroll_points.bar_resize1+0.105,
      ], ["5%","0%","0%","-10%"])



      const text2_opacity = useTransform(scrollYProgress,[
        scroll_points.bar_resize2+0.019,
        scroll_points.bar_resize2+0.02,
        scroll_points.bar_resize2+0.05,
        scroll_points.bar_resize2+0.09,
        scroll_points.bar_resize2+0.1049,
        scroll_points.bar_resize2+0.105,
      ], [0,0.4,1,1,0.4,0])

      const text2_y = useTransform(scrollYProgress,[
        scroll_points.bar_resize2+0.02,
        scroll_points.bar_resize2+0.05,
        scroll_points.bar_resize2+0.09,
        scroll_points.bar_resize2+0.105,
      ], ["10%","0%","0%","-10%"])

      const text3_opacity = useTransform(scrollYProgress,[
        scroll_points.bar_resize3+0.019,
        scroll_points.bar_resize3+0.02,
        scroll_points.bar_resize3+0.05,
        scroll_points.bar_resize3+0.09,
        scroll_points.bar_resize3+0.1049,
        scroll_points.bar_resize3+0.105,
      ], [0,0.4,1,1,0.4,0])

      const text3_y = useTransform(scrollYProgress,[
        scroll_points.bar_resize3+0.02,
        scroll_points.bar_resize3+0.05,
        scroll_points.bar_resize3+0.09,
        scroll_points.bar_resize3+0.105,
      ], ["10%","0%","0%","-10%"])

      
      const text4_opacity = useTransform(scrollYProgress,[
        scroll_points.bar_resize4+0.019,
        scroll_points.bar_resize4+0.02,
        scroll_points.bar_resize4+0.05,
      ], [0,0.4,1])
      const text4_y = useTransform(scrollYProgress,[
        scroll_points.bar_resize4+0.02,
        scroll_points.bar_resize4+0.05,
      ], ["10%","0%",])

      const percents1_opacity = useTransform(scrollYProgress,[
        scroll_points.bar_resize1+0.05,
        scroll_points.bar_resize1+0.051,
        scroll_points.bar_resize1+0.089,
        scroll_points.bar_resize1+0.09,        
      ],[0,1,1,0])

      const percents2_opacity = useTransform(scrollYProgress,[
        scroll_points.bar_resize2+0.05,
        scroll_points.bar_resize2+0.051,
        scroll_points.bar_resize2+0.089,
        scroll_points.bar_resize2+0.09,        
      ],[0,1,1,0])

      const percents3_opacity = useTransform(scrollYProgress,[
        scroll_points.bar_resize3+0.05,
        scroll_points.bar_resize3+0.051,
        scroll_points.bar_resize3+0.089,
        scroll_points.bar_resize3+0.09,        
      ],[0,1,1,0])

      const percents4_opacity = useTransform(scrollYProgress,[
        scroll_points.bar_resize4+0.05,
        scroll_points.bar_resize4+0.051,      
      ],[0,1])

    return (
        <div className='bargraph_section' ref={sec_ref}>
            <div className='bars_div'>
                <div className='bars_sticky'>

                
                    <div className='bars_container'>
                    <motion.div className="bar1" style={styles_with_css({height: bar1_height})}>
                    <motion.div className="bar_text" style={styles_with_css({opacity: percents1_opacity})}>100% &lt; 100,000 likes</motion.div> 
                    <motion.div className="bar_text" style={styles_with_css({opacity: percents2_opacity})}>69% Viral</motion.div> 
                    <motion.div className="bar_text" style={styles_with_css({opacity: percents3_opacity})}>33% &gt; 1,000,000</motion.div>
                    <motion.div className="bar_text" style={styles_with_css({opacity: percents4_opacity})}>67% Entertainment</motion.div>
                    </motion.div>
                    <motion.div className="bar2" style={styles_with_css({height: bar2_height})}>
                    <motion.div className="bar_text" style={styles_with_css({opacity: percents2_opacity})}>31% Non-Viral</motion.div> 
                    <motion.div className="bar_text" style={styles_with_css({opacity: percents3_opacity})}>38% &lt; 1,000,000</motion.div>
                    <motion.div className="bar_text" style={styles_with_css({opacity: percents4_opacity})}>19% Sports</motion.div>
                    </motion.div>
                    <motion.div className="bar3" style={styles_with_css({height: bar3_height})}>
                    <motion.div className="bar_text" style={styles_with_css({opacity: percents2_opacity})}></motion.div> 
                    <motion.div className="bar_text" style={styles_with_css({opacity: percents3_opacity})}>21% &lt; 100,000</motion.div>
                    <motion.div className="bar_text" style={styles_with_css({opacity: percents4_opacity})}>14% News</motion.div>
                    </motion.div>
                    <motion.div className="bar4" style={styles_with_css({height: bar4_height})}>  
                    <motion.div className="bar_text" style={styles_with_css({opacity: percents2_opacity})}></motion.div> 
                    <motion.div className="bar_text" style={styles_with_css({opacity: percents3_opacity})}>8% &lt; 5,000</motion.div>
                    <motion.div className="bar_text" style={styles_with_css({opacity: percents4_opacity})}></motion.div>
                    </motion.div>

                    </div>
                </div>
            </div>
            <div className='text_div'>
                <div className='text_sticky'>
                    <div className='text_container_background'>
                        <div className='text_container'>
                            <motion.div className='text_scroller' style={styles_with_css({opacity: text1_opacity,y: text1_y})}>
                                Out of the 23 billion tweets from January 2023, only 4,933 had more than 100,000 likes. That's 0.000021%.
                            </motion.div>
                            <motion.div className='text_scroller' style={styles_with_css({opacity: text2_opacity,y: text2_y})}>
                                From the 4,933 total tweets, 3,402 fit our definition of "viral".
                            </motion.div>
                            <motion.div className='text_scroller' style={styles_with_css({opacity: text3_opacity,y: text3_y})}>
                                Around 1/3 of "viral" tweets were authored by users with more than 1,000,000 followers. 
                            </motion.div>
                            <motion.div className='text_scroller' style={styles_with_css({opacity: text4_opacity,y: text4_y})}>
                                They also came from a number of different categories.
                            </motion.div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            
        </div>
    );
}