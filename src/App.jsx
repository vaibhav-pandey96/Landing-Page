import React from 'react';
import Header from './components/header/Header';
import Header2 from './components/header/Header2'
import Body from './components/body/Body';
import Companies from './components/body/Companies';
import About from './components/About/About';
import Features from './components/Features/Features';
import Videosec from './components/Video-Intro/Videosec';
import HappyClients from './components/Happy Clients/HappyClients';
import Blogs from './components/Blogs/Blogs';
import Corosels from './components/Corousels/Corosels';
import Faq from './components/FAQ\'s/Faq';
import Appdownload from './components/App-Download-Section/Appdownload';
import ImportantNumbers from './components/ImpNums/ImportantNumbers';
import Services from './components/Services-Comp/Services';



export default function App() {

  return (
    
    <div className='w-full h-auto bg-white overflow-hidden'>
    <Header/>
    <Header2/>
    <Body/>
    <Companies/>
    <Services/>
    <About/>
    <Features/>
    <Videosec/>
    <HappyClients/>
    <Blogs/>
    <Corosels/>
    <Faq/>
    <Appdownload/>
    <ImportantNumbers/>
    </div>
  )
}
