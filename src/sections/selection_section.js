import {selection_network} from './selection';
import {TWEET_SVG} from './tweet_svg';
import {useRef} from 'react';
import {useInView} from 'react-intersection-observer';
import {motion, useScroll, useTransform} from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {styles_with_css} from'./motion.ts'

import {NETWORK1} from './network_p5/network1';
import {NETWORK2} from './network_p5/network2';
import {ALGORITHM} from './algorithm';
import {GITHUB} from './github';
import {DEMOTION} from './demotion';
import {DEMOTION_INTRO} from './demotion_intro';
import {SELECTION_MENU} from './selection_menu';
import {OUTRO} from './outro';
import {ReactP5Wrapper} from 'react-p5-wrapper';

import brady_p from '../assets/brady_profile.jpg'
import black_p from '../assets/black_profile.jpg'
import mccarthy_p from '../assets/mccarthy_profile.jpg'
import black_i from '../assets/black_tweet_pic2.jpg'
import mccarthy_v from '../assets/mccarthy_tweet_vid.mp4'


export function SELECTION_SECTION(){

    // function preload_data(p5){
        
    // }

    const getkeyvals = (uname) => {
        switch (uname) {
            case "@TomBrady":
                return ({
                    name:"Tom Brady",
                    username: "@TomBrady",
                    category: "Sports",
                    text: "Now that I’m retired I have time to go see @80forBrady four separate times today.",
                    date: "02/03/2023",
                    likes: "111.7K",
                    rts: "4788",
                    replies: "2923",
                    image: brady_p,
                    t_image: null,
                    t_vid: null,
                    t_link: "https://twitter.com/TomBrady/status/1621502628222980097",

                });
            case "@6lack":
                return ({
                    name:"6lack",
                    username: "@6lack",
                    category: "Entertainment",
                    text: "my third album, Since I Have A Lover 💐— OUT NOW https://6lack.lnk.to/SIHALalbum",
                    date: "03/24/2023",
                    likes: "34.5K",
                    rts: "9840",
                    replies: "363",
                    image: black_p,
                    t_image: black_i,
                    t_vid: null,
                    t_link: "https://twitter.com/6LACK/status/1639114939087618050",

                });
            case "@SpeakerMcCarthy":
                return ({
                    name:"Kevin McCarthy",
                    username: "@SpeakerMcCarthy",
                    category: "News",
                    text: "It doesn't matter if it's President Trump or a Democrat. Our justice system should not be used to target political opponents. Period.",
                    date: "03/20/2023",
                    likes: "80.9K",
                    rts: "18.4k",
                    replies: "19.9k",
                    image: mccarthy_p,
                    t_image: null,
                    t_vid:mccarthy_v,
                    t_link: "https://twitter.com/speakermccarthy/status/1637850612992753664",

                });
            default:
                return ({
                    name:"Tom Brady",
                    username: "@TomBrady",
                    category: "Sports",
                    text: "Now that I’m retired I have time to go see @80forBrady four separate times today.",
                    date: "02/03/2023",
                    likes: "111.7K",
                    rts: "4788",
                    replies: "2923",
                    image: brady_p,
                    t_image: null,
                    t_vid: null,
                    t_link: "https://twitter.com/TomBrady/status/1621502628222980097",

                });
        }
    }


    const [selection, setSelection] = useState(getkeyvals("@TomBrady"));
    const updateSelection = (t_uname) => {

        console.log('changing to: ' + t_uname)
        let new_selection = Object.create(null);

        let n_keyvals = getkeyvals(t_uname);
        new_selection["name"] = n_keyvals.name 
        new_selection["username"] = n_keyvals.username
        new_selection["category"] = n_keyvals.category
        new_selection["text"] = n_keyvals.text
        new_selection["date"] = n_keyvals.date
        new_selection["likes"] = n_keyvals.likes
        new_selection["rts"] = n_keyvals.rts
        new_selection["replies"] = n_keyvals.replies
        new_selection["image"] = n_keyvals.image
        new_selection["t_image"] = n_keyvals.t_image
        new_selection["t_vid"] = n_keyvals.t_vid
        new_selection['t_link'] = n_keyvals.t_link
        setSelection(new_selection)
    };

    const [demotion, setDemotion] = useState(3);
    const updateDemotion = (t_demotion) => {
        console.log('changing demotion to: ' + t_demotion)
        setDemotion(t_demotion)
    };


    const [pauseN1, setPauseN1] = useState(false);
    const updatePauseN1 = (pause) => {
        setPauseN1(pause)
    };
    const [pauseN2, setPauseN2] = useState(true);
    const updatePauseN2 = (pause) => {
        setPauseN2(pause)
    };


    const [resetN1, setResetN1] = useState(false);
    const updateResetN1 = (reset) => {
        setResetN1(reset)
    };
    const [resetN2, setResetN2] = useState(false);
    const updateResetN2 = (reset) => {
        setResetN2(reset)
    };

    return (
        <>
            <SELECTION_MENU UserSelection={selection} SetterUserSelection={updateSelection} />
            <ALGORITHM UserSelection={selection} />
            <NETWORK1 UserSelection={selection} NetworkPause={pauseN1} SetterNetworkPause={updatePauseN1} NetworkReset={resetN1} SetterNetworkReset={updateResetN1} />

            <GITHUB UserSelection={selection}/>
            <DEMOTION_INTRO UserSelection={selection}/>
            <DEMOTION UserSelection={selection} UserDemotion={demotion} SetterUserDemotion={setDemotion}  />
           

            
            <OUTRO UserSelection={selection} />
        </>
    );
}