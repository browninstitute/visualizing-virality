
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, {  useRef} from "react";
export function TIMELINE_LINE(){
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
      target:ref,
      offset:["start end", "end start"]
    });

    const pathLength_timeline = useSpring(useTransform(scrollYProgress, [0,0.8], [ 0 ,1 ]), { 
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    
    return(
      <div className='timeline_line' ref={ref} >

        <svg className='line_svg' viewBox="0 0 10 4212" fill="none" preserveAspectRatio='none' style={{ pointerEvents: "all" }}>
          <defs>
            <linearGradient id="byDayColor" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#660099" stopOpacity="100%" />
              <stop offset="3.225%" stopColor="#660099" stopOpacity="100%" />

              <stop offset="3.225%" stopColor="#7F69D4" stopOpacity="100%" />
              <stop offset="6.45%" stopColor="#7F69D4" stopOpacity="100%" />

              <stop offset="6.45%" stopColor="#660099" stopOpacity="100%" />
              <stop offset="9.675%" stopColor="#660099" stopOpacity="100%" />

              <stop offset="9.675%" stopColor="#7F79E2" stopOpacity="100%" />
              <stop offset="12.9%" stopColor="#7F79E2" stopOpacity="100%" />

              <stop offset="12.9%" stopColor="#5F97F3" stopOpacity="100%" />
              <stop offset="16.125%" stopColor="#5F97F3" stopOpacity="100%" />

              <stop offset="16.125%" stopColor="#6A93F2" stopOpacity="100%" />
              <stop offset="19.35%" stopColor="#6A93F2" stopOpacity="100%" />

              <stop offset="19.35%" stopColor="#5F97F3" stopOpacity="100%" />
              <stop offset="22.575%" stopColor="#5F97F3" stopOpacity="100%" />

              <stop offset="22.575%" stopColor="#660099" stopOpacity="100%" />
              <stop offset="25.8%" stopColor="#660099" stopOpacity="100%" />

              <stop offset="25.8%" stopColor="#7F69D4" stopOpacity="100%" />
              <stop offset="29.025%" stopColor="#7F69D4" stopOpacity="100%" />

              <stop offset="29.025%" stopColor="#7E7DE5" stopOpacity="100%" />
              <stop offset="32.25%" stopColor="#7E7DE5" stopOpacity="100%" />

              <stop offset="32.25%" stopColor="#6E2DA7" stopOpacity="100%" />
              <stop offset="35.475%" stopColor="#6E2DA7" stopOpacity="100%" />

              <stop offset="35.475%" stopColor="#6A1DA0" stopOpacity="100%" />
              <stop offset="38.7%" stopColor="#6A1DA0" stopOpacity="100%" />

              <stop offset="38.7%" stopColor="#7139AE" stopOpacity="100%" />
              <stop offset="41.925%" stopColor="#7139AE" stopOpacity="100%" />

              <stop offset="41.925%" stopColor="#1EA0F0" stopOpacity="100%" />
              <stop offset="45.15%" stopColor="#1EA0F0" stopOpacity="100%" />

              <stop offset="45.15%" stopColor="#728EF0" stopOpacity="100%" />
              <stop offset="48.375%" stopColor="#728EF0" stopOpacity="100%" />

              <stop offset="48.375%" stopColor="#8074DE" stopOpacity="100%" />
              <stop offset="51.6%" stopColor="#8074DE" stopOpacity="100%" />

              <stop offset="51.6%" stopColor="#5A98F3" stopOpacity="100%" />
              <stop offset="54.825%" stopColor="#5A98F3" stopOpacity="100%" />

              <stop offset="54.825%" stopColor="#1EA0F0" stopOpacity="100%" />
              <stop offset="58.05%" stopColor="#1EA0F0" stopOpacity="100%" />

              <stop offset="58.05%" stopColor="#1EA0F0" stopOpacity="100%" />
              <stop offset="61.275%" stopColor="#1EA0F0" stopOpacity="100%" />

              <stop offset="61.275%" stopColor="#7D81E8" stopOpacity="100%" />
              <stop offset="64.5%" stopColor="#7D81E8" stopOpacity="100%" />

              <stop offset="64.5%" stopColor="#439CF3" stopOpacity="100%" />
              <stop offset="67.725%" stopColor="#439CF3" stopOpacity="100%" />

              <stop offset="67.725%" stopColor="#1EA0F0" stopOpacity="100%" />
              <stop offset="70.95%" stopColor="#1EA0F0" stopOpacity="100%" />

              <stop offset="70.95%" stopColor="#6E91F2" stopOpacity="100%" />
              <stop offset="74.175%" stopColor="#6E91F2" stopOpacity="100%" />

              <stop offset="74.175%" stopColor="#7E7DE5" stopOpacity="100%" />
              <stop offset="77.4%" stopColor="#7E7DE5" stopOpacity="100%" />

              <stop offset="77.4%" stopColor="#3A9DF2" stopOpacity="100%" />
              <stop offset="80.625%" stopColor="#3A9DF2" stopOpacity="100%" />

              <stop offset="80.625%" stopColor="#3A9DF2" stopOpacity="100%" />
              <stop offset="83.85%" stopColor="#3A9DF2" stopOpacity="100%" />

              <stop offset="83.85%" stopColor="#2E9FF1" stopOpacity="100%" />
              <stop offset="87.075%" stopColor="#2E9FF1" stopOpacity="100%" />

              <stop offset="87.075%" stopColor="#439CF3" stopOpacity="100%" />
              <stop offset="90.3%" stopColor="#439CF3" stopOpacity="100%" />

              <stop offset="90.3%" stopColor="#6E91F2" stopOpacity="100%" />
              <stop offset="93.525%" stopColor="#6E91F2" stopOpacity="100%" />

              <stop offset="93.525%" stopColor="#7888ED" stopOpacity="100%" />
              <stop offset="96.75%" stopColor="#7888ED" stopOpacity="100%" />

              <stop offset="96.75%" stopColor="#1EA0F0" stopOpacity="100%" />
              <stop offset="100%" stopColor="#1EA0F0" stopOpacity="100%" />
            </linearGradient>
          </defs> 
          <motion.path  d="M6.97644 1L3.09038 4117.28L3.00002 4212"  stroke="url(#byDayColor)" pathLength={pathLength_timeline} strokeWidth="5"/>
        </svg>
  
      </div>
    );
  };
  

  
  