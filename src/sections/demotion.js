import {NETWORK2} from './network/network2';
import {selection_network} from './selection'
import {OUTRO} from './outro';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import React, { useEffect, useState } from 'react';
export function DEMOTION(){
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const marks = [
        {
          value: 3,
          label: 'Low',
        },
        {
          value: 6,
          label: 'Medium',
        },
        {
          value: 9,
          label: 'High',
        },
      ];
      function reset_demotion(value){
        selection_network.demotion = value;
        forceUpdate();
      }
      function valuetext(value) {
        if(selection_network.demotion !== value){
            reset_demotion(value);
        }
        return `${value}`;
      }
      
      function valueLabelFormat(value) {
        return marks.findIndex(mark => mark.value === value) + 1
      }
    return (
        <>
            <div className='demotion_sec'>
                <div className='text_wrapper'>
                    <div className='text_div1'>
                        <div className='text'>
                            But what if @TomBrady's tweet was demotion?
                        </div>
                        
                    </div>
                    <div className='text_div2'>
                        <div className='text'>
                            Demotion generally lowers a particular post in your feed.
                            <br/>
                            <br/>
                            The lower it is in your feed, the less likely you are to see it.
                        </div>
                        
                    </div>
                </div>
                <div className='tweets_wrapper'></div>
            </div>
            <div className='slider'>
                <div className='text_div'> 
                    Lets see how demotion could theoretically impact the reach from our tweet.
                    <br />
                    Select the desired amount of demotion in the slider below.
                </div>
                <div className='slider_div'>
                <Box sx={{ width: 300 }}>
                <Slider
                    aria-label="Restricted values"
                    defaultValue={3}
                    step={3}
                    min={3}
                    max={9}
                    valueLabelFormat={valueLabelFormat}
                    getAriaValueText={valuetext}

                    valueLabelDisplay="off"
                    marks={marks}
                />
                </Box>
                </div>
                

            </div>
            <NETWORK2 />
            <OUTRO />
        </>

    )
}