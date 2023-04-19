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
        scroll_points.bar_resize1,
        scroll_points.bar_resize2+0.05,
        scroll_points.bar_resize3,
        scroll_points.bar_resize3+0.05,
        scroll_points.bar_resize4,
        scroll_points.bar_resize4+0.05,
      ],["100%","59%","59%","32%","32%","67%"])
      const bar2_height = useTransform(scrollYProgress,[
        scroll_points.bar_resize1,
        scroll_points.bar_resize2+0.05,
        scroll_points.bar_resize3,
        scroll_points.bar_resize3+0.05,
        scroll_points.bar_resize4,
        scroll_points.bar_resize4+0.05, 
      ],["0%","41%","41%","45%","45%","19%"])
      const bar3_height = useTransform(scrollYProgress,[
        scroll_points.bar_resize1,
        scroll_points.bar_resize2+0.05,
        scroll_points.bar_resize3,
        scroll_points.bar_resize3+0.05,
        scroll_points.bar_resize4,
        scroll_points.bar_resize4+0.05,
      ],["0%","0%","0%","14%","14%","14%"])
      const bar4_height = useTransform(scrollYProgress,[
        scroll_points.bar_resize1,
        scroll_points.bar_resize2+0.05,
        scroll_points.bar_resize3,
        scroll_points.bar_resize3+0.05,
        scroll_points.bar_resize4,
        scroll_points.bar_resize4+0.05,
      ],["0%","0%","0%","8%","8%","0%"])

      const text1_opacity = useTransform(scrollYProgress,[
        scroll_points.bar_resize1-0.05,
        scroll_points.bar_resize1,
        scroll_points.bar_resize1+0.29,
        scroll_points.bar_resize1+0.3,
      ], [0.4,1,0.4,0])
      const text1_y = useTransform(scrollYProgress,[
        scroll_points.bar_resize1-0.05,
        scroll_points.bar_resize1,
        scroll_points.bar_resize1+0.2,
        scroll_points.bar_resize1+0.3,
      ], ["5%","0%","0%","-20%"])

    return (
        <div className='bargraph_section' ref={sec_ref}>
            <div className='bars_div'>
                <div className='bars_sticky'>

                
                    <div className='bars_container'>
                    <motion.div className="bar1" style={styles_with_css({height: bar1_height})}>
                    {/* <motion.div className="text1" style={styles_with_css({opacity: percents1_opacity,scale: percents1_scales})}>59% Non-Viral</motion.div> 
                    <motion.div className="text2" style={styles_with_css({opacity: percents2_opacity,scale: percents2_scales})}>32% &gt; 1,000,000</motion.div>
                    <motion.div className="text3" style={styles_with_css({opacity: percents3_opacity,scale: percents3_scales})}>67% Entertainment</motion.div> */}
                    </motion.div>
                    <motion.div className="bar2" style={styles_with_css({height: bar2_height})}>
                    {/* <motion.div className="text1" style={styles_with_css({opacity: percents1_opacity,scale: percents1_scales})}>41% Non-Viral</motion.div> 
                    <motion.div className="text2" style={styles_with_css({opacity: percents2_opacity,scale: percents2_scales})}>45% &lt; 1,000,000</motion.div>
                    <motion.div className="text3" style={styles_with_css({opacity: percents3_opacity,scale: percents3_scales})}>19% Sports</motion.div> */}
                    </motion.div>
                    <motion.div className="bar3" style={styles_with_css({height: bar3_height})}>
                    {/* <motion.div className="text1" style={styles_with_css({opacity: percents1_opacity,scale: percents1_scales})}></motion.div> 
                    <motion.div className="text2" style={styles_with_css({opacity: percents2_opacity,scale: percents2_scales})}>14% &lt; 100,000</motion.div>
                    <motion.div className="text3" style={styles_with_css({opacity: percents3_opacity,scale: percents3_scales})}>14% News</motion.div> */}
                    </motion.div>
                    <motion.div className="bar4" style={styles_with_css({height: bar4_height})}>  
                    {/* <motion.div className="text1" style={styles_with_css({opacity: percents1_opacity,scale: percents1_scales})}></motion.div> 
                    <motion.div className="text2" style={styles_with_css({opacity: percents2_opacity,scale: percents2_scales})}>8% &lt; 5,000</motion.div>
                    <motion.div className="text3" style={styles_with_css({opacity: percents3_opacity,scale: percents3_scales})}></motion.div> */}
                    </motion.div>

                    </div>
                </div>
            </div>
            <div className='text_div'>
                <div className='text_sticky'>
                    <div className='text_container_background'>
                        <div className='text_container'>
                            <motion.div className='text_scroller' style={styles_with_css({opacity: text1_opacity,y: text1_y})}>
                                Out of the 23 billions tweets from January 2023, only 4933 had more than 100000 likes. 
                            </motion.div>
                            {/* <motion.div className='text_scroller'>
                                From the 4933 total tweets, 3402 fit our definition of "viral".
                            </motion.div>
                            <motion.div className='text_scroller'>
                                78% of "viral" tweets were authored by users with more than 50,000 followers. 
                            </motion.div>
                            <motion.div className='text_scroller'>
                                They also came from a number of different categories.
                            </motion.div> */}
                        </div>
                    </div>
                </div>
                
            </div>
            
            
        </div>
    );
}