
import GetInTouch from '../OtherFile/GetInTouch'
import HiringProcess from '../HireForm/HireProcess'
import ApproachImg from '../../assets/Image/Approach.jpg'
import Indus from '../../assets/Image/Indus.jpg'
import {Fade} from 'react-reveal';

const  Industries = () => {
  return (
    <div className='mt-16 '>
    <Fade bottom>
   <div className='bg-[#eaf3ff] h-fit    py-8 '>
    <h1 className='font-semibold font-poppins text-4xl mx-2 lg:mx-16' >Welcome to Shadbox Industries: 
        <li className='text-3xl font-medium'>Innovative Digital Mastery</li> 
    <li className='text-3xl font-medium'>Ruby on Rails Brilliance</li> <li className='text-3xl font-medium'> Dynamic, Scalable, Exceptional</li></h1>
    </div>
    </Fade>
    <Fade bottom>
    <h1 className='text-2xl leading-7 font-roboto lg:text-justify text-gray-600 m-4 lg:mx-16'>
    At Shadbox Industries, we transcend conventional boundaries, pioneering the realm of digital innovation with unparalleled expertise in software development. Established on [Your Foundation Year], we've been on a relentless quest to redefine the possibilities of technology.</h1>
    </Fade>
    <Fade bottom>
       <div className='relative lg:mx-32 h-fit  flex   ' >  
       <div className='relative   '>
       <img src={ApproachImg} alt='' className='w-screen  lg:w-[65rem] h-80 opacity-20 ' />
       <div className='reletive hidden lg:block '>
       <div className='absolute top-28 right-80 bg-blue-400 w-32 h-32 rounded-full flex items-center justify-center'>
         <div className='bg-white w-24 h-24 rounded-full flex items-center justify-center '>
           <span className='text-black text-center'>Ruby on Rails Mastery</span>
         </div>
       </div>
     
       <div className='absolute top-28 right-52 bg-blue-400 w-32 h-32 rounded-full flex items-center justify-center'>
       <div className='bg-white w-24 h-24 rounded-full flex items-center justify-center'>
         <span className='text-black text-center'>Full-Stack Development</span>
       </div>
     </div>
     <div className='absolute top-28 right-24 bg-blue-400 w-32 h-32 rounded-full flex items-center justify-center'>
     <div className='bg-white w-24 h-24 rounded-full flex items-center justify-center'>
       <span className='text-black text-center'> Scalability and Performance</span>
     </div>
   </div>
     </div>  
     </div>
       <h1 className='text-2xl font-roboto absolute inset-0  p-4  lg:w-[600px] font-normal text-gray-700'>
      Services provided prior to the implementation phase
       <p className='text-3xl mt-4  ' >Business Analysis</p>
       <p className='text-3xl'>Requirements Gathering</p>
       <p className='text-3xl'>Scoping and Planning</p>
       <span className=' text-sm tracking-wide hidden lg:block text-justify ' style={{ lineHeight: '1', marginTop:'10px' }}>At Shadbox, we prioritize a customer-centric approach to your purchasing process, focusing on your needs rather than being centered around Software development or . Our experienced consultants are dedicated to planning for a successful implementation.
       <p className='mt-4'>
       Explore the potential benefits that Shadbox can bring to your business without any commitment or risk.
       </p></span>
       </h1>
     </div>
     </Fade>
     
     <div className='lg:mx-12 mt-4 gap-4 mx-2'>
     <h1 className='font-semibold text-2xl'>Our Passion for Software Brilliance:</h1>
     
     <div className='lg:grid lg:grid-cols-2 gap-8'>
     <Fade left>
       <div className='font-roboto mt-8'>
         <h1 className='text-[#2563EB] text-lg mt-4'>Elevating Businesses with Ruby on Rails Mastery</h1>
         <p className='text-lg leading-7 text-justify text-gray-600 my-4'>
         Take a digital journey with our skilled team of developers who are experts in using Ruby on Rails. We don't just write code; we craft dynamic and efficient web applications that align perfectly with your vision.
         </p>
       </div>
       </Fade>
       <Fade right>
       <div className='font-roboto mt-8'>
         <h1 className='text-[#2563EB] text-lg mt-4'>Crafting Full-Stack Wonders</h1>
         <p className='text-lg leading-7 text-justify text-gray-600 my-4'>
            We're not just really good at the technical backend stuff; we're like music conductors creating a full-stack symphony. We mix the behind-the-scenes server work with eye-catching user interfaces. The result? Easy and complete experiences that grab attention and turn visitors into users.
         </p>
       </div>
       </Fade>
     </div>
   
   </div>
   <h1 className='mx-8  hidden lg:block text-gray-200'>//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</h1>
   <div className='lg:mx-12 mt-4 gap-4'>
   <h1 className='font-semibold text-2xl'>Unrivaled Methodology:</h1>
   <div className='lg:grid lg:grid-cols-2 gap-8'>
   <Fade left>
     <div className='font-roboto mt-8'>
       <h1 className='text-[#2563EB] text-lg mt-4'>Adapting Swiftly</h1>
       <p className='text-lg leading-7 text-justify text-gray-600 my-4'>
       In a fast-changing world, we're like quick learners. Our teamwork is smooth and flexible, adapting to your needs. We make sure your project not only does what it's supposed to but goes above and beyond.
       </p>
     </div>
     </Fade>
     <Fade right>
     <div className='font-roboto mt-8'>
       <h1 className='text-[#2563EB] text-lg mt-4'>Performance Amplified</h1>
       <p className='text-lg leading-7 text-justify text-gray-600 my-4'>
       We don't just build; we architect for the future. Scalability and performance are at the core of our solutions, providing a robust foundation for your digital aspirations to soar.
       </p>
     </div>
     </Fade>
   </div>
 </div>
 <h1 className='mx-8 hidden lg:block text-gray-200'>//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</h1>

 <div className='lg:mx-12 mt-4 gap-4'>
   <h1 className='font-semibold text-2xl'>Scalability and Performance</h1>
   <div className='lg:grid lg:grid-cols-2 gap-8'>
   <Fade left>
     <div className='font-roboto mt-8'>
       <h1 className='text-[#2563EB] text-lg mt-4'>Seamless Expansion</h1>
       <p className='text-lg leading-7 text-justify text-gray-600 my-4'>
       In the dynamic digital era, our commitment to scalability ensures that your business can expand seamlessly. As you reach new horizons, our solutions grow with you, offering a smooth and uninterrupted journey towards success.
       </p>
     </div>
     </Fade>
     <Fade right>
     <div className='font-roboto mt-8'>
       <h1 className='text-[#2563EB] text-lg mt-4'>Optimized Efficiency</h1>
       <p className='text-lg leading-7 text-justify text-gray-600 my-4'>
       Scalability isn't just about growth; it's about enhancing efficiency. Our performance-driven solutions optimize processes, ensuring that your operations run smoothly even during periods of increased demand. With us, efficiency is a constant, regardless of scale.
       </p>
     </div>
     </Fade>
   </div>
 </div>
 <div className='lg:flex lg:gap-10 lg:ml-24'>
 <Fade left>
    <HiringProcess/>
    </Fade>
    <Fade right>
    <img src={Indus} alt='' className='w-full lg:w-[600px]  lg:h-[40rem] '/>
    </Fade>
    </div>
    <Fade bottom>
    <GetInTouch/>
    </Fade>
    </div>
  )
}

export default Industries;