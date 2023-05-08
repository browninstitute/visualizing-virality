
import {styles_with_css} from'./motion.ts'
export function CITATIONS(){
    return(
        <div className="citations_section">
            
            <div className='cit_text'>
                <span className='cit_author_intro'>Built by</span><br/>
                <a href="https://knightcolumbia.org/bios/view/sahil-patel"><span className='cit_author_name' style={styles_with_css({color:"#1DA1F2"})}>Sahil Patel </span></a>&amp; <a href="https://knightcolumbia.org/bios/view/samia-menon"><span className='cit_author_name' style={styles_with_css({color:"#1DA1F2"})}> Samia Menon</span></a>
            </div>
            <hr className='line_end'></hr>
            <div className="cit_text"> 
                References
            </div>
            
            <div className="cit_list">
            Data (<a href="https://github.com/sjp2232/Visualizing-Virality-Data"><span style={styles_with_css({color:"#1DA1F2"})}>Data Link</span></a>)      
            <br/>
            <ul>
                <li>Viral Tweets
                    <ul>

                        <li>
                            Query + "Viral" Confirmation
                            <br/>
                            <ul>
                                <li>Twitter Official API v2</li>
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
                                <li>Twitter Hidden APIs</li>
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
            Website (<a href="https://github.com/browninstitute/visualizing-virality/"><span style={styles_with_css({color:"#1DA1F2"})}>Github Link</span></a>)
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
            <span style={styles_with_css({color:"#1DA1F2"})}> article </span> 
            </a>
            on the subject.
            </div>
        </div>
    )
}