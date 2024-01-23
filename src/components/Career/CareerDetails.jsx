import CareerForm from "./CareerForm";
import { FaLocationDot } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { FaPerson } from "react-icons/fa6";
import { GiTakeMyMoney,GiSkills } from "react-icons/gi";
import {Fade} from "react-reveal";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const CareerDetails = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [loading, setLoading]= useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/jobs/${id}`);

        setData(response?.data);
        console.log(response?.data)
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); 

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Error loading data...</p>;
  }



    return (
      <div>
      <Fade bottom>
      <h1 className="lg:mx-32 text-2xl font-roboto text-center py-16 mt-8 font-bold ">{data.title}</h1>
      <hr className=" border-gray-500 border-t-4xl w-80 mx-auto" />
      </Fade>
    
      <div className=" mt-16 lg:flex lg:ml-32 "> 
      <Fade left>
        <div className="max-w-xl mx-7 mt-6 ">
         <h4 className="font-semibold text-xl font-roboto text-justify "> About this job:</h4>
         <p className="font-normal font-roboto">{data.description}</p>

         <div className="mt-8 gap-4">
         <h4 className=" font-semibold  font-roboto">Job Type:<span className=" font-normal px-2 text-base">{data.job_type}</span></h4> 
         <h4 className="font-semibold  font-roboto flex"> 
         <MdCastForEducation className="w-4 h-4 mr-2 "/>Education:
         <span className="px-2 font-normal">{data.education}
         </span></h4> 
         <h4 className="font-semibold  font-roboto flex"> 
         <GiSkills className="w-4 h-4 mr-2 "/>Skills:
         <span className="px-2 font-normal">{data.skills}
         </span></h4> 
         <h4 className="font-semibold  font-roboto flex"> 
         <SiLevelsdotfyi className="w-4 h-4 mr-2" />Experience:<span className="px-2 text-base font-normal">{data.experience} </span></h4> 
         <h4 className="font-semibold  font-roboto flex"><FaPerson  className="w-4 h-4 mr-2"/>Position:<span className=" font-normal px-2 ">{data.position}</span></h4> 
         </div> <h4 className="font-semibold  font-roboto flex"><GiTakeMyMoney className="w-4 h-4" />Salary:<span className= " font-normal px-2 ">{data.salary}</span></h4> 
          </div>
          </Fade>
          <Fade right>
        <CareerForm/>
        </Fade>
      </div>
      </div>
    );
  };

  export default CareerDetails;