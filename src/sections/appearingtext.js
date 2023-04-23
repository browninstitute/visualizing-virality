import { useRef } from "react";
import { useInView } from "framer-motion";

export function AppearingText({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold:0.4 });

  return (
    <section ref={ref}>
      <div
        //class = {isInView? "reveal": "none"}
        style={{
          transform: isInView ?  "translateY(-50px)" : "none" ,
          opacity: isInView ? 1 : 0,
          transition: "all 0.25s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"
        }}
      >
        {children}
      </div>
    </section>
    

  );
}