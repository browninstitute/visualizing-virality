import onboarding from './sections/onboarding'
import onboarding2 from './sections/timeline'
import DocumentMeta from 'react-document-meta';
import React, { useState, useEffect ,  useRef} from "react";
import { Graph } from '@cosmograph/cosmos'
import {cosmos_config, cosmos_links, cosmos_nodes} from './sections/cosmos'
const headFunc = {
  title: 'Twitter Website',
  description: 'We made this website with this description.',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0',
  meta: {
      charset: 'utf-8',
      title: 'Twitter Website',
      description: 'We made this website with this description.'
  }
};

function App() {

  const cosmos_ref = useRef(null)  
  function load_graph() {
    //temporary as function for development 
    const graph = new Graph(cosmos_ref.current, cosmos_config);
    graph.setData(cosmos_nodes, cosmos_links);
    graph.zoom(1.2);
  }


  return (
    <>
      <DocumentMeta {...headFunc} />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
      </style>
      
      <div className='sections_wrapper'>


        <div className='intro_sec' id='intro'>
          <div className='parallax_layer back_intro'>
            
            <div className='cosmos_graph'>
              <canvas className='cosmos_canvas' ref={cosmos_ref}/>
            </div> 
            <div className='photos_people'></div>

          </div>
          <div className='parallax_layer front_intro' onClick={()=>{load_graph()}}>
            <span className='banner_txt'>Visualizing Virality</span>
          </div>
        </div>




        <onboarding />


        <timeline />

      </div>
    </>
  );
}

export default App;
