import Onboarding1 from './sections/onboarding_figma'
import Onboarding2 from './sections/selection_section'
import Timeline_blocks from './sections/timeline'
import DocumentMeta from 'react-document-meta';
import React, { useState, useEffect ,  useRef} from "react";
import { Graph } from '@cosmograph/cosmos'
import { motion, useScroll, useSpring, useTransform, useMotionValue, useAnimation } from "framer-motion";
import {cosmos_config, cosmos_links, cosmos_nodes} from './sections/cosmos'
import bg_vid from './assets/networkbg1.mp4';
import {useInView} from 'react-intersection-observer'
import {selection_network} from './sections/selection'

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

function NETWORK1(){
  console.log(selection_network.selection)
}
function PHONE1(){
  selection_network.selection='hi1'
  console.log(selection_network.selection)



}
function TIMELINE_BLOCK({username,name,profile,text,image,date,likes,rts,replies}){
  const {ref, inView} = useInView({threshold:0.1});
  const animation_movein = useAnimation();
  useEffect(() => {

    if(inView){
      animation_movein.start({
        y:0,
        opacity:1,
        transition:{
          type: 'spring', duration: 0.8, bounce: 0.3
        }
      })
    }
    if(!inView){
      animation_movein.start({y:'2vw',opacity:0})
    }
    
  }, [inView]);

  return(
    <div ref={ref} className='timeline_block'>
      <TWEET_SVG username={username} text={text} date={date} likes={likes} rts={rts} replies={replies} />    
      <motion.div className='timeline_text' animate={animation_movein}>
        <p>{name}</p>
        <h3>{date}</h3>
      </motion.div>
    </div>
  );

};

function TIMELINE_LINE(){
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start end", "end start"]
  });
  //need to do math here to get the positions correct for path length
  const pathLength_timeline = useSpring(useTransform(scrollYProgress, [0,0.8], [ 0 ,1 ]), { 
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return(
    <div className='timeline_line' ref={ref} >
      <svg className='line_svg' viewBox="0 0 10 4212" fill="none" preserveAspectRatio='xMidYMax meet' style={{ pointerEvents: "all" }}>
        <motion.path d="M6.97644 1L3.09038 4117.28L3.00002 4212" stroke="#009EFF" strokeWidth="6" pathLength={pathLength_timeline}/>
      </svg>

    </div>
  );
};

function TWEET_SVG({username,profile,text,image,date,likes,rts,replies}){

  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start end", "end start"]
  });

  return(
    <div className="tweet-wrap" ref={ref}>
        <div className="tweet-header">
          <img src="https://pbs.twimg.com/profile_images/1012717264108318722/9lP-d2yM_400x400.jpg" alt="" className="avator"/>
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

    </div>
  );
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

  



  //timeline
  // const timeline_line_div_ref = useRef(null)
  // const timeline_svg_ref = useRef(null);
  // function timeline_drawer(percent){
  //   let length = timeline_svg_ref.current.getTotalLength();
  //   let todraw = length * percent;
  //   timeline_svg_ref.current.style.strokeDashoffset = (Math.round(length-todraw)).toString() + 'px';
  // };
  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     const viewing_from = document.querySelector('.sections_wrapper').scrollTop
  //     const viewing_60_percent =  viewing_from + (window.innerHeight/1.2) 
  //     const viewing_until = viewing_from + window.innerHeight
  //     const element_from = timeline_line_div_ref.current.offsetTop + timeline_line_div_ref.current.parentElement.offsetTop;
  //     const element_end = (timeline_line_div_ref.current.offsetTop + timeline_line_div_ref.current.parentElement.offsetTop)+ timeline_line_div_ref.current.offsetHeight;
  //     if ( element_from <= viewing_until && viewing_from <= element_end){ 
  //       const to_draw_percent = (viewing_60_percent - element_from) / timeline_line_div_ref.current.offsetHeight
  //       timeline_drawer( Math.min(Math.max(to_draw_percent, 0), 1) )
  //     }
  //   };
  //   function watchScroll() {
  //     document.querySelector('.sections_wrapper').addEventListener("scroll", handleScroll);
  //   }
  //   watchScroll();
  //   return () => {
  //     document.querySelector('.sections_wrapper').removeEventListener("scroll", handleScroll);
  //   };
  // }, [timeline_line_div_ref]);
  
  const { scrollY,scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0,0.3], ["0%","70%"]);
  
  const opacity = useTransform(scrollYProgress, [0.2,0.3], [1,0]);
  

  // const x1 = useMotionValue(0);
  // const opacity_cosmos = useTransform(
  //   x1,
  //   // Map x from these values:
  //   [0, 0.2],
  //   // Into these values:
  //   [1, 0]
  // )





  return (
    <>
      <DocumentMeta {...headFunc} />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
      </style>
      
      {/* <div className='sections_wrapper'> */}


        <div className='intro_sec' id='intro'>
          <motion.div className='parallax_layer back_intro' style={{y,opacity}}>
            
            {/* <div className='cosmos_graph'>
              <canvas className='cosmos_canvas' ref={cosmos_ref} />
            </div> 
            <div className='photos_people'></div> */}
            <div className='video_wrapper'>
              <video id="background_vid" src={bg_vid} type='video/mp4' loop={true} muted={true} autoPlay={'autoplay'} playsInline={true}  />            
            </div>
          </motion.div>
          
          <div className='parallax_layer front_intro' >
          {/* onClick={()=>{load_graph()}} */}
            <span className='banner_txt'>Visualizing Virality</span>
          </div>
        </div>




        <Onboarding1 />




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
          <Onboarding2 />
          <PHONE1 />
          <NETWORK1 />
          
        </div>
        

      {/* </div> */}
    </>
  );
}

export default App;
