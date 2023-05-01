

import React, { useState, useEffect ,  useRef} from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useAnimation } from "framer-motion";
import bg_vid_mp4 from './assets/intro_bg_mp4.mp4';
import {ONBOARDING_INTRO} from './sections/onboarding_bootstrap';
import {ONBOARDING_BARS} from './sections/onboarding_bars'
import { TIMELINE_BLOCK } from './sections/timeline_block';
import { TIMELINE_LINE } from './sections/timeline_line';
import brown_logo from './assets/Brown_logo_FULL.png';
import kfai_logo from './assets/kfai-full_lockup-rgb-updated.png';
import {SELECTION_SECTION} from './sections/selection_section';
import { AppearingText } from './sections/appearingtext';
import { ONBOARDING_COUNTER } from './sections/onboarding_counter';
import { useInView } from "react-intersection-observer";
import {CITATIONS} from "./sections/citations.js"


import timeline_pic from './assets/timeline_scale_inline.png'
import timeline_profile1 from './assets/timeline_profile1.jpg'
import timeline_profile2 from './assets/timeline_profile2.jpg'
import timeline_profile3 from './assets/timeline_profile3.jpg'
import timeline_profile4 from './assets/timeline_profile4.jpg'
import timeline_profile5 from './assets/timeline_profile5.jpg'
import timeline_profile6 from './assets/timeline_profile6.jpg'
import timeline_profile7 from './assets/timeline_profile7.jpg'
import timeline_pic2 from './assets/timeline_pic_tweet2.jpg'
import timeline_pic3 from './assets/timeline_pic_tweet3.jpg'
import timeline_pic5 from './assets/timeline_pic_tweet5.jpg'
import timeline_vid4 from './assets/timeline_vid_tweet4.mp4'
import timeline_vid6 from './assets/timeline_vid_tweet6.mp4'

const headFunc = {
  title: 'Visualizing Virality',
  description: 'Brown Insititute and KFAI collaboration aimed at illustrating the algorithms that define what you see on social media platforms.',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0',
  meta: {
      charset: 'utf-8',
      title: 'Visualizing Virality',
      description: 'Brown Insititute and KFAI collaboration aimed at illustrating the algorithms that define what you see on social media platforms.'
  }
};

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  const {ref, inView} = useInView({threshold:0, triggerOnce:true});
  // useEffect(() => {
  //   if(inView){
  //    // load_graph()
  //   }
  // }, [inView]);
  const { scrollY,scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0,0.04], ["0%","20%"]);
  
  const opacity = useTransform(scrollYProgress, [0.05,0.06], [1,0]);
  
  function isMobile() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  }

  return (
    <>
        <div className='intro_section' id='intro' ref={ref}>
          <div className='scroll_div_show'>
            <motion.div className='scroll_div floating' 
            >
              Scroll
            </motion.div>
          </div>
          <motion.div className='parallax_layer back_intro' style={{y,opacity}}>   
           {/*} <div className='cosmos_graph'>
              <canvas className='cosmos_canvas' ref={cosmos_ref} />
            </div> 
               <div className='photos_people'></div>*/}
            <div className='video_wrapper'>
              <video id="background_vid" loop={true} muted={true} autoPlay={'autoplay'} playsInline={true} >
                {/* <source src={bg_vid} type="video/wemb"/> */}
                <source src={bg_vid_mp4} type="video/mp4"/>
              </video>             
            
            </div>
          </motion.div>
          <div className='parallax_layer front_intro' >
            <div className='main_text'> 
              <span className='banner_txt floating'>Visualizing Virality
              <br/>
              <span className="author_txt floating">-Sahil Patel &amp; Samia Menon</span>   </span>
                       
            </div>
            <AppearingText>
            <div className='logos'>
              <ul>
                <li>
                  <img src={kfai_logo}></img>
                </li>
                <li>
                  x
                </li>
                <li>
                  <img src={brown_logo}></img>
                </li>
                <li></li>
              </ul>                
            </div>
            </AppearingText>
            {/* <span className='logos floating'>
            <img src='https://brown.columbia.edu/wp-content/uploads/2017/08/brown_full_logo.png'></img>
            </span> */}
            
          </div>
        </div>

        <ONBOARDING_INTRO />
        {/* <ONBOARDING_METHODOLOGY></ONBOARDING_METHODOLOGY> */}
        <ONBOARDING_COUNTER />
        <ONBOARDING_BARS />

        <div className='timeline_padding'>
          <div className='padding_text'> 
          Here is the distribution of our 3,402 <font color="#1DA1F2">"viral"</font> tweets from around the world during January 2023. 
          Each day's segment is colored according to the number of tweets on scale: <img className='timeline_scale_inline' src={timeline_pic}/>. 
          January 18th had the smallest number of tweets (<font color="#1DA1F2">37</font>) tweets, while January 1st had the largest (<font color="#660099">166</font>). We also selected a few to spotlight!
          <br/>
          <br/>
          </div>
        </div>

        <div className='timeline_section'>
          <div className='timeline_wrap'>
            <div className='parallax_wrap'>
              {/* <TIMELINE_LINE_DASHES /> */}
              <TIMELINE_LINE />
              <div className='timeline_blocks'>
                <TIMELINE_BLOCK name="Collin Rugg" username="@CollinRugg" text="BREAKING: Elon Musk announces that the Fauci Files will be released later this week." date="01/01/2023" likes="197.2k" rts="16.2" replies="643" image={timeline_profile1} t_link={"https://twitter.com/CollinRugg/status/1609678161268338689"} />
                <TIMELINE_BLOCK name="Andrey Santos" username="@04Andrey" text="Now. I'm blue! 🔵" likes="112k" rts="8695" replies="1365" date="01/07/2023" image={timeline_profile2} t_image={timeline_pic2} t_link={"https://twitter.com/04Andrey/status/1611764714194747392"} />
                <TIMELINE_BLOCK name="Bizarrap" username="@bizarrap" text={"MIÉRCOLES \n @shakira \n || BZRP Music Session #53 \n 🇦🇷🇨🇴"} date="01/10/2023" likes="806k" rts="57.2k" replies="48.1k" image={timeline_profile3} t_image={timeline_pic3} t_link={"https://twitter.com/bizarrap/status/1612904134453108736"} />
                <TIMELINE_BLOCK name="atr ahre" username="@atre_ahre" text="Este perrito fue adoptado de una perrera y esta fue su reacción con su nueva familia" date="01/14/2023" likes="242.2k" rts="28.4k" replies="5956" image={timeline_profile4} t_vid={timeline_vid4} t_link={"https://twitter.com/atr_ahre/status/1613529478579294209"}/>
                <TIMELINE_BLOCK name="Hurt CoPain" username="@SaeedDiCaprio" text="this was the fastest I’ve gotten blocked in my life" date="01/20/2023" likes="360.6k" rts="25.1k" replies="477" image={timeline_profile5} t_image={timeline_pic5} t_link={"https://twitter.com/SaeedDiCaprio/status/1616589303098003456"} />
                <TIMELINE_BLOCK name="2525🍎@健全SJK" username="@2525_pc_" text="京都駅が雪に対して欠陥構造すぎておもろい" date="01/24/2023" likes="182.2k" rts="59.6k" replies="4655" image={timeline_profile6} t_vid={timeline_vid6} t_link={"https://twitter.com/2525_pc_/status/1617800523088003073"} />
                <TIMELINE_BLOCK name="Taurus Girl" username="@jaxajueny" text="people who wake up at 5 am love to talk about how productive their day was but forget to mention the psychotic episode they have around 6pm" date="01/30/2023" likes="180.6k" rts="14.4k" replies="3447" image={timeline_profile7} t_link={"https://twitter.com/jaxajueny/status/1620084206620807168"} />                
              </div>
            </div>
          </div>
         </div>
        <SELECTION_SECTION />
        <CITATIONS />
      </>
  );
}

export default App;