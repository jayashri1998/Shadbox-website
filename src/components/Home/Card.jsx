import  { useState } from 'react';
import Approach from "../../assets/Image/Approch.jpg";
import Solution from "../../assets/Image/Solution.jpg";
import Success from "../../assets/Image/Success.jpg";
import Industries from "../../assets/Image/Industries.jpg";
import Fade from 'react-reveal/Fade';


const Card = () => {
  const [approachHovered, setApproachHovered] = useState(false);
  const [solutionHovered, setSolutionHovered] = useState(false);
  const [successHovered, setSuccessHovered] = useState(false);
  const [industriesHovered, setIndustriesHovered] = useState(false);
  const [isReadMore, setIsReadMore]= useState(false);


  const maxlength=150;
  const ReadMore = () =>{
    setIsReadMore(!isReadMore);
  }
  
  const fullDescriptions = {
    approach: " At Shadbox, we have transformed our sales department into solution enablement consultants who are dedicated to achieving your goals and ensuring the successful implementation of solutions. Our collaborative approach involves working closely with you to develop comprehensive designs and project scopes. This meticulous planning helps prevent unexpected challenges related to scope, schedule, and cost, providing a smoother project execution. ",
    solution: "Our software and solutions, crafted with the aim of enhancing productivity and facilitating informed decision-making, stand out as efficient alternatives to Ruby on Rails  and other business software. Developed by experts well-versed in addressing the challenges commonly faced with Ruby on Rails , our products are designed to overcome the shortcomings of traditional systems.",
    success: " Shadbox takes pride in collaborating with globally renowned manufacturing technology companies. Explore our portfolio to discover the impactful projects we've undertaken and read testimonials from our clients about the effectiveness of Shadbox's solutions.",
    industries: " At Shadbox, our industrious work in Software Development is defined by a relentless commitment to innovation, a strong dedication to overcoming challenges, and a collaborative approach that leverages diverse skills for seamless project execution. Pioneering the use of cutting-edge technology, we ensure our solutions are not just current but future-proof. ",
  };
  
    return (
      <div >
     
      <div className='flex flex-col md:flex-row justify-center mx-auto'>
      <Fade left>
        <div className="md:w-1/2 lg:w-1/3 mt-4 mx-2 shadow-lg rounded-lg">
          <div className="content relative w-full md:w-90 mx-auto overflow-hidden ">
          <div
          className="block group"
          onMouseEnter={() => setApproachHovered(true)}
          onMouseLeave={() => setApproachHovered(false)}
        >
              <div className={`content-overlay bg-opacity-50 bg-black absolute h-full w-full top-0 left-0 transition-opacity duration-400 rounded-lg`}></div>
              <div className="relative group ">
                <img
                  src={Approach}
                  alt=""
                  className="w-full rounded-
                    transition-transform duration-300  transform scale-100 group-hover:scale-110"
                />
                <div className="absolute bottom-0 w-full h-full bg-black bg-opacity-50"></div>
              </div>
              <div className={`content-details absolute left-2/4 mx-2 mr-2 w-full top-3/4 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2`}>
              <h3 className="content-title text-white text-left font-bold text-2xl font-poppins">Our Approach</h3>
              {approachHovered && (
                <p className="content-text text-white text-sm justify-normal mr-2 font-poppins">
                  {isReadMore? fullDescriptions.approach : `${fullDescriptions.approach.slice(0, maxlength)}...`}
                  {fullDescriptions.approach.length > maxlength && (
                    <a href='/about/approach'
                className="text-blue-500 hover:underline ml-1"
              >
                {isReadMore ? 'Read Less' : 'Read More'}
              </a>
                  )}
                </p>
              )}
              </div>
            </div>
          </div>
        </div>
        </Fade>
        <Fade right>
        <div className="md:w-1/2 lg:w-1/3 mt-4 mx-2 shadow-lg">
        <div className="content relative w-full md:w-90 mx-auto overflow-hidden">
          <div
            className="block group"
            onMouseEnter={() => setSolutionHovered(true)}
            onMouseLeave={() => setSolutionHovered(false)}
          >
            <div className="content-overlay bg-opacity-50 bg-black absolute h-full w-full top-0 left-0 transition-opacity duration-400 rounded-lg"></div>
            <div className="relative group">
              <img
                src={Solution}
                alt=""
                className="w-full rounded-lg transition-transform duration-300 transform scale-100 group-hover:scale-110"
              />
              <div className="absolute bottom-0 w-full h-full bg-black bg-opacity-50"></div>
            </div>
  
            <div className={`content-details absolute left-2/4 mx-2 mr-2 w-full top-3/4 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2`}>
              <h3 className="content-title text-white text-left font-bold text-2xl font-poppins">Solution</h3>
              {solutionHovered && (
                <p className="content-text text-white text-sm justify-normal mr-2 font-poppins">
                  {isReadMore
                    ? fullDescriptions.solution
                    : `${fullDescriptions.solution.slice(0, maxlength)}...`}
                  {fullDescriptions.solution.length > maxlength && (
                    <a href='/about/solution'
                      className="text-blue-500 hover:underline ml-1"
                    >
                      {isReadMore ? 'Read Less' : 'Read More'}
                    </a>
                  )}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      </Fade>
      </div>
    
      <div className='flex flex-col md:flex-row justify-center mb-4  '>
      <Fade left>
      <div className="md:w-1/2 lg:w-1/3 mt-4 mx-2 shadow-lg">
        <div className="content relative w-full md:w-90 mx-auto overflow-hidden">
          <div
            className="block group"
            onMouseEnter={() => setSuccessHovered(true)}
            onMouseLeave={() => setSuccessHovered(false)}
          >
            <div className={`content-overlay bg-opacity-50 bg-black absolute h-full w-full top-0 left-0 transition-opacity duration-400 rounded-lg`}></div>
            <div className="relative group">
              <img
                src={Success}
                alt=""
                className="w-full rounded-lg transition-transform duration-300 transform scale-100 group-hover:scale-110"
              />
              <div className="absolute bottom-0 w-full h-full bg-black bg-opacity-50"></div>
            </div>

            <div className={`content-details absolute left-2/4 mx-2 mr-2 w-full top-3/4 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2`}>
              <h3 className="content-title text-white text-left font-bold text-2xl font-poppins ">Success stories</h3>
              {successHovered && (
                <p className="content-text text-white text-sm justify-normal mr-2 font-poppins">
                {isReadMore? fullDescriptions.success: `${fullDescriptions.success.slice(0, maxlength)}...` }
                {fullDescriptions.success.length > maxlength &&(
                  <a href='/about/success'
                      className="text-blue-500 hover:underline ml-1"
                    >
                      {isReadMore ? 'Read Less' : 'Read More'}
                    </a>
                )}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      </Fade>
      <Fade right>
      <div className="md:w-1/2 lg:w-1/3 mt-4 mx-2 shadow-lg rounded-lg">
      <div className="content relative w-full md:w-90 mx-auto overflow-hidden ">
        <div
          className="block group"
          onMouseEnter={() => setIndustriesHovered(true)}
          onMouseLeave={() => setIndustriesHovered(false)}
        >
          <div className={`content-overlay bg-opacity-50 bg-black absolute h-full w-full top-0 left-0 transition-opacity duration-400 rounded-lg`}></div>
          <div className="relative group">
            <img
              src={Industries}
              alt=""
              className="w-full rounded-lg transition-transform duration-300 transform scale-100 group-hover:scale-110"
            />
            <div className="absolute bottom-0 w-full h-full bg-black bg-opacity-50"></div>
          </div>

          <div className={`content-details absolute left-2/4 mx-2 mr-2 w-full top-3/4 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2`}>
            <h3 className="content-title text-white text-left font-bold text-2xl font-poppins ">Our Industries</h3>
            {industriesHovered && (
              <p className="content-text text-white text-sm justify-normal mr-2 font-poppins  ">
              {isReadMore? fullDescriptions.industries : `${fullDescriptions.industries.slice(0, maxlength)}...`}
              {fullDescriptions.industries.length > maxlength && (
                <a href='/about/industries'
                className="text-blue-500 hover:underline ml-1"
              >
                {isReadMore ? 'Read Less' : 'Read More'}
              </a>
              )}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
    </Fade>
    </div>
      </div>
    );
  }
  

  

export default Card;
