import { AppearingText } from "./appearingtext"
import {TWEET_SVG} from './tweet_svg'
export function DEMOTION_INTRO({UserSelection}){
    return(
        <div className="demotion_intro_section">
            <div className="amplification_demotion">
                <div className="basicText">
                But such ranking methods are intended to accomodate amplification of tweets that are deemed worthwhile. There is also demotion within the platform for subjectively problematic tweets.
            
                </div>
                </div>
            <div className="demotion_how">
                <div className="demotion_tweet_div">
                    <div className="demotion_tweet_div_sticky">
                        <div className="demotion_tweet_container">
                            <TWEET_SVG  username={UserSelection.username} image={UserSelection.image}  />    
          
                            <TWEET_SVG  username="@username" text="" date="" likes="" rts="" replies=""/> 
                            <TWEET_SVG  username="@username" text="" date="" likes="" rts="" replies=""/> 
                            <TWEET_SVG  username="@username" text="" date="" likes="" rts="" replies=""/>   
                        </div>
                    </div>
                </div>  
                <div className="demotion_text_div">
                    <div className="demotion_text_div_sticky">
                        What would happen if Tom's tweet were demoted?
                        <br/>
                        Demotion generally works by lowring a particular post in your feed.
                        <br/>
                        The lower it is in your feed, the less likely you are to see it.

                    </div>
                </div>
                              
            </div>
        </div>
    )

}