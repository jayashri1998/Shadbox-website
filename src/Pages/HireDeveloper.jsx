import HireForm from "../components/HireForm/HireForm"
import HiringProcess from "../components/HireForm/HireProcess"
import CallSupport from "../components/HireForm/CallSupport"
import { Fade } from "react-awesome-reveal"
import HireBanner from "../components/HireForm/HireBanner"
import HireUs from ".././assets/Image/Hireus.jpg"
import WhyChoose from ".././assets/Image/whyChoose.jpg"
import LogoSlider from "../components/Home/LogoSlider"
import { VscWorkspaceTrusted } from "react-icons/vsc";
import CallSupportImg from ".././assets/Image/callSupport.jpg"


const HireDeveloper = () => {
  return (
    <div > 
    <Fade direction="bottom">
    <div >
    <div className="relative group ">
    <div className={`content-overlay bg-opacity-50 bg-black absolute h-full w-full top-0 left-0 transition-opacity duration-400 rounded-lg`}></div>
      <img
        src={HireUs}
        alt=""
        className=" w-full h-80 lg:h-[440px] "/>
      <div className="absolute bottom-0 w-full h-full bg-black bg-opacity-50">
      <h1 className='mt-48 text-white text-center font-poppins font-semibold text-2xl lg:text-6xl'>Elevate Your Success
      <p className='text-xl lg:text-3xl pt-2'>
      Discover the Power of Hiring Us!
   </p></h1>
      </div>
    </div>
  <div className="mx-4 ">
  <p className=" text-center font-semibold  font-poppins text-4xl">------</p>
    <h1 className="text-4xl font-semibold font-poppins  text-center" >Get in touch with us</h1>
    <span className=" mt-4 font-normal text-lg text-gray-700 lg:text-justify">
    Elevate your projects to new heights by choosing Shadbox as your dedicated partner. When you hire us, you're not just getting a service; you're gaining a team of passionate experts committed to turning your vision into reality. Our seasoned professionals bring a wealth of experience in  Ruby on Rails, Node.js, React , ensuring top-notch solutions tailored to your unique needs. From concept to execution, we prioritize clear communication, meticulous planning, and agile development methodologies to deliver projects on time and within budget. Collaborate with us, and let's transform your ideas into success stories. Choose Shadbox - where innovation meets excellence.
    </span>
    </div>
    </div>
    <div className="lg:flex py-8 ">
    <div className="max-w-xl mx-4 ">
    <h4 className="text-4xl font-semibold font-poppins leading-10 lg:text-justify"> Why Choose us?.</h4>
    <img src={WhyChoose} alt="" className=" w-80 h-80 mx-auto"/>
    <p className="font-normal text-gray-700 lg:text-justify">Welcome to  <span className="underline decoration-[#2563EB] underline-offset-4">
    Shad<span className="text-[#2563EB]">Box</span>
  </span>, where we are dedicated to providing top-notch Software service to meet your unique needs.
     Here's why you should consider hiring us:</p>
     <h1 className="text-2xl font-semibold font-poppins leading-10 lg:text-justify">Expertise: </h1>
    <p className="font-normal text-gray-700 lg:text-justify"> Our team consists of highly skilled professionals with years of experience in <span className="underline decoration-[#2563EB] underline-offset-4">
    Shad<span className="text-[#2563EB]">Box</span></span>.
      We bring a wealth of knowledge and expertise to every project, ensuring exceptional results. </p>
    </div>
    <HireForm />
    </div>
    </Fade>
    <div className="bg-blue-100 w-full ">
    <hr className="border-blue-200 justify-center mx-auto "></hr>
    <h1 className="font-poppins font-bold items-center justify-center gap-2 m-4 text-2xl  flex"> <VscWorkspaceTrusted/>Trusted By</h1>
    <LogoSlider/>
    </div>
    <div className="mt-2 lg:flex items-center justify-around">
    <Fade direction="left">
    <HiringProcess/>
    </Fade>
    <div>
    <Fade direction="right">
    <img src={CallSupportImg} alt="" className="w-96 h-96 mx-auto rounded-lg"/>
    <CallSupport/>
    </Fade>
    </div>
    </div>
   
    <Fade direction="bottom">
    <HireBanner/>
    </Fade>
   
    </div>
  )
}

export default HireDeveloper