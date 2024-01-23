import React from 'react'
import GetInTouch from '../OtherFile/GetInTouch';
import ServiceCard from './ServiceCard';
import TechStack from '../OtherFile/TechStack';
import Fade from 'react-reveal';
import Connectuus from '../Home/Connectuus';
import Hring from '../../assets/Image/Hring.jpg'

const HireSoftware = () => {
  const serviceData = [
    {
        name: "Web Development",
        about:
          "We create dynamic and user-friendly websites tailored to your specific requirements. Whether you need a simple informational site or a complex e-commerce platform, our web development services cover everything from design and development to maintenance and support.",
        imageUrl: "https://img.icons8.com/clouds/100/code.png",
      },
      {
        name: "Mobile Apps Development",
        about:
          "In today's mobile-driven world, having a mobile app for your business is crucial. Our experienced developers specialize in crafting intuitive and feature-rich mobile applications for both Android and iOS platforms. From concept to deployment, we ensure that your app aligns with your business goals and engages your target audience effectively.",
        imageUrl: "https://img.icons8.com/clouds/100/touchscreen-smartphone.png",
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
       <Fade left>
      <div>
          <h1 className="text-4xl underline font-roboto font-bold tracking-wide">
           Hire Software
            <p>Development company</p>
          </h1>
          <p className="mt-5 text-lg font-medium text-justify font-roboto text-gray-500">
          Seeking to engage highly skilled software developers while conserving 70% of
           your budget and time? Reach out to us. With over 13 years in the industry, 
           a team of 200+ in-house experts, and a history of satisfying over 1200 clients,
            Space-O Technologies offers completely adaptable, enterprise-level software 
            solutions tailored to your specific requirements. Let's initiate a conversation about establishing your extended team.
          </p>
        </div>
        </Fade>
        <Fade right>
        <div className="mx-3">
          <img
            className=" max-w-sm md:max-w-lg rounded-lg hover:shadow-lg hover:scale-105 transition my-8"
            src={Hring} alt=''/>
    
        </div>
        </Fade>
      </div>
      <Connectuus/>
      <Fade bottom>
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
      <Fade bottom>
      <TechStack/>
      </Fade>
      <Fade bottom>
      <GetInTouch/>
      </Fade>
    </div>
  );
};

export default HireSoftware;