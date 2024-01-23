import { useEffect, useState } from "react";
import BlogCard from "../components/Blog/BlogCard";
import axios from "axios";
import Blogs from ".././assets/Image/Blog.jpg";

const Blog = () => {

  return (
    <>
    <div className="">
    <div className="relative group ">
    <div className={`content-overlay bg-opacity-50 bg-black absolute h-full w-full top-0 left-0 transition-opacity duration-400 rounded-lg`}></div>
      <img
        src={Blogs}
        alt=""
        className=" w-full h-80 lg:h-[440px] "/>
      <div className="absolute bottom-0 w-full h-full bg-black bg-opacity-50">
      <h1 className='mt-48 text-white text-center font-poppins font-semibold  text-2xl lg:text-6xl'>Exploring Perspectives
      <p className=' text-lg lg:text-3xl pt-2'>
      Join the Conversation on Our Blog!
   </p></h1>
      </div>
    </div>
   <div className="lg:text-justify font-normal mx-4 ">
   <h1 className="text-center  font-bold text-4xl">
   <p>------</p>
   Our Blogs </h1>
   <span className="font-normal text-xl text-gray-700 lg:text-justify my-4 " > At Shadbox, we consider blog titles as the keys to our insightful content. Each title is chosen carefully to give you a glimpse of the valuable knowledge and expertise shared in our blogs. Whether it's through interesting questions or clear statements, our blog titles are designed to connect with our readers and offer solutions. </span>
    
   </div>
   </div>
    <div className="flex flex-col md:flex-row mx-auto flex-wrap m-8">
   
   <BlogCard/>
   </div>
   </>
  );
};

export default Blog;
