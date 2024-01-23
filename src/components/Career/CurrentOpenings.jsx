import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const CurrentOpenings = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate= useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/jobs');

        setData(response?.data);
        console.log(response?.data)
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  const handleApplyNowClick = (id) => {
   
    navigate(`/career/details/${id}`);
  };

    return (
      
      <div className="text-center my-10 font-poppins">
        <h1 className="text-6xl text-red-500 font-poppins font-semibold animate-pulse">
          Current Openings
        </h1>
       
        <div className="flex flex-col md:flex-row flex-wrap  mt-8">
        {data?.map((data, index)=>(
          <div key={index} className=" mx-8 max-w-sm mb-6 text-center border-2 rounded-lg px-5 py-8 hover:shadow-2xl transition-shadow duration-300 font-roboto">
       
            <h1 className="font-medium text-2xl my-3 hover:text-red-500 transition duration-300">
              {data.title} 
            </h1>
            <h2 className="text-start my-2 text-lg font-medium">Key Responsibilties: </h2>
              
            <ul  className="list-disc text-start tracking-wide leading-8 ml-4">
             {data?.key_roles?.map((roles,roleIndex)=>(
              <li key={roleIndex}>{roles}</li>
             ))}
            </ul>
            <div className="text-start my-2">
            {data?.skills.length > 0 && (
              <div>
                <h2 className="font-medium">Skills: {data.skills.join(', ')}</h2>
               
              </div>
            )}
            </div>
            
           <div className="text-start my-2">
              <h2 className="font-medium">Experience: {data.experience} <span className="text-gray-500">(required)</span></h2>
              
              
              
           </div>
           <button type='button' className='border rounded-lg w-full font-medium mt-8 p-3 hover:bg-blue-500 ' onClick={() => handleApplyNowClick(data.id)} >Apply Now</button>
      
             </div>
            
        ))}
</div>
</div>

    );
  };
  
  export default CurrentOpenings;