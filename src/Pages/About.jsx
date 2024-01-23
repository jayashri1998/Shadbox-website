import React from 'react'
import AboutUs from '../components/About/AboutPage'
import GetInTouch from '../components/OtherFile/GetInTouch'
import TechStack from '../components/OtherFile/TechStack'
import ApproachImg from '../assets/Image/Approach.jpg'
const About = () => {
  return (
    <div className='h-full mt-16  mb-8'>
   <AboutUs/>
   <div className='relative lg:mx-32 h-fit  flex my-8  '>  
       <div className='relative  '>
       <img src={ApproachImg} alt='' className='w-screen lg:w-[65rem] h-80 opacity-20 ' />
       <div className='reletive hidden lg:block '>
       <div className='absolute top-28 right-80 bg-blue-400 w-32 h-32 rounded-full flex items-center justify-center'>
         <div className='bg-white w-24 h-24 rounded-full flex items-center justify-center '>
           <span className='text-black text-center'>Solution Enablement</span>
         </div>
       </div>
     
       <div className='absolute top-28 right-52 bg-blue-400 w-32 h-32 rounded-full flex items-center justify-center'>
       <div className='bg-white w-24 h-24 rounded-full flex items-center justify-center'>
         <span className='text-black text-center'>Discover</span>
       </div>
     </div>
     <div className='absolute top-28 right-24 bg-blue-400 w-32 h-32 rounded-full flex items-center justify-center'>
     <div className='bg-white w-24 h-24 rounded-full flex items-center justify-center'>
       <span className='text-black text-center'>Risk Minimization</span>
     </div>
   </div>
     </div>  
     </div>
       <h1 className='text-2xl font-roboto absolute inset-0  p-4  lg:w-[600px] font-normal text-gray-700'>
      Services provided prior to the implementation phase
       <p className='text-3xl mt-4  ' >Business Analysis</p>
       <p className='text-3xl'>Requirements Gathering</p>
       <p className='text-3xl'>Scoping and Planning</p>
       <span className=' text-sm tracking-wide hidden lg:block ' style={{ lineHeight: '1', marginTop:'10px' }}>At Shadbox, we prioritize a customer-centric approach to your purchasing process, focusing on your needs rather than being centered around Software development or . Our experienced consultants are dedicated to planning for a successful implementation.
       <p className='mt-4'>
       Explore the potential benefits that Shadbox can bring to your business without any commitment or risk.
       </p></span>
       </h1>
     </div>
   <GetInTouch/>
   <TechStack/>
    </div>
  )
}

export default About