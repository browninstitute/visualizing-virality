

import DocumentMeta from 'react-document-meta';
import React, { useState, useEffect ,  useRef} from "react";
import { Graph } from '@cosmograph/cosmos';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useAnimation } from "framer-motion";
import {cosmos_config, cosmos_links, cosmos_nodes} from './sections/cosmos';
// import bg_vid from './assets/networkbg1.mp4';
import {useInView} from 'react-intersection-observer';
import {selection_network} from './sections/selection';
import {styles_with_css} from'./sections/motion.ts';
import {ONBOARDING_INTRO} from './sections/onboarding_intro';
import {TWEET_SVG} from './sections/tweet_svg';
import { TIMELINE_BLOCK } from './sections/timeline_block';
import { TIMELINE_LINE } from './sections/timeline_line';

import {NETWORK1} from './sections/network/network1';
import {PHONE1} from './sections/phone1';
import {ALGORITHM} from './sections/algorithm';
import {DEMOTION} from './sections/demotion';
import {NETWORK2} from './sections/network/network2';
import {OUTRO} from './sections/outro';


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
  function load_graph() {
    //temporary as function for development 
    const graph = new Graph(cosmos_ref.current, cosmos_config);
    graph.setData(cosmos_nodes, cosmos_links);
    graph.zoom(1.2);
  }

  

  const { scrollY,scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0,0.05], ["0%","70%"]);
  
  const opacity = useTransform(scrollYProgress, [0.05,0.06], [1,0]);
  

  return (
    <>
      <DocumentMeta {...headFunc} />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
      </style>
      
  


        <div className='intro_sec' id='intro'>
          <motion.div className='parallax_layer back_intro' style={{y,opacity}}>
            
            <div className='cosmos_graph'>
              <canvas className='cosmos_canvas' ref={cosmos_ref} />
            </div> 
            <div className='photos_people'></div>
            {/* <div className='video_wrapper'>
              <video id="background_vid" src={bg_vid} type='video/mp4' loop={true} muted={true} autoPlay={'autoplay'} playsInline={true}  />            
            </div> */}
          </motion.div>
          
          <div className='parallax_layer front_intro' onClick={()=>{load_graph()}}>
          {/*  */}
          
            <span className='banner_txt'>Visualizing Virality</span>
          </div>
        </div>




        <ONBOARDING_INTRO />




        <div className='timeline_sec'>
          <div className='timeline_wrap'>
            
            <div className='timeline_intro'>
              Timeline of Viral Tweets
            </div>

            <div className='parallax_wrap'>
              <TIMELINE_LINE />

              <div className='timeline_blocks'>
                <TIMELINE_BLOCK name="Collin Rugg" username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10" />
                <TIMELINE_BLOCK name="Andrey Santos" username="@username" text="text of the tweet" date="01/07/2023" likes="2k" rts="20" replies="10" />
                <TIMELINE_BLOCK name="Bizarrap" username="@username" text="text of the tweet" date="01/10/2023" likes="2k" rts="20" replies="10" />
                <TIMELINE_BLOCK name="atr_ahre" username="@username" text="text of the tweet" date="01/14/2023" likes="2k" rts="20" replies="10" />
                <TIMELINE_BLOCK name="SaeedDiCaprio" username="@username" text="text of the tweet" date="01/20/2023" likes="2k" rts="20" replies="10" />
                <TIMELINE_BLOCK name="2525_pc_" username="@username" text="text of the tweet" date="01/24/2023" likes="2k" rts="20" replies="10" />
                <TIMELINE_BLOCK name="Jaxajueny" username="@username" text="text of the tweet" date="01/30/2023" likes="2k" rts="20" replies="10" />
                
              </div>

            </div>
          </div>

          <PHONE1 />

          <NETWORK1 />

          <ALGORITHM />
          <DEMOTION />
          <NETWORK2 />
          <OUTRO />
          
        </div>
        


    </>
  );
}

export default App;
