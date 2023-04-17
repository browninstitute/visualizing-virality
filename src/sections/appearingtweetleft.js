import { useRef } from "react";
import { useInView } from "framer-motion";

export function AppearingTweetLeft({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold:0.4 });

  return (
    <section ref={ref}>
      <div
        //class = {isInView? "reveal": "none"}
        style={{
          transform: isInView ?  "none" : "translateX(-150px)" ,
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </div>
    </section>
    

  );
}