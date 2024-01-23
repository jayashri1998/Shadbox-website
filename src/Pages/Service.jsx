import GetInTouch from "../components/OtherFile/GetInTouch";
import LogoSlider from "../components/Home/LogoSlider";
import ServiceCard from "../components/Service/ServiceCard";
import TechStack from "../components/OtherFile/TechStack";
import Fade from 'react-reveal';
import WhyShadbox from "../components/OtherFile/WhyShadbox";
import { useEffect,useState } from "react";
import axios from "axios";

const Services = () => {

  const [data, setData] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/services');

        setData(response?.data);
        console.log(response?.data)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 mx-11 mt-16">
       <Fade left>
      <div>
          <h1 className="text-4xl font-roboto font-bold tracking-wide">
            Welcome to{" "}
            <span className="underline decoration-[#2563EB] underline-offset-4">
              Shad<span className="text-[#2563EB]">Box</span>
            </span>
            <br /> service section,
          </h1>
          <p className="mt-5 text-lg font-medium text-justify text-gray-500">
            We specialize in providing a wide range of professional services to
            meet your web and mobile development needs. With our expertise and
            passion for innovation, we strive to deliver top-notch solutions
            that enhance your online presence and drive your business forward.
          </p>
        </div>
        </Fade>
        <Fade right>
        <div className="m-6">
          <img
            className=" max-w-sm md:max-w-lg rounded-lg hover:shadow-lg hover:scale-105 transition"
            src="https://images.pexels.com/photos/5077048/pexels-photo-5077048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        </Fade>
      </div>
      <LogoSlider/>
      <Fade bottom>
      <div className="flex flex-col md:flex-row gap-4 mt-20 mx-4">
        {data && data.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            about={service.body}
            icon_url={service.icon_url}
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
      <Fade bottom>
      <WhyShadbox/>
      </Fade>
    </div>
  );
};

export default Services;