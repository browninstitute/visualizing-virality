
import {styles_with_css} from'./motion.ts'
export function CITATIONS(){
    return(
        <div className="citations_section">
            <div className="cit_text"> 
                References
            </div>
            
            <div className="cit_list">
            Data     
            <br/>
            <ul>
                <li>Viral Tweets
                    <ul>
                        <li>
                            Counts
                            <br/>
                            <ul>
                                <li>Twitter Official API v2</li>
                                <li>Twitter Advanced Search</li>
                            </ul>
                        </li>
                        <li>
                            "Viral" Confirmation
                            <br/>
                            <ul>
                                <li>Twitter Advanced Search</li>
                            </ul>
                        </li>
                        <li>
                            Author and Tweet Details
                            <br/>
                            <ul>
                                <li>Twitter Official API v1.1</li>
                            </ul>
                        </li>

                        <li>
                            Categories
                            <br/>
                            <ul>
                                <li>Twitter Official API v2</li>
                                <li>Twitter Unofficial APIs</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Network Tweets
                    <ul>
                        <li>Twitter Official API v2</li>
                        <li>Twitter Official API v1.1</li>        
                    </ul>
                </li>
            </ul>
            <br/>
            Website
            <br/>
            <ul>
                <li>Main Visual
                    <ul>
                        <li>P5</li>
                        <li>Papa Parse</li>        
                    </ul>
                </li>
                <li>UI
                    <ul>
                        <li>React JS</li>
                        <li>React Intersection Observer</li>  
                        <li>React Use Measure</li>  
                        <li>React Responsive Carousel</li>        
                    </ul>
                </li>
                <li>Animations
                    <ul>
                        <li>Framer Motion</li>    
                    </ul>
                </li>
            </ul>
            </div>
            <div className="cit_text"> 
            Also check out the accompanying
            <a href='https://knightcolumbia.org/content/understanding-social-media-recommendation-algorithms'>
            <span style={styles_with_css({color:"#1DA1F2"})}> essay </span> 
            </a>
            on the subject.
            </div>
        </div>
    )
}