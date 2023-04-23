import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {useEffect, useState} from 'react';
   

//jump when they're 80% down
export function Counter() {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [count, setCount] = useState(99800);

  useEffect(() => {
    if (inView) {
      const intervalId = setInterval(() => {
        setCount(prevCount => {
            if (prevCount < 100000) {
              return prevCount + 1;
            } else {
              clearInterval(intervalId);
              return prevCount;
            }
        });
    }, 7);
      return () => clearInterval(intervalId);
    }
  }, [inView]);

  const countVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1 },
  };
     
  const countTransition = { duration: 0.5 };
  const countString = " " + count + " ";
  return (
    <motion.div className='counter_div'
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={countVariants}
      transition={countTransition}
    >
     
      <motion.span>  {countString}  </motion.span> 
    </motion.div>
  );
}