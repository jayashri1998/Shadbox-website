import React from 'react'
import GetInTouch from '../OtherFile/GetInTouch';
import LogoSlider from '../Home/LogoSlider';
import ServiceCard from './ServiceCard';
import TechStack from '../OtherFile/TechStack';
import Fade from 'react-awesome-reveal';
import Mobile from '../../assets/Image/Mobile.jpg'

const MobileApp = () => {
  const serviceData = [
    {
      name: "Web Development",
      about:
        "We create dynamic and user-friendly websites tailored to your specific requirements. Whether you need a simple informational site or a complex e-commerce platform, our web development services cover everything from design and development to maintenance and support.",
      imageUrl: "https://img.icons8.com/clouds/100/code.png",
    },
   
    {
      name: "Custom Software Development",
      about:
        " If you have unique business requirements that cannot be fulfilled by off-the-shelf solutions, our custom software development services are here to help. We work closely with you to understand your specific needs and develop tailored software solutions that streamline your operations, increase efficiency, and drive growth.",
      imageUrl: "https://img.icons8.com/clouds/100/programming-flag.png",
    },
  ];
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 mx-11 mt-14">
       <Fade direction="left">
      <div>
          <h1 className="text-4xl underline font-roboto font-bold tracking-wide">
            Mobile App
            <p>Development company</p>
          </h1>
          <p className="mt-5 text-lg font-medium text-justify font-roboto text-gray-500">
          In your quest for a paramount mobile app development firm,
           your search terminates herein. With a track record of conceiving and
           crafting over 4400 bespoke Android and iOS applications, 
           we stand as a beacon of excellence. Curious about the investment your project requires? Secure your no-cost quotation today and embark on the journey to unparalleled mobile app innovation.
          </p>
        </div>
        </Fade>
        <Fade direction="right">
        <div className="mx-3">
          <img
            className=" max-w-sm md:max-w-lg rounded-lg hover:shadow-lg hover:scale-105 transition my-8"
            src={Mobile}
          />
        </div>
        </Fade>
      </div>
      <LogoSlider/>
      <Fade direction="bottom">
      <div className="flex flex-col md:flex-row gap-4 mt-20 mx-4">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.name}
            about={service.about}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
      </Fade>
      <Fade direction="bottom">
      <TechStack/>
      </Fade>
      <Fade direction="bottom">
      <GetInTouch/>
      </Fade>
    </div>
  );
};

export default MobileApp;