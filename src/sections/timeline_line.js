
import { motion, useScroll, useSpring, useTransform, useMotionValue, useAnimation } from "framer-motion";
import React, { useState, useEffect ,  useRef} from "react";
export function TIMELINE_LINE(){
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