import {motion, useScroll, useTransform} from 'framer-motion';
import React, { useEffect, useState, useRef } from 'react';
import {TWEET_SVG_NONAPPEAR} from './tweet_svg_nonappearing';
import {styles_with_css} from'./motion.ts'

export function GITHUB({UserSelection}){

    const sec_ref = useRef(null);
    const {scrollYProgress} = useScroll({
      target:sec_ref,
      offset:["start end", "end start"]
    });

    const tweets_scroll_points = {
        highlight_s1_start: 0.412-0.06,
        highlight_s1_middle1: 0.413-0.06,
        highlight_s1_middle2: 0.45-0.06,
        highlight_s1_end: 0.451-0.06,

        highlight_s2_start: 0.451-0.06,
        highlight_s2_middle1: 0.452-0.06,
        highlight_s2_middle2: 0.487-0.06,
        highlight_s2_end: 0.488-0.06,

        highlight_s3_start: 0.488-0.06,
        highlight_s3_middle1: 0.489-0.06,
        highlight_s3_middle2: 0.525-0.06,
        highlight_s3_end: 0.526-0.06,

        highlight_s4_start: 0.526-0.06,
        highlight_s4_middle1: 0.527-0.06,
        highlight_s4_middle2: 0.560-0.06,
        highlight_s4_end: 0.561-0.06,

        highlight_s5_start: 0.561-0.06,
        highlight_s5_middle1: 0.562-0.06,
        highlight_s5_middle2: 0.599-0.06,
        highlight_s5_end: 0.600-0.06,

        highlight_s6_start: 0.600-0.06,
        highlight_s6_middle1: 0.601-0.06,
        highlight_s6_middle2: 0.637-0.06,
        highlight_s6_end: 0.638-0.06,

      };
      console.log(UserSelection)
        const opacity_s1 = useTransform(scrollYProgress, [
            tweets_scroll_points.highlight_s1_start,
            tweets_scroll_points.highlight_s1_middle1,
            tweets_scroll_points.highlight_s1_middle2,
            tweets_scroll_points.highlight_s1_end
            ], [0.4,1,1,0.4])
        const opacity_s2 = useTransform(scrollYProgress, [
            tweets_scroll_points.highlight_s2_start,
            tweets_scroll_points.highlight_s2_middle1,
            tweets_scroll_points.highlight_s2_middle2,
            tweets_scroll_points.highlight_s2_end
            ], [0.4,1,1,0.4])
        const opacity_s3 = useTransform(scrollYProgress, [
            tweets_scroll_points.highlight_s3_start,
            tweets_scroll_points.highlight_s3_middle1,
            tweets_scroll_points.highlight_s3_middle2,
            tweets_scroll_points.highlight_s3_end
            ], [0.4,1,1,0.4])
        const opacity_s4 = useTransform(scrollYProgress, [
            tweets_scroll_points.highlight_s4_start,
            tweets_scroll_points.highlight_s4_middle1,
            tweets_scroll_points.highlight_s4_middle2,
            tweets_scroll_points.highlight_s4_end
            ], [0.4,1,1,0.4])
        const opacity_s5 = useTransform(scrollYProgress, [
            tweets_scroll_points.highlight_s5_start,
            tweets_scroll_points.highlight_s5_middle1,
            tweets_scroll_points.highlight_s5_middle2,
            tweets_scroll_points.highlight_s5_end
            ], [0.4,1,1,0.4])
        const opacity_s6 = useTransform(scrollYProgress, [
            tweets_scroll_points.highlight_s6_start,
            tweets_scroll_points.highlight_s6_middle1,
            tweets_scroll_points.highlight_s6_middle2,
            tweets_scroll_points.highlight_s6_end
            ], [0.4,1,1,0.4])
        

        const svg1_p1 = useTransform(scrollYProgress,[
            tweets_scroll_points.highlight_s4_start,
            tweets_scroll_points.highlight_s4_start+0.005,
            ], [0,1])
        const svg1_p2 = useTransform(scrollYProgress,[
            tweets_scroll_points.highlight_s4_start+0.005,
            tweets_scroll_points.highlight_s4_start+0.01,
            ], [0,1])
        const svg1_p3 = useTransform(scrollYProgress,[
            tweets_scroll_points.highlight_s4_start+0.01,
            tweets_scroll_points.highlight_s4_start+0.015,
            ], [0,1])
        const svg1_p4 = useTransform(scrollYProgress,[
            tweets_scroll_points.highlight_s4_start+0.015,
            tweets_scroll_points.highlight_s4_start+0.02,
            ], [0,1])
        

        const svg2_p1 = useTransform(scrollYProgress,[
            tweets_scroll_points.highlight_s5_start,
            tweets_scroll_points.highlight_s5_start+0.005,
            ], [0,1])
        const svg2_p2 = useTransform(scrollYProgress,[
            tweets_scroll_points.highlight_s5_start+0.005,
            tweets_scroll_points.highlight_s5_start+0.01,
            ], [0,1])
        const svg2_p3 = useTransform(scrollYProgress,[
            tweets_scroll_points.highlight_s5_start+0.01,
            tweets_scroll_points.highlight_s5_start+0.015,
            ], [0,1])
        const svg2_p4 = useTransform(scrollYProgress,[
            tweets_scroll_points.highlight_s5_start+0.015,
            tweets_scroll_points.highlight_s5_start+0.02,
            ], [0,1])
        const svg2_p5 = useTransform(scrollYProgress,[
            tweets_scroll_points.highlight_s5_start+0.02,
            tweets_scroll_points.highlight_s5_start+0.025,
            ], [0,1])

        const svg3_p1 = useTransform(scrollYProgress,[
            tweets_scroll_points.highlight_s6_start,
            tweets_scroll_points.highlight_s6_start+0.005,
            ], [0,1])
        const svg3_p2 = useTransform(scrollYProgress,[
            tweets_scroll_points.highlight_s6_start+0.005,
            tweets_scroll_points.highlight_s6_start+0.01,
            ], [0,1])
        const svg3_p3 = useTransform(scrollYProgress,[
            tweets_scroll_points.highlight_s6_start+0.01,
            tweets_scroll_points.highlight_s6_start+0.015,
            ], [0,1])
        const svg3_p4 = useTransform(scrollYProgress,[
            tweets_scroll_points.highlight_s6_start+0.015,
            tweets_scroll_points.highlight_s6_start+0.02,
            ], [0,1])
        const svg3_p5 = useTransform(scrollYProgress,[
            tweets_scroll_points.highlight_s6_start+0.02,
            tweets_scroll_points.highlight_s6_start+0.025,
            ], [0,1])
        

    return (
        <div className='github_section' ref={sec_ref}>
            <div className='highlight_text_div'>
                <div className='highligh_text_background'>
                    <div className='highlight_text'>
                        <motion.ul>
                            <motion.li style={styles_with_css({opacity:opacity_s1})}>
                                We showed you all the engagement sources for the tweet.
                            </motion.li>
                            <motion.li style={styles_with_css({opacity:opacity_s2})}>
                                &nbsp;But not all engagements are treated by Twitter in the same manner.
                            </motion.li>
                            <motion.li style={styles_with_css({opacity:opacity_s3})}>
                                &nbsp;Of all the complex, interrelated aspects of a given tweet used in their recommendation algorithm, tweets are given a numeric rank where:
                            </motion.li>
                            <motion.li style={styles_with_css({opacity:opacity_s4})}>
                                &nbsp;replies are weighted by a factor of 1,
                            </motion.li>
                            <motion.li style={styles_with_css({opacity:opacity_s5})}>
                                &nbsp;retweets are weighted by a factor of 20 
                            </motion.li>
                            <motion.li style={styles_with_css({opacity:opacity_s6})}>
                                &nbsp;and likes are weighted by a factor of 30.
                            </motion.li>
                        </motion.ul>
                        {/* <motion.div className='highlight_sentence'>We showed you all the engagement sources for the tweet.</motion.div>
                        <motion.div className='highlight_sentence'>But not all engagements are treated by Twitter in the same manner. </motion.div>
                        <motion.div className='highlight_sentence'>Of all the complex, interrelated aspects of a given tweet used in thier 
                        recommendation algorithm, tweets are given a numeric rank where: </motion.div>
                        <motion.div className='highlight_sentence'>replies are weighted by a factor of 1, </motion.div> <motion.div className='highlight_sentence'>retweets are weighted by a factor or 20 </motion.div> 
                        <motion.div className='highlight_sentence'>and likes are weighted by a factor of 30. </motion.div>  */}
                        
                    </div>
                </div>
            </div>

            <div className='highlight_tweet_div'>
                <TWEET_SVG_NONAPPEAR username={UserSelection.username} text={UserSelection.text} date={UserSelection.date} likes={UserSelection.likes} rts={UserSelection.rts} replies={UserSelection.replies} image={UserSelection.image} t_image={UserSelection.t_image} t_vid={UserSelection.t_vid} t_link={UserSelection.t_link}  />    
                <div className='svg_div'>
                    <div className='svg_moveup'>

                        <div className='svg_wrap'></div>
                        <div className='svg_wrap'></div>
                        <div className='svg_wrap'></div>
                        <motion.div className='svg_wrap' >
                            <svg viewBox="0 0 58 35" fill="none">
                            <motion.path pathLength={svg1_p1} d="M2 10C4.6084 9.28449 7.14026 7.83231 9.82279 7.11106C16.0514 5.43638 22.2317 4.50878 28.5823 3.90614C37.7651 3.03475 46.7753 1.32763 56 2.28112" stroke="#0B5684" stroke-width="3" />
                            <motion.path pathLength={svg1_p2} d="M12 26C15.2605 26 16.8549 30 20 30" stroke="#0B5684" stroke-width="3" />
                            <motion.path pathLength={svg1_p3} d="M20 24C19.2901 24.089 19.0148 25.0408 18.5679 25.5526C17.5099 26.7644 16.8929 28.1011 16.1358 29.5395C15.5542 30.6444 14.3616 31.8439 14 33" stroke="#0B5684" stroke-width="3" />
                            <motion.path pathLength={svg1_p4} d="M28 15.7145C29.5567 15.3779 30.2481 13.3976 31.5897 12.6557C31.8505 12.5115 32.2856 11.7457 32.3077 12.0866C32.4175 13.784 32.2437 15.5065 32.3376 17.2083C32.4716 19.6374 33.1368 21.9561 33.5043 24.3394C33.7819 26.1397 33.9322 27.9726 34.3269 29.7456C34.5515 30.7544 35 31.9619 35 33" stroke="#0B5684" stroke-width="3" />
                            </svg>
                        </motion.div>
                        <div className='svg_wrap'></div>
                        <div className='svg_wrap'></div>
                        <motion.div className='svg_wrap' >
                            <svg  viewBox="0 0 58 35" fill="none">
                            <motion.path pathLength={svg2_p1} d="M2 10C4.6084 9.28449 7.14026 7.83231 9.82279 7.11106C16.0514 5.43638 22.2317 4.50878 28.5823 3.90614C37.7651 3.03475 46.7753 1.32763 56 2.28112" stroke="#0B5684" stroke-width="3"/>
                            <motion.path pathLength={svg2_p2} d="M12 26C15.2605 26 16.8549 30 20 30" stroke="#0B5684" stroke-width="3" />
                            <motion.path pathLength={svg2_p3} d="M20 24C19.2901 24.089 19.0148 25.0408 18.5679 25.5526C17.5099 26.7644 16.8929 28.1011 16.1358 29.5395C15.5542 30.6444 14.3616 31.8439 14 33" stroke="#0B5684" stroke-width="3"/>
                            <motion.path pathLength={svg2_p4} d="M26.5631 18.2514C27.2004 18.1718 28.0074 17.3814 28.7545 17.2045C30.1288 16.879 31.2191 17.6076 32.2363 18.434C33.3842 19.3668 33.7757 20.0222 33.7946 21.5872C33.8185 23.5725 34.0097 25.4629 32.7963 27.1386C31.9018 28.3739 31.1841 29.6274 30.0936 30.7178C29.5658 31.2457 29.2912 31.7203 28.9736 32.3979C28.707 32.9667 29.6067 32.0975 29.6797 32.0448C30.8115 31.2275 32.1403 31.0446 33.4902 30.8518C35.2911 30.5945 36.757 30.3023 38.3965 29.6465" stroke="#0B5684" stroke-width="3"/>
                            <motion.path pathLength={svg2_p5} d="M47.381 22.1959C46.9597 21.6692 47.0342 20.1134 47.2593 19.5175C47.8025 18.0797 48.9761 17.6167 50.4002 17.4236C52.0323 17.2023 53.2702 18.601 54.296 19.7367C55.0805 20.6053 56.1175 21.4099 56.1464 22.6828C56.1735 23.8736 56.3434 25.0532 55.1482 25.7021C54.2235 26.204 53.2286 26.1546 52.202 26.1403C50.5463 26.1173 48.6739 25.9111 47.7706 24.3385C46.7956 22.6414 46.566 20.7926 46.9427 18.9088" stroke="#0B5684" stroke-width="3" />
                            </svg>
                        </motion.div>
                        <div className='svg_wrap'></div>
                        <div className='svg_wrap'></div>
                        <motion.div className='svg_wrap' >
                            <svg viewBox="0 0 58 36" fill="none">
                            <motion.path pathLength={svg3_p1} d="M2 10C4.6084 9.28449 7.14026 7.83231 9.82279 7.11106C16.0514 5.43638 22.2317 4.50878 28.5823 3.90614C37.7651 3.03475 46.7753 1.32763 56 2.28112" stroke="#0B5684" stroke-width="3" />
                            <motion.path pathLength={svg3_p2} d="M12 26C15.2605 26 16.8549 30 20 30" stroke="#0B5684" stroke-width="3" />
                            <motion.path pathLength={svg3_p3} d="M20 24C19.2901 24.089 19.0148 25.0408 18.5679 25.5526C17.5099 26.7644 16.8929 28.1011 16.1358 29.5395C15.5542 30.6444 14.3616 31.8439 14 33" stroke="#0B5684" stroke-width="3"/>
                            <motion.path pathLength={svg3_p4} d="M26.5631 17.3749C26.5631 14.3487 32.1593 13.519 33.6607 15.8288C34.5924 17.2621 34.7161 18.3474 34.6711 20.0776C34.6495 20.9111 33.6185 24.7525 32.4311 24.7525C31.5825 24.7525 33.7562 23.6419 34.5494 23.3403C35.237 23.0788 36.3418 22.6598 37.0695 22.9872C38.7921 23.7624 38.8958 26.1951 39.3947 27.723C40.0105 29.6086 39.166 32.194 37.386 33.0553C34.9269 34.2452 32.6574 33.584 30.0693 33.1527" stroke="#0B5684" stroke-width="3" />
                            <motion.path pathLength={svg3_p5} d="M47.381 22.1959C46.9597 21.6692 47.0342 20.1134 47.2593 19.5175C47.8025 18.0797 48.9761 17.6167 50.4002 17.4236C52.0323 17.2023 53.2702 18.601 54.296 19.7367C55.0805 20.6053 56.1175 21.4099 56.1464 22.6828C56.1735 23.8736 56.3434 25.0532 55.1482 25.7021C54.2235 26.204 53.2286 26.1546 52.202 26.1403C50.5463 26.1173 48.6739 25.9111 47.7706 24.3385C46.7956 22.6414 46.566 20.7926 46.9427 18.9088" stroke="#0B5684" stroke-width="3" />
                            </svg>

                        </motion.div>


                    </div>
                </div>
            </div>
        </div>
        
    )
}
