import React from 'react'
import LogoSlider from './LogoSlider'
import Fade from 'react-reveal/Fade';

const Connectuus = () => {
  return (
    <Fade bottom>
    <div className='text-center font-poppins'>
    <hr className='border-blue-500 border-t-2 border-solid w-80 mx-auto'/>
    <h1 className="text-4xl font-semibold font-poppins text-black  mt-8">
    <p>------</p>
    Our Customers
   </h1>
   <p className="text-justify mx-4 md:mx-28 lg:mx-32 mt-4 font-poppins text-gray-700 text-lg">
   "Shadbox Infosystem has continually demonstrated an unwavering commitment to excellence in software development. Their tireless dedication to innovation and their ability to tailor solutions to our unique business needs have been instrumental in shaping our success. Shadbox's team of skilled professionals consistently goes 
   the extra mile to ensure our software not only meets but exceeds our expectations."
   </p>
   <div className='mt-16'>
   <LogoSlider/>
   </div>
   </div>
   </Fade>
  )
}

export default Connectuus
