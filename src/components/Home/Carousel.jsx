
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselImg from "../../assets/Image/CarouselImg.jpg"
import CarouselImg2 from "../../assets/Image/WebDevelopment.png"
import Fade from 'react-reveal/Fade';
import Integration from "../../assets/Image/Integration.jpg"
import HireDe from  "../../assets/Image/HireSoft.jpg"
import UIUx from "../../assets/Image/UIUx.jpg"
import { useState } from "react";

const carouselData = [
   

  {
    id: 1,
    image: CarouselImg,
    title: "Mobile App Development",
    description: "Whether you want to build an app for Android, iOS, or cross-platform, we ensure your app is user-friendly, and provides value to its users.",
    link: '/service/mobileapp',
  },
  {
    id: 2,
    image: CarouselImg2,
    title: "Web Development",
    description: "From dynamic eCommerce platforms to informative web portals, we specialize in crafting responsive and conversion-focused online presences.",
    link: '/service/webdevelopment',
  },
  {
    id: 3,
    image: Integration,
    title: "Software Integration",
    description: "Ensure effective communication among all your tools and systems, eliminating redundancies and resolving data discrepancies.",
    link: '/service/integration',
  },
  {
    id: 4,
    image: HireDe,
    title: "Hire Soft Development",
    description: "Enlist our top-tier talent on a flexible basis if you have a project in mind but lack the necessary in-house tech expertise.",
    link: '/service/hiresoftware',
  },
  {
    id: 5,
    image: CarouselImg2,
    title: "Web Development",
    description: "From dynamic eCommerce platforms to informative web portals, we specialize in crafting responsive and conversion-focused online presences.",
    link: '/service/webdevelopment',
  },
  {
    id: 6,
    image: UIUx,
    title: "UI/UX Design ",
    description: "UX design, being versatile and multidisciplinary, requires UX designers to possess a diverse array of skills that extend beyond design boundaries.",
    link: '/service/uxdesign',
  },
];
const DemoCarousel = () => {
  
  return (
   
    <div className="text-center mt-16 font-poppins">
    <Fade bottom>
    <hr className="mt-8 border-blue-500 border-t-2xl w-80 mx-auto" />
    <h1 className="text-4xl font-semibold font-poppins text-black mt-8">
    <p>------</p>
     Our Service
    </h1>
    <p className="text-justify mx-4 md:mx-28 lg:mx-32 mt-4">
    At Shadbox Infosystem, we take pride in being the best software 
    development company in India, where we specialize in delivering exceptional 
    solutions to meet your unique requirements. Our commitment to excellence extends 
    from big to small projects, ensuring that our solutions consistently deliver the desired results. 
    Our comprehensive services encompass
    </p>
    </Fade>

   
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={1000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >

        {carouselData.map((item) => (
          <div key={item.id} className="w-80 h-fit bg-white shadow-2xl rounded-2xl my-8 mx-8  transition-transform duration-300 transform hover:scale-110
          hover:shadow-[0_0_1px_#DBEAFE,inset_0_0_1px_#DBEAFE,0_0_2px_#DBEAFE,0_0_10px_#DBEAFE,0_0_15px_#DBEAFE]">
            <img src={item.image} className="w-56 h-56 items-center justify-center mx-auto my-2 " alt={item.title} />
            <div className="mt-2 ml-2 text-center mb-8 col">
              <span className="text-2xl font-bold">{item.title}</span>
              <p className="text-justify mx-2">{item.description.length > 50
                ? `${item.description.slice(0, 50)}...`
                : item.description
              }</p>
              <div className="text-blue-500 justify-center underline flex">
                <a className="flex text-center" onClick={() => window.location.href = item.link}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
        </div>
  );
}

export default DemoCarousel;
