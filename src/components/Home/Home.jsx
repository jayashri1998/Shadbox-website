import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import DemoCarousel from './Carousel'
import ScrollIndicator from '../OtherFile/ScrollIndicator';
import Cover from './Cover';
import Connectuus from './Connectuus';
import Card from './Card';
import GetInTouch from '../OtherFile/GetInTouch';
import Custom from './Custom';



const Home = () => {
  return (

    <div> 
    <div className='h-full' >
    
  <ScrollIndicator/> 
   <HeroSection/>
     <Cover/> 
    </div>
    <div className='bg-white'>
    <div className='w-screen bg-blue-100 '>
    <DemoCarousel />
    </div>
    <div className='bg-gray-50 '>
    <Connectuus/>
    </div>
    <Card />
    <GetInTouch/>
   
    </div>
    </div>
  )
}

export default Home

