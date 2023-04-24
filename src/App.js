

import DocumentMeta from 'react-document-meta';
import React, { useState, useEffect ,  useRef} from "react";
//import { Graph } from '@cosmograph/cosmos';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useAnimation } from "framer-motion";
import {cosmos_config, cosmos_links, cosmos_nodes} from './sections/cosmos';
// import bg_vid from './assets/networkbg1.mp4';
import {useInView} from 'react-intersection-observer';
import {selection_network} from './sections/selection';
import {styles_with_css} from'./sections/motion.ts';
import {ONBOARDING_INTRO} from './sections/onboarding_bootstrap';
import {ONBOARDING_BARS} from './sections/onboarding_bars'
import { ONBOARDING_METHODOLOGY } from './sections/onboard_methodology';
import {TWEET_SVG} from './sections/tweet_svg';
import { TIMELINE_BLOCK } from './sections/timeline_block';
import { TIMELINE_LINE } from './sections/timeline_line';
import brown_logo from './assets/Brown_logo_FULL.png';
import kfai_logo from './assets/kfai-full_lockup-rgb-updated.png';
import {NETWORK1} from './sections/network/network1';
import {PHONE1} from './sections/phone1';
import {SELECTION_SECTION} from './sections/selection_section';
import { SELECTION_LEADUP } from './sections/selection_leadup';
import { AppearingText } from './sections/appearingtext';

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

  //intro_sec
  const cosmos_ref = useRef(null)  
  /*
  function load_graph() {
    //temporary as function for development 
    const graph = new Graph(cosmos_ref.current, cosmos_config);
    graph.setData(cosmos_nodes, cosmos_links);
    graph.zoom(1.2);
  }
*/
  const {ref, inView} = useInView({threshold:0, triggerOnce:true});
  useEffect(() => {
    if(inView){
     // load_graph()
    }
  }, [inView]);

  const { scrollY,scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0,0.04], ["0%","70%"]);
  
  const opacity = useTransform(scrollYProgress, [0.05,0.06], [1,0]);
  

  return (
    <>
      <DocumentMeta {...headFunc} />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
      </style>
      
  

        <div className='scroll_div_show'>
          <div className='scroll_div'>Scroll</div>
        </div>
        <div className='intro_section' id='intro' ref={ref}>
          <motion.div className='parallax_layer back_intro' style={{y,opacity}}>
            
           {/*} <div className='cosmos_graph'>
              <canvas className='cosmos_canvas' ref={cosmos_ref} />
            </div> 
               <div className='photos_people'></div>*/}

            {/* <div className='video_wrapper'>
              <video id="background_vid" src={bg_vid} type='video/mp4' loop={true} muted={true} autoPlay={'autoplay'} playsInline={true}  />            
            </div> */}
          </motion.div>
          
          <div className='parallax_layer front_intro' >
          {/*  */}
          
            <div className='main_text'> <span className='banner_txt floating'>Visualizing Virality</span> </div>
            <AppearingText>
            <div className='logos floating'>
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

        <ONBOARDING_BARS />

        <div className='timeline_padding'>
          <div className='padding_text'><h6>Some <font color="#1DA1F2">"viral"</font> tweets that caught our eye:</h6></div>
          
        </div>
        <div className='timeline_sec'>
          <div className='timeline_wrap'>
            

            <div className='parallax_wrap'>
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


    </>
  );
}

export default App;