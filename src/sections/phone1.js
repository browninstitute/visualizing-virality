// import {selection_network} from './selection';
// import {TWEET_SVG} from './tweet_svg';
// import {useRef} from 'react';
// import Carousel from "framer-motion-carousel";
// import {useInView} from 'react-intersection-observer';
// import {motion, useScroll, useTransform} from 'framer-motion';
// import React, { useEffect, useState } from 'react';
// import {styles_with_css} from'./motion.ts'
// import {NETWORK1} from './network/network1';
// import {ALGORITHM} from './algorithm';
// import {DEMOTION} from './demotion';
// import {NETWORK2} from './network/network2';
// import {OUTRO} from './outro';



// export function PHONE1(){
//     const phone_scroll_points = {
//       start: 0,
//       viral_highlight_start: 0.395,
//       viral_highlight_finish: 0.56,
//       finish: 1,
//     };
//     const sec_ref = useRef(null);
//     const {scrollYProgress} = useScroll({
//       target:sec_ref,
//       offset:["start end", "end start"]
//     });

//     const viral_opacity = useTransform(scrollYProgress, [
//       phone_scroll_points.viral_highlight_start,
//       phone_scroll_points.viral_highlight_finish
//       ], [ 1 ,0 ])

//     function ENTERTAINMENT(){
//       return (
//         <div className="trending_feed" >
//           <motion.div className="tweets_animate" style={styles_with_css({opacity: viral_opacity})}>
//             <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
//           </motion.div>
//           <motion.div className="tweets_animate">
//             <TWEET_SVG username="@6lack" text="my third album, Since I Have A Lover 💐— OUT NOW" date="03/24/2023" likes="34k" rts="8413" replies="361"/>    
//           </motion.div>
//           <motion.div className="tweets_animate" style={styles_with_css({opacity: viral_opacity})}>
//             <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
//           </motion.div>
//           <motion.div className="tweets_animate" style={styles_with_css({opacity: viral_opacity})}>
//             <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
//           </motion.div>
//         </div>
//       )
//     }    
//     function SPORTS(){
//       return (
//         <div className="trending_feed" >
//           <motion.div className="tweets_animate" style={styles_with_css({opacity: viral_opacity})}>
//             <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
//           </motion.div>
//           <motion.div className="tweets_animate">
//             <TWEET_SVG username="@TomBrady" text="Now that I’m retired I have time to go see @80forBrady four separate times today." date="02/03/2023" likes="111.8" rts="4793" replies="2929"/>    
//           </motion.div>
//           <motion.div className="tweets_animate" style={styles_with_css({opacity: viral_opacity})}>
//             <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
//           </motion.div>
//           <motion.div className="tweets_animate" style={styles_with_css({opacity: viral_opacity})}>
//             <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
//           </motion.div>
//         </div>
//       )
//     }
//     function NEWS(){
//       return (
//         <div className="trending_feed">
//           <motion.div className="tweets_animate" style={styles_with_css({opacity: viral_opacity})}>
//             <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
//           </motion.div>
//           <motion.div className="tweets_animate" >
//             <TWEET_SVG username="@SpeakerMcCarthy" text="It doesn't matter if it's President Trump or a Democrat. Our justice system should not be used to target political opponents. Period." date="03/20/2023" likes="81.1k" rts="18.5k" replies="19.9k"/>    
//           </motion.div>
//           <motion.div className="tweets_animate" style={styles_with_css({opacity: viral_opacity})}>
//             <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
//           </motion.div>
//           <motion.div className="tweets_animate" style={styles_with_css({opacity: viral_opacity})}>
//             <TWEET_SVG username="@username" text="text of the tweet" date="01/01/2023" likes="2k" rts="20" replies="10"/>    
//           </motion.div>
//         </div>
//       )
//     }
//     function SELECTION(){
//       return (
//         <div className="button_wrapper">
//           <button onClick={() => {carouselRef.current.setIndex(0);forceUpdate();}}>select menu</button>
//               <button onClick={() => {
//                 carouselRef.current.setIndex(1);
//                 selection_network.selection='BLACK';
//                 selection_network.selection_text='@6lack';
//                 selection_network.category_text='Entertainment';
//                 forceUpdate();
//               }}>Entertainment</button>
//               <button onClick={() => {
//                 carouselRef.current.setIndex(2);
//                 selection_network.selection='BRADY';
//                 selection_network.selection_text='@TomBrady';
//                 selection_network.category_text='Sports';
//                 forceUpdate();
//               }}>Sports</button>
//               <button onClick={() => {
//                 carouselRef.current.setIndex(3);
//                 selection_network.selection='MCCARTHY';
//                 selection_network.selection_text='@SpeakerMcCarthy';
//                 selection_network.category_text='News';
//                 forceUpdate();
//               }}>News</button>
//         </div>
//       )
//     } 
//     function renderer(which){
//       switch(which) {
//         case "ENTERTAINMENT":
//           return( 
//             <div className='carousel_item' key={1}>
//                 {ENTERTAINMENT()}
//             </div>
//           );
//           break;
//         case "SPORTS":
//           return( 
//             <div className='carousel_item' key={2}>
//                 {SPORTS()}
//             </div>
//           );
//           break;
//         case "NEWS":
//           return( 
//             <div className='carousel_item' key={3}>
//                 {NEWS()}
//             </div>
//           );
//           break;
//         case "SELECTION":
//           return( 
//             <div className='carousel_item' key={0}>
//                 {SELECTION()}
//             </div>
//           );
//           break;
//         default:
//           return( 
//             <div className='coursel_item' key={0}>
//                 SELECTION()
//             </div>
//           );
//       }
//     }

//     // const [AuthorText, setAuthorText] = useState(selection_network.selection);

//     // useEffect(() => {
//     //   setAuthorText(selection_network.selection)
//     // }); 
    

//     // console.log(selection_network.selection)
//     const [, updateState] = React.useState();
//     const forceUpdate = React.useCallback(() => updateState({}), []);
//     const carouselRef = useRef(null);

//     const [ref1, inView1] = useInView({threshold:0.4, triggerOnce:true});
//     useEffect(() => {
    
//       if(inView1){
//         if (selection_network.selection === 'BRADY'){
//           carouselRef.current.setIndex(2)
//         }
//       }    
//     }, [inView1]);
    
//     return(
//       <>
//         <div className='phone_section' ref={sec_ref}>
//             <div className="phone_wrapper">

//                 <div className="svg_wrap">
//                   <svg viewBox="0 0 480 900" fill="none" className="phone">
                      
//                       <g filter="url(#filter0_d_507_113)">
//                       <path d="M38 140.791C38 139.802 38.8018 139 39.7908 139H48.2092C49.1983 139 50 139.802 50 140.791V170.209C50 171.198 49.1983 172 48.2092 172H39.7908C38.8018 172 38 171.198 38 170.209V140.791Z" fill="#55585D"/>
//                       <path d="M38 200.791C38 199.802 38.8018 199 39.7908 199H48.2092C49.1983 199 50 199.802 50 200.791V260.209C50 261.198 49.1983 262 48.2092 262H39.7908C38.8018 262 38 261.198 38 260.209V200.791Z" fill="#55585D"/>
//                       <path d="M38 281.791C38 280.802 38.8018 280 39.7908 280H48.2092C49.1983 280 50 280.802 50 281.791V341.209C50 342.198 49.1983 343 48.2092 343H39.7908C38.8018 343 38 342.198 38 341.209V281.791Z" fill="#55585D"/>
//                       <path d="M434 224.791C434 223.802 434.802 223 435.791 223H444.209C445.198 223 446 223.802 446 224.791V317.209C446 318.198 445.198 319 444.209 319H435.791C434.802 319 434 318.198 434 317.209V224.791Z" fill="#55585D"/>
//                       <path fillRule="evenodd" clipRule="evenodd" d="M44.0003 45.2339C44.0003 27.4316 58.4319 13 76.2342 13H407.767C425.569 13 440.001 27.4316 440.001 45.2339V805.767C440.001 823.569 425.569 838.001 407.767 838.001H76.2342C58.4319 838.001 44.0003 823.569 44.0003 805.767V45.2339ZM59.0004 53.0707C59.0004 39.2245 70.225 27.9999 84.0712 27.9999H143.001V45.4646C143.001 52.3877 148.613 58 155.536 58H328.465C335.389 58 341.001 52.3877 341.001 45.4646V27.9999H399.93C413.776 27.9999 425.001 39.2245 425.001 53.0707V797.93C425.001 811.776 413.776 823 399.93 823H84.0712C70.225 823 59.0004 811.776 59.0004 797.93V53.0707Z" fill="#3E3E3E"/>
//                       <path d="M211.999 37.001C211.999 35.3441 213.342 34.001 214.999 34.001H268.999C270.656 34.001 271.999 35.3441 271.999 37.001C271.999 38.6578 270.656 40.001 268.999 40.001H214.999C213.342 40.001 211.999 38.6578 211.999 37.001Z" fill="#5E5E5E"/>
//                       <path d="M299 37C299 40.3137 296.313 43 293 43C289.686 43 287 40.3137 287 37C287 33.6863 289.686 31 293 31C296.313 31 299 33.6863 299 37Z" fill="black"/>
//                       </g>
//                       <defs>
//                       <filter id="filter0_d_507_113" x="0" y="-3" width="484" height="907.001" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//                       <feFlood floodOpacity="0" result="BackgroundImageFix"/>
//                       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
//                       <feMorphology radius="12" operator="erode" in="SourceAlpha" result="effect1_dropShadow_507_113"/>
//                       <feOffset dy="25"/>
//                       <feGaussianBlur stdDeviation="25"/>
//                       <feComposite in2="hardAlpha" operator="out"/>
//                       <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
//                       <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_507_113"/>
//                       <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_507_113" result="shape"/>
//                       </filter>
//                       </defs>
                  
//                   </svg>
//                 </div>
               
//           <div className="screen_wrapper">
//               <div className='carousel'>
                
//                 <Carousel ref={carouselRef} autoPlay={false} loop={false} renderArrowLeft={(handlePrev, activeIndex) => (<div/>)} renderArrowRight={(handlePrev, activeIndex) => (<div/>)} renderDots={(handlePrev, activeIndex) => (<div/>)} className="carousel">
//                     {["SELECTION","ENTERTAINMENT","SPORTS","NEWS"].map((item, i) => (
//                         renderer(item)
//                     ))}
//                 </Carousel>
//               </div>

//           </div> 

//           </div>

//           <div className="text_wrapper">

//               <div className='text_div text_iphone'>
//                 Lets explore one of the viral tweets together!
//                 <br />
//                 Click on the (search symbol) on the right to see whats trending in that category.
//               </div>

//               <div className='text_div text_iphone' ref={ref1}>
//                 In the {selection_network.category_text} category, this tweet from <br /> 
//                 {selection_network.selection_text} <br />
//                 went viral.
//               </div>

//               <div className='text_div text_iphone'>
//                 But where did each of those engagements come from? <br/>
//                 Lets see the tweet's journey on the Twitter network together.
//               </div>

            
//           </div>

//           <div className='button_wrapper'>
            
//               <div className='buttons'>
                
//               </div>
//           </div>



//         </div>


//         {/*<NETWORK1 />
//         <ALGORITHM />
//         <DEMOTION />
//        <NETWORK2 />*/}  
//         {/* <OUTRO /> */}
//       </>    
      
//     )
//   }