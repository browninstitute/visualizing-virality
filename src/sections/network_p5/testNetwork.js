
import { P5CanvasInstance, ReactP5Wrapper, SketchProps} from 'react-p5-wrapper';
// import sketch from './sketchv2.js';
import t1 from './links_tb.csv';
import t2 from './nodes_tb.csv';
import t3 from './users_tb.csv';
import b1 from './links_b.csv';
import b2 from './nodes_b.csv';
import b3 from './users_b.csv';
import m1 from './links_mc.csv';
import m2 from './nodes_mc.csv';
import m3 from './users_mc.csv';
import brady_p from '../../assets/brady_profile.jpg';
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";

function sketch(fp5) {
  



    
    fp5.draw = () => {
        //fp5.rect(500,500,500,500);

        fp5.fill(153, 0, 102, 150);
        fp5.rect((fp5.windowWidth/20), (5*fp5.windowHeight/20), 0.75*fp5.windowWidth/40);
        
    };
   

 



    
    fp5.setup = () => {
        fp5.createCanvas(fp5.displayWidth, fp5.displayHeight);
        fp5.strokeWeight(10);

        
    }


}
export function TEST_NETWORK(){

  

  return(
    <>
    <div className="network_section" id="network_demotion" >

      <div className='sketch_sec'>
        <ReactP5Wrapper sketch={sketch}  ></ReactP5Wrapper>
    </div>
    </div>
    </>
  )
  }