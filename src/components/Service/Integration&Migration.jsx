import React from 'react'
import GetInTouch from '../OtherFile/GetInTouch';
import ServiceCard from './ServiceCard';
import TechStack from '../OtherFile/TechStack';
import Fade from 'react-awesome-reveal';
import Connectuus from '../Home/Connectuus';
import IntegrationImg from '../../assets/Image/Integrationss.jpg'

const Integration = () => {
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
       <Fade direction="left">
      <div>
          <h1 className="text-4xl underline font-roboto font-bold tracking-wide">
         Ruby on Rails Excellence
           
          </h1>
          <p className="mt-5 text-lg font-medium text-justify font-roboto text-gray-500">
          Unlocking Innovation: 8 Years of Excellence in Ruby on Rails Development at Shadbox

          With a rich legacy spanning 8 years, Shadbox proudly stands as a leader in Ruby on Rails excellence. Our seasoned team of developers brings unparalleled expertise to every project, leveraging the robust capabilities of Ruby on Rails to craft cutting-edge, scalable, and high-performance web solutions.
          
          At Shadbox, we don't just build websites; we architect digital experiences. Our journey is defined by a relentless pursuit of perfection, a commitment to staying at the forefront of technology trends, and a deep understanding of Ruby's pivotal role in achieving development excellence.
          
          Discover the Shadbox advantage, where years of hands-on experience converge with Ruby on Rails mastery, delivering websites that not only meet but exceed expectations. Elevate your digital presence with Shadbox – your partner in Ruby on Rails excellence.
          </p>
        </div>
        </Fade>
        <Fade direction="right">
        <div className="mx-3">
          <img
            className=" max-w-sm md:max-w-lg rounded-lg hover:shadow-lg hover:scale-105 transition my-8"
            src={IntegrationImg}
          />
        </div>
        </Fade>
      </div>
      <Connectuus/>
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

export default Integration;