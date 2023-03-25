import onboarding from './sections/onboarding'
import onboarding2 from './sections/timeline'
import DocumentMeta from 'react-document-meta';

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
  return (
    <>
      <DocumentMeta {...headFunc} />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
      </style>
      
      <div className='sections_wrapper'>


        <div className='intro_sec' id='intro'>
          <div className='parallax_layer back_intro'>
            
            <div className="cosmosGraph">
            </div> 

          </div>
          <div className='parallax_layer front_intro'>
            <span className="img-txt">Virality on Twitter</span>
          </div>
        </div>




        <onboarding />


        <timeline />

      </div>
    </>
  );
}

export default App;
