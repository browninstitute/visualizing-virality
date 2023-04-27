import {motion, useScroll, useTransform} from 'framer-motion';
import React, { useEffect, useState, useRef } from 'react';
import {TWEET_SVG_NONAPPEAR} from './tweet_svg_nonappearing';
import {styles_with_css} from'./motion.ts'

export function GITHUB_M({UserSelection}){

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

        highlight_s7_start: 0.638-0.06,
        highlight_s7_middle1: 0.639-0.06,
        highlight_s7_middle2: 0.675-0.06,
        highlight_s7_end: 0.676-0.06,

      };
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
        const opacity_s7 = useTransform(scrollYProgress, [
            tweets_scroll_points.highlight_s7_start,
            tweets_scroll_points.highlight_s7_middle1,
            tweets_scroll_points.highlight_s7_middle2,
            tweets_scroll_points.highlight_s7_end
            ], [0.4,1,1,0.4])
        const svg0_p1 = useTransform(scrollYProgress,[
            tweets_scroll_points.highlight_s6_start,
            tweets_scroll_points.highlight_s6_start+0.005,
            ], [0,1])

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
        function isMobile() {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        }

        
        

    return (
        <div className='github_section' ref={sec_ref}>
            <div className='highlight_text_div'>
                <div className='highligh_text_background'>
                    <div className='highlight_text'>
                        <motion.ul>
                            <motion.li style={styles_with_css({opacity:opacity_s1})}>
                                We showed you the users that together made the tweet "viral".
                            </motion.li>
                            <motion.li style={styles_with_css({opacity:opacity_s2})}>
                                &nbsp;But how did Twitter itself aide in the journey?
                            </motion.li>
                            <motion.li style={styles_with_css({opacity:opacity_s3})}>
                                &nbsp;Twitter and other social media platforms interpret many aspects of a given tweet to define its engagement score, and then use that numeric score to rank it within the user's feed.
                            </motion.li>
                            <motion.li style={styles_with_css({opacity:opacity_s4})}>
                                &nbsp;As hinted by the name, the user's predicted probability of replying, retweeting or liking the tweet are factored in when ranking the tweet.
                            </motion.li>
                            <motion.li style={styles_with_css({opacity:opacity_s5})}>
                                &nbsp;There are also less obvious aspects of the tweet that can be used. 
                            </motion.li>
                            <motion.li style={styles_with_css({opacity:opacity_s6})}>
                                &nbsp;For example, Twitter revealed they factor in user's probability of opening the author's profile (and further engage with other tweets) into their ranking.
                            </motion.li>
                            <motion.li style={styles_with_css({opacity:opacity_s7})}>
                                &nbsp;Obviously, this tweet was highly ranked for many of the users across the platform.
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
                {/* <TWEET_SVG_NONAPPEAR username={UserSelection.username} text={UserSelection.text} date={UserSelection.date} likes={UserSelection.likes} rts={UserSelection.rts} replies={UserSelection.replies} image={UserSelection.image} t_image={UserSelection.t_image} t_vid={UserSelection.t_vid} t_link={UserSelection.t_link} />     */}
                
                <a  href={UserSelection.t_link}>
                    <motion.div className="tweet-wrap" >
                        <div className="tweet-header">
                            <img src={UserSelection.image} alt="" className="avator"/>
                            
                            <div className="tweet-header-info">
                            <span>{UserSelection.username}</span><span>{UserSelection.date}</span>
                            {!isMobile() &&
                            <div className='svg_wrap_name'>
                            <svg viewBox="0 0 112 15" fill="none" >
                                <motion.path pathLength={svg0_p1} d="M1.59857 12.8735C5.74366 11.63 7.16003 3.89801 11.364 3.14731C14.137 2.65212 16.8527 10.6773 20.9725 10.6773C23.9524 10.6773 26.6798 5.05354 28.6594 3.30418C31.638 0.671874 32.0565 3.96358 34.6206 6.91229C36.7718 9.38617 38.5441 12.1556 41.1701 8.87321C43.4314 6.04659 45.0551 0.502333 48.8961 4.20621C50.2313 5.49371 52.2049 11.6041 54.622 9.18696C56.2467 7.56227 58.4885 0.954408 60.9362 4.16699C62.086 5.67609 63.8919 9.74912 66.3091 9.18696C68.2655 8.732 72.741 3.02762 74.3097 3.85324C78.5912 6.10666 80.6911 13.8574 85.6047 7.579C91.134 0.513789 91.8436 15.932 96.8996 9.89289C99.4556 6.83984 100.819 3.92249 104.116 7.06916C105.826 8.70181 107.89 10.7557 110.312 10.7557" stroke="#0B5684" strokeWidth="3"/>
                            </svg>
                            </div>
                            }
                            

                            <p>{UserSelection.text}</p>  
                            
                            { (UserSelection.t_image) && 
                            <div className="tweet-content">
                                <img className="content_img" src={UserSelection.t_image} />
                            </div>
                            }
                            { (UserSelection.t_vid) && 
                                <div className="tweet-content">
                                <video className="content_vid" src={UserSelection.t_vid} type='video/mp4' loop={true} muted={true} autoPlay={'autoplay'} playsInline={true}  />
                                </div>
                            }

                            </div>
                            
                        </div>

                        
                
                        <div className="tweet-info-counts">
                            <div className="comments">
                            <svg className="feather feather-message-circle sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            <div className="comment-count">{UserSelection.replies}</div>

                            {/* {!isMobile() && 
                            <div className='svg_wrap' >
                            <svg viewBox="0 0 111 31" fill="none" >
                            <motion.path pathLength={svg1_p1} d="M7.51125 4.01587C14.6997 1.00137 25.0231 2.68458 30.8473 7.81913C36.3915 12.7067 37.3054 25.024 29.6031 28.2441C24.3484 30.4408 17.854 29.0068 12.864 26.8237C9.18708 25.2151 3.05567 22.2817 2.53414 17.656C1.5855 9.24188 10.5767 4.13145 17.2307 1.69165" stroke="#0B5684" strokeWidth="3" />
                            <motion.path pathLength={svg1_p1} d="M46.3891 27.6806C52.3382 27.8327 58.3786 28.1734 64.3254 27.7511C70.14 27.3381 75.9413 26.6973 81.7688 26.4598C90.657 26.0977 99.7586 26.05 108.509 24.3" stroke="#0B5684" strokeWidth="3" />
                            </svg>
                            </div>
                            } */}
                            
                            
                            </div>
                            <div className="retweets">
                            <svg className="feather feather-repeat sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
                            <div className="retweet-count">{UserSelection.rts}</div>
                            {/* {!isMobile() && 
                            <motion.div className='svg_ wrap' >
                            <svg viewBox="0 0 111 31" fill="none" >
                            <motion.path pathLength={svg1_p2} d="M7.51125 4.01587C14.6997 1.00137 25.0231 2.68458 30.8473 7.81913C36.3915 12.7067 37.3054 25.024 29.6031 28.2441C24.3484 30.4408 17.854 29.0068 12.864 26.8237C9.18708 25.2151 3.05567 22.2817 2.53414 17.656C1.5855 9.24188 10.5767 4.13145 17.2307 1.69165" stroke="#0B5684" strokeWidth="3"/>
                            <motion.path pathLength={svg1_p2} d="M46.3891 27.6806C52.3382 27.8327 58.3786 28.1734 64.3254 27.7511C70.14 27.3381 75.9413 26.6973 81.7688 26.4598C90.657 26.0977 99.7586 26.05 108.509 24.3" stroke="#0B5684" stroke-width="3" />
                            </svg>
                            </motion.div>
                            } */}
                            
                            </div>

                            <div className="likes">
                            <svg className="feather feather-heart sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            <div className="likes-count">{UserSelection.likes}</div>
                            {/* {!isMobile() &&
                            <motion.div className='svg_wrap' >
                            <svg viewBox="0 0 111 31" fill="none" >
                            <motion.path pathLength={svg1_p3} d="M7.51125 4.01587C14.6997 1.00137 25.0231 2.68458 30.8473 7.81913C36.3915 12.7067 37.3054 25.024 29.6031 28.2441C24.3484 30.4408 17.854 29.0068 12.864 26.8237C9.18708 25.2151 3.05567 22.2817 2.53414 17.656C1.5855 9.24188 10.5767 4.13145 17.2307 1.69165" stroke="#0B5684" strokeWidth="3"/>
                            <motion.path pathLength={svg1_p3} d="M46.3891 27.6806C52.3382 27.8327 58.3786 28.1734 64.3254 27.7511C70.14 27.3381 75.9413 26.6973 81.7688 26.4598C90.657 26.0977 99.7586 26.05 108.509 24.3" stroke="#0B5684" strokeWidth="3" />
                            </svg>
                            </motion.div>
                            } */}
                            
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
                </a>
            </div>
        </div>
        
    )
}
