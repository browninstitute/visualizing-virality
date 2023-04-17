import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer"; 
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";

export const Heart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });

  // Update state when component is in view
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <AnimatePresence>
        <motion.div
          ref={ref}
          className={inView?"heart is-active":"heart"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Your component content here */}
        </motion.div>
     
    </AnimatePresence>
  );
};

