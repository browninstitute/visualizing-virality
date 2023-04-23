import {motion, useScroll, useTransform} from 'framer-motion';
import React, { useEffect, useState, useRef } from 'react';
import {Heart} from './heart.js';
import {styles_with_css} from'./motion.ts'

import { Counter } from "./counter";

export function ONBOARDING_COUNTER(){
    return(
        <div className='counter_section'>
            <div className='counter_text'>
              We then narrowed that group down to tweets that had at least <br/>
              <Counter></Counter> likes.               
              <Heart></Heart>
            </div>
        </div>
    )
}