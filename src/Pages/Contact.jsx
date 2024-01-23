
import HireForm from '../components/HireForm/HireForm'
import ContactContain from '../components/ContactUS/ContactContain'
import { Fade } from 'react-awesome-reveal'
import GetInTouch from '../components/OtherFile/GetInTouch'
import ContactUs from '../assets/Image/ContactUs.jpg'
import contactmain from '.././assets/Image/Contactmain.jpg'


const Contact = () => {
  return (
    <div className="">
 <div className="relative group ">
 <div className={`content-overlay bg-opacity-50 bg-black absolute h-full w-full top-0 left-0 transition-opacity duration-400 rounded-lg`}></div>
   <img
     src={ContactUs}
     alt=""
     className=" w-full h-32 lg:h-[440px] "/>
   <div className="absolute bottom-0 w-full h-full bg-black bg-opacity-50">
   <h1 className='mt-48 text-white text-center font-poppins font-semibold text-6xl'>Let us know what's on your mind
   <p className='text-3xl pt-2'>
   We would love to hear from you!
</p></h1>
   </div>
 </div>


    <div className='text-center font-poppins text-2xl'>
  <p className=' text-4xl font-semibold'>------ </p>
  <span className='text-4xl font-semibold  '>Drop your Message!! </span>
  <p className='font-normal text-xl text-gray-600 lg:text-justify m-4'>Feel free to get in touch with us at Shadbox! We're here to answer any questions you may have, discuss your project ideas, or provide assistance. Whether you're looking to collaborate on a new web development project, explore partnership opportunities, or simply say hello, our team is ready to connect. Reach out to us, and let's start a conversation about turning your digital vision into a reality. Your success begins with a simple 'hello' – contact Shadbox today</p>
  </div>
    <div className=" lg:flex items-center justify-around ">
    <div>
    <Fade direction='left'>
    <img src={contactmain} alt='' className='w-96 h-96'/>
    <ContactContain/>
    </Fade>
    </div>
    <Fade direction='right'>
    <HireForm/>
    </Fade>
    </div>
    <Fade direction='bottom'>
    <div className='m-4'>
    <GetInTouch />
    </div>
    </Fade>
    
    
    </div>
  )
}


export default Contact