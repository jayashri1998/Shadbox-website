
import GetInTouch from '../OtherFile/GetInTouch';
import ServiceCard from './ServiceCard';
import TechStack from '../OtherFile/TechStack';
import Fade from 'react-reveal';
import Connectuus from '../Home/Connectuus';
import UIDesign from '../../assets/Image/UI.jpg'

const UXDesigner = () => {
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
          UI/UX Designer
          </h1>
          <p className="mt-5 text-lg font-medium text-justify font-roboto text-gray-500">
          UX design is one of the most accessible careers in tech. It’s also a popular choice for career-changers, because it involves tasks and responsibilities that overlap with so many other disciplines like psychology, research, and visual design; it’s one of the few tech careers where being a career-changer is seen as a huge plus as it means you’ll 
          likely be better at empathizing with the end-user, and advocating for their needs. 
          </p>
        </div>
        </Fade>
        <Fade right>
        <div className="mx-3">
          <img
            className=" max-w-sm md:max-w-lg rounded-lg hover:shadow-lg hover:scale-105 transition my-8"
            src={UIDesign}
          />
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

export default UXDesigner;