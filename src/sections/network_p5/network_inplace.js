import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function NETWORK_INPLACE({
    isVisible,
    setterVisible
    }){

    const { ref, inView } = useInView({amount:0});

    useEffect(() => {
        if (inView) {
            setterVisible(true);
        
        }
        if (!inView) {
            setterVisible(false);
          
          }
      }, [inView]);


  return(
    <>
    <div className="network_inplace" ref={ref}>
      Loading
    </div>
    </>
  )
  }