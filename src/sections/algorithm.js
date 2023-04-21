import { AppearingText } from './appearingtext'
import {TWEET_SVG} from './tweet_svg'
export function ALGORITHM({UserSelection}){
    return(
      <div>
      <div className="algorithm_section container">
        <div className="row basicText">
          <div className="col-12 center">
        You selected this tweet by {UserSelection.username} 
          </div>
        </div>
        <div className="row tweet_intro">
          <div className="col-12 center">
        <TWEET_SVG username={UserSelection.username} text={UserSelection.text} date={UserSelection.date} likes={UserSelection.likes} rts={UserSelection.rts} replies={UserSelection.replies} image={UserSelection.image} t_link={UserSelection.t_link} t_image={UserSelection.t_image} t_vid={UserSelection.t_vid} />    
          </div>
        </div>
        <div className="row basicText">
          <div className="col-12 center">
        We're going to visualize how this tweet spread on Twitter's platform.
          </div>
        </div>
      </div>
      <div className="gradient-transition">
       
      </div>
      </div>
    )
  }