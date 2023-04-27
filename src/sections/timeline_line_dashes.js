
import { motion, useScroll, useSpring, useTransform, useMotionValue, useAnimation } from "framer-motion";
import React, { useState, useEffect ,  useRef} from "react";
export function TIMELINE_LINE_DASHES(){
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
      <div className='timeline_line2' ref={ref} >
        <svg className='line_svg2' viewBox="0 0 8 4212" fill="none" preserveAspectRatio='xMidYMax meet' style={{ pointerEvents: "all" }}>
          <defs>
            <linearGradient id="byDayColor2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="3.125%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="3.125%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="3.225%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="3.225%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="6.35%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="6.35%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="6.45%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="6.45%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="9.575%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="9.575%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="9.675%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="9.675%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="12.8%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="12.8%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="12.9%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="12.9%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="16.025%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="16.025%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="16.125%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="16.125%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="19.25%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="19.25%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="19.35%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="19.35%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="22.475%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="22.475%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="22.575%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="22.575%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="25.7%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="25.7%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="25.8%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="25.8%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="28.925%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="28.925%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="29.025%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="29.025%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="32.15%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="32.15%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="32.25%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="32.25%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="35.375%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="35.375%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="35.475%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="35.475%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="38.6%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="38.6%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="38.7%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="38.7%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="41.825%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="41.825%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="41.925%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="41.925%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="45.05%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="45.05%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="45.15%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="45.15%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="48.275%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="48.275%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="48.375%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="48.375%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="51.5%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="51.5%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="51.6%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="51.6%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="54.725%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="54.725%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="54.825%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="54.825%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="57.95%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="57.95%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="58.05%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="58.05%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="61.175%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="61.175%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="61.275%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="61.275%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="64.4%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="64.4%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="64.5%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="64.5%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="67.625%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="67.625%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="67.725%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="67.725%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="70.85%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="70.85%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="70.95%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="70.95%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="74.075%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="74.075%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="74.175%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="74.175%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="77.3%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="77.3%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="77.4%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="77.4%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="80.525%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="80.525%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="80.625%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="80.625%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="83.75%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="83.75%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="83.85%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="83.85%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="86.975%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="86.975%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="87.075%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="87.075%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="90.2%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="90.2%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="90.3%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="90.3%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="93.425%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="93.425%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="93.525%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="93.525%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="96.65%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="96.65%" stopColor="#00000" stopOpacity="100%" />
              <stop offset="96.75%" stopColor="#00000" stopOpacity="100%" />

              <stop offset="96.75%" stopColor="#FFFFFF" stopOpacity="100%" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="100%" />
            </linearGradient>
          </defs>
          <motion.path d="M6.97644 1L3.09038 4117.28L3.00002 4212" stroke="url(#byDayColor2)" strokeWidth="8" pathLength={pathLength_timeline}/>
        </svg>
  
      </div>
    );
  };


