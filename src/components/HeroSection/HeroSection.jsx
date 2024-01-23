import TypewriterComponent from "typewriter-effect"
import Software from "../../assets/Image/Software.png"
import './HeroSection.css'
import Graphic from '../../assets/Image/graphic.png'
import AppDevelopment from '../../assets/Image/app-development.png';
import WebDevelopment from '../../assets/Image/WebDevelopment.png';
import Fade from 'react-awesome-reveal';
const HeroSection = () => {

  return (

      <div className="mt-10 md:mt-12 lg:mt-16 mx-auto py-12 w-[310px] md:w-full md:h-[600px]">
        <h1 className=" text-2xl md:text-4xl lg:text-6xl font-poppins font-semibold tracking-wide text-center ">Shad<span className="text-[#2563EB]">Box</span></h1>
        <h3 className=" text-xl md:text-2xl lg:text-4xl font-poppins font-semibold my-2 text-center">Infosystem pvt ltd</h3>
        <div className=" text-xl md:text-2xl lg:text-4xl leading-10 text-center underline decoration-[#2563EB] decoration-4 underline-offset-[10px] ">
          <TypewriterComponent
            options={{
              strings: ["Web Development.", "Native Development.", "Digital Solutions."],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
        <Fade direction="bottom">
        <div className="flex flex-col md:flex-row mt-32 md:mx-16 gap-4 mx-auto" >
        <div className="mt-6 mx-auto py-6 w-[300px] md:w-[300px] text-center md:h-[200px] border border-solid border-blue-400 bg-blue-50 rounded-lg hover:bg-blue-400 transition-transform duration-300 transform hover:scale-110
       hover:shadow-[0_0_1px_#DBEAFE,inset_0_0_1px_#DBEAFE,0_0_2px_#DBEAFE,0_0_10px_#DBEAFE,0_0_15px_#DBEAFE] ">
           <img src={Software} alt="Software" width={"100"} height={"50"} className="mx-auto" />
           <p className="text-sm font-poppins mx-auto mt-2 md:mt-4">Software Development</p>
</div>

          <div className="mt-6 mx-auto py-6 w-[300px] md:w-[300px] text-center border bg-blue-50 rounded-lg  border-blue-400
        hover:shadow-[0_0_1px_#DBEAFE,inset_0_0_1px_#DBEAFE,0_0_2px_#DBEAFE,0_0_10px_#DBEAFE,0_0_15px_#DBEAFE] hover:bg-blue-400 transition-transform duration-300 transform hover:scale-110">
            <img src={WebDevelopment} alt="Software" width={"100"} height={"50"} className=" mx-auto" />
            <p className="text-sm font-poppins mx-auto mt-2 md:mt-4">Web Development</p>
          </div>
          <div className="mt-6 mx-auto py-6 w-[300px] md:w-[300px] text-center border bg-blue-50
        hover:shadow-[0_0_1px_#DBEAFE,inset_0_0_1px_#DBEAFE,0_0_2px_#DBEAFE,0_0_10px_#DBEAFE,0_0_15px_#DBEAFE] rounded-lg hover:bg-blue-400 transition-transform duration-300 transform hover:scale-110  border-blue-400 ">
            <img src={AppDevelopment} alt="Software"width={"100"} height={"50"} className=" mx-auto" />
            <p className="text-sm font-poppins mx-auto mt-2 md:mt-4">App Development</p>
          </div>
          <div className="mt-6 mx-auto py-6 w-[301px] md:w-[ 250px] text-center border
        hover:shadow-[0_0_1px_#DBEAFE,inset_0_0_1px_#DBEAFE,0_0_2px_#DBEAFE,0_0_10px_#DBEAFE,0_0_15px_#DBEAFE] bg-blue-50 rounded-lg hover:bg-blue-400 transition-transform duration-300 transform hover:scale-110  border-blue-400">
            <img src={Graphic} alt="Software" width={"100"} height={"50"} className=" mx-auto" />
            <p className="text-sm font-poppins mx-auto mt-2 md:mt-4">Graphic Design</p>
          </div>
        </div>
        </Fade>
      </div>



  )
}

export default HeroSection