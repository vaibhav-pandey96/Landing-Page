import React from 'react';
import Header from './components/header/Header';
import Header2 from './components/header/Header2'
import Body from './components/body/Body';
import Companies from './components/body/Companies';
import Services from './components/services components/services';
import About from './components/About/About';
import Features from './components/Features/Features';
import Videosec from './components/Video-Intro/Videosec';
import HappyClients from './components/Happy Clients/HappyClients';
import Blogs from './components/Blogs/Blogs';
import Corosels from './components/Corousels/Corosels';
import Faq from './components/FAQ\'s/Faq';



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
    </div>
  )
}
