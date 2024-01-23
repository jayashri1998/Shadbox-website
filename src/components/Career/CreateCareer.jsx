import {useState,} from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineUser,  HiOutlineChatAlt, } from 'react-icons/hi';
import { MdCastForEducation } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { FaPerson } from "react-icons/fa6";
import { GiTakeMyMoney, GiSkills } from "react-icons/gi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

import 'react-phone-input-2/lib/style.css';

const CreateCareer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [error, setError] = useState("");
 
  const onSubmit = async (formData) => {
    try {
      const response = await fetch(`/api/v1/jobs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          title: formData.title,
          skills: formData.skills ? formData.skills.split(","): [],
          key_roles: formData.key_roles ? formData.key_roles.split(",") : [],
          job_type: formData.job_type,
          education: formData.education,
          salary: formData.salary,
          position: formData.position,
          experience: formData.experience,
          description: formData.description,
        }),
      });
  
      if (!response.ok) {
          throw new Error('Server error');
      }
  
      const result = await response.json();
        console.log(result)
      if (result === true) {
        setError("Please provide complete data.");
      } else {
        setError('');
        alert("Submit successfully!");
        
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while submitting the form.');
    }
  };
  

  return (
    <div className="max-w-md mx-auto m-8 p-6 bg-gray-100 rounded-md font-poppins mt-32">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Create Job </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 align-middle" htmlFor="name">
            <HiOutlineUser className="inline-block mr-2" />Job Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder='Career Title'
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
              errors.name ? 'border-red-500' : ''
            }`}
            {...register('title', { required: 'title is required' })}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 align-middle" htmlFor="name">
          <GiSkills className="inline-block mr-2" />Skills
        </label>
        <input
        type="text"
        id="skills"
        name="skills"
        placeholder='skills'
        
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 `}
        {...register('skills', { required: 'Skills are required' })}
      />
      {errors.skills && <p className="text-red-500 text-xs mt-1">{errors.skills.message}</p>}

      </div>
    

      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 align-middle" htmlFor="name">
        <HiOutlineUser className="inline-block mr-2" />Key Responsibilties
      </label>
      <input
        type="text"
        id="key_roles"
        name="key_roles"
        placeholder='roles'
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
          errors.name ? 'border-red-500' : ''
        }`}
        {...register('key_roles', { required: 'Responsibilties is required' })}
      />
      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
    </div>
    <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2 align-middle" htmlFor="name">
      <SiLevelsdotfyi className="inline-block mr-2" />job_type
    </label>
    <input
      type="text"
      id="job_type"
      name="job_type"
      placeholder='job_type'
      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
        errors.name ? 'border-red-500' : ''
      }`}
      {...register('job_type', { required: 'job_type is required' })}
    />
    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
  </div>

  <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2 align-middle" htmlFor="name">
    <MdCastForEducation className="inline-block mr-2" />Education
  </label>
  <input
    type="text"
    id="education"
    name="education"
    placeholder='education'
    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
      errors.name ? 'border-red-500' : ''
    }`}
    {...register('education', { required: 'education is required' })}
  />
  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
</div>

<div className="mb-4">
<label className="block text-gray-700 text-sm font-bold mb-2 align-middle" htmlFor="name">
  <GiTakeMyMoney className="inline-block mr-2" />Salary
</label>
<input
  type="text"
  id="salary"
  name="salary"
  placeholder='salary'
  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
    errors.name ? 'border-red-500' : ''
  }`}
  {...register('salary', { required: 'salary is required' })}
/>
{errors.salary && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
</div>

<div className="mb-4">
<label className="block text-gray-700 text-sm font-bold mb-2 align-middle" htmlFor="name">
  <FaPerson className="inline-block mr-2" />Position
</label>
<input
  type="text"
  id="position"
  name="position"
  placeholder='position'
  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
    errors.name ? 'border-red-500' : ''
  }`}
  {...register('position', { required: 'position is required' })}
/>
{errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
</div>
        {/* Experience Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">
          <MdOutlineAccessTimeFilled className="inline-block mr-2" />Experience (in years)
          </label>
          <input
            type="number"
            id="experience"
            name="experience"
            placeholder='experience'
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
              errors.experience ? 'border-red-500' : ''
            }`}
            {...register('experience', { required: 'Experience is required' })}
          />
          {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>}
        </div>
        {/* Cover Letter Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverLetter">
            <HiOutlineChatAlt className="inline-block mr-2" />Job description
          </label>
          <textarea
            id="description"
            name="description"
            
            rows="10"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
              errors.coverLetter ? 'border-red-500' : ''
            }`}
            {...register('description', { required: 'description is required' })}

          ></textarea>
          {errors.coverLetter && <p className="text-red-500 text-xs mt-1">{errors.coverLetter.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateCareer;