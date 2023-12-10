import logo from './logo.svg';
import './App.css';
import React from 'react';
import BgStatic from './components/Background/bgstatic';
import Header from './components/Header/Header';
import Hero from './components/Hero/hero';
import AboutSection from './components/About/about';
import Faqs from './components/Faq/faq';
import Footer from './components/Footer/footer';
import Challenges from './components/Challenges/Challenges';
import SpeakersNew from './components/Speaker/speaker';
import FlippingCard from './components/Organising_Team/Single_Card';

import Timeline from './components/Timeline/Timeline';
// import { Timeline } from '@material-tailwind/react';
// import TimelineComponent from './components/Timeline/Timeline';
// import HorizontalTimeline from './components/Timeline/Timeline';

import Prizes from './components/Prizes/Prizes';

import Organising_team from './components/Organising_Team/Organising_team';
import Theme from './components/Themes/Theme';
 
import Carousel from './components/carousel/carousel';


 
function App() {

  return (
   <>
    <div className="relative z-0 bg-primary">
      <div className="bg-black bg-cover 
      bg-no-repeat bg-center">
   <Header/>
   <div className='mt-12'>
    <Hero/>
    <AboutSection/>
 
    <Timeline/>

      

    
    <Theme/>
    <Organising_team/>
 
    {/* <Carousel/> */}
 
    <Prizes/>
    <Challenges/>
    <SpeakersNew/>
    <Faqs/>
    <Footer/>
    </div>
    </div>
    </div>
   </>
  );
}

export default App;
