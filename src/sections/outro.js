import {TWEET_SVG_NONAPPEAR} from './tweet_svg_nonappearing'
import brady_p from '../assets/brady_profile.jpg'
import black_p from '../assets/black_profile.jpg'
import mccarthy_p from '../assets/mccarthy_profile.jpg'
import black_i from '../assets/black_tweet_pic2.jpg'
import mccarthy_v from '../assets/mccarthy_tweet_vid.mp4'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {styles_with_css} from'./motion.ts'
export function OUTRO({UserSelection,SetterUserSelection,ScrollToSelection}){

    return (
        <div className="outro_section">
            <div className="outro_text">Check out tweets from the other categories!</div>

            <div className="outro_menu">
            
            <Carousel autoPlay infiniteLoop renderIndicator={() => (<div/>)} interval={3000} showStatus={false}   >
                <div>
                    <a  href="#0">
                    <div className="outro_menu_block" onClick={() => {SetterUserSelection("@TomBrady");ScrollToSelection();}}>
                        <div className='outro_menu_block_banner'>Sports</div>
                        <div className='outro_menu_block_tweet'>
                            <TWEET_SVG_NONAPPEAR username={'@TomBrady'} replies={"2923"} rts={"4788"} likes={"111.7K"} date={"02/03/2023"} image={brady_p} text={"Now that I’m retired I have time to go see @80forBrady four separate times today."}/>
                        </div>
                    </div>
                    </a>
                </div>

                <div>
                <a  href="#0">
                <div className="outro_menu_block"  onClick={() => {SetterUserSelection("@SpeakerMcCarthy");ScrollToSelection();}}>
                    <div className='outro_menu_block_banner'>News</div>
                    <div className='outro_menu_block_tweet'>
                        <TWEET_SVG_NONAPPEAR username={'@SpeakerMcCarthy'} replies={"19.9k"} rts={"18.4k"} likes={"80.9K"} date={"03/20/2023"} t_vid={mccarthy_v} image={mccarthy_p} text={"It doesn't matter if it's President Trump or a Democrat. Our justice system should not be used to target political opponents. Period."}/>
                    </div>
                </div>
                </a>
                </div>

                <div>
                <a  href="#0">
                <div className="outro_menu_block" onClick={() => {SetterUserSelection("@6lack");ScrollToSelection();}}>
                    <div className='outro_menu_block_banner'>Entertainment</div>
                    <div className='outro_menu_block_tweet'>
                        <TWEET_SVG_NONAPPEAR username={'@6lack'} replies={"363"} rts={"9840"} likes={"34.5K"} date={"03/24/2023"} image={black_p} t_image={black_i} text={"my third album, Since I Have A Lover 💐— OUT NOW https://6lack.lnk.to/SIHALalbum"}/>
                    </div>
                </div>
                </a>
                </div>
            </Carousel>


            </div>

            <div className="outro_text2"> 
            Also check out the accompanying
            <a href='https://knightcolumbia.org/content/understanding-social-media-recommendation-algorithms'>
            <span style={styles_with_css({color:"#1DA1F2"})}> essay </span> 
            </a>
            on the subject.
            </div>
        </div>
    );
}