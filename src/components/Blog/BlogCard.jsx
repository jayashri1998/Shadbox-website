import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BlogCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/blogs');
        if (response?.data && Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error('Invalid API response:', response);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 
  const handleApplyNowClick = (id) => {
    navigate(`/blogsection/${id}`);
  };
 
  return (
    <div className="flex flex-col md:flex-row mx-auto flex-wrap m-8 gap-10  ">
    {console.log(data)}
    
      {loading ? (
        <p>Loading...</p>
      ) : (
        data?.map((blog) => (
          <div
            key={blog.id} 
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl leading-5 transform transition duration-1000 hover:scale-110"
            onClick={() => handleApplyNowClick(blog.id)}
          >
            <img className="rounded-t-lg" src={blog.blog_image_url} alt='' />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 transform transition duration-500 hover:text-[#2563EB]">
                  {blog.title}
                </h5>
              </a>
              <img className="rounded-t-lg" src={blog.image} alt='' />
             
              <div className="flex items-center gap-5 my-4">
                <div className="flex items-center gap-2">
                
                  <img src={blog.author_image} className="w-8 h-8 rounded-full" alt='' />
                  <h4 className="font-roboto text-gray-500 ">{blog.author_name}</h4>
                </div>
                <h4 className="font-roboto text-gray-500 ">
                {new Date(blog.created_at).toLocaleDateString()}
              </h4>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogCard;
