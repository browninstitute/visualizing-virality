import React, { useState, useEffect, useRef} from "react";
import { motion, useScroll,  useTransform, useSpring } from "framer-motion";
import {styles_with_css} from'./motion.ts'
import {TWEET_SVG} from './tweet_svg'
import {AppearingText} from './appearingtext.js'
import {Heart} from './heart.js';
import App from "../App";
import useMeasure from "react-use-measure";
import { Counter } from "./counter";


export function SELECTION_LEADUP(){
   
  
    return (
      <div className="container onboarding">
        <div className="row">
          <div className="col-6">
              Your mom.
          </div>
          <div className="col-6">
            YOUR MOM
          </div>
        </div>




      </div>
    )
  }