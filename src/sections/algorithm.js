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
        <TWEET_SVG username={UserSelection.username} text={UserSelection.text} date={UserSelection.date} likes={UserSelection.likes} rts={UserSelection.rts} replies={UserSelection.replies} image={UserSelection.image}  />    
          </div>
        </div>
        <div className="row basicText">
          <div className="col-12 center">
        We're going to visualize how this tweet spread on Twitter over 4 days
          </div>
        </div>
      </div>
      <div className="algorithm_section container">
        <AppearingText>
        <div className="row basicText">
          <div className="col-12 center">
        {UserSelection.username} is going to be represented by the <span className="pink">light pink</span> circle.
          </div>
        </div>
        </AppearingText>
        <br/><br/>        <br/><br/>

        <AppearingText>
        <div className="row basicText">
          <div className="col-12 center">
          The <span className="darkBlue">dark blue</span> and <span className="lightBlue">light blue</span> circles are accounts that interacted with the tweet.
        Their size is proportional to their follower count.
          </div>
        </div>
        </AppearingText>
        <br/><br/>        <br/><br/>

        <AppearingText>
        <div className="row basicText">
          <div className="col-12 center">
          When these accounts retweet, like, or reply to the original tweet, it will be shown by a burst of <span className="blackDots">black dots</span> across the network.    

          </div>
        </div>
       </ AppearingText>
      </div>
      </div>
    )
  }