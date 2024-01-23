  import {useState} from 'react';
  import { useForm } from 'react-hook-form';
  import { HiOutlineUser, HiOutlineMail, HiOutlinePhone, HiOutlineChatAlt,HiDocumentText } from 'react-icons/hi';
  import { AiOutlineGithub,AiFillLinkedin } from "react-icons/ai";
  import { MdOutlineAccessTimeFilled } from "react-icons/md";
  import { useParams } from "react-router-dom";

  import 'react-phone-input-2/lib/style.css';
import { data } from 'autoprefixer';

  const CareerForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    
   const {id} = useParams();

    const onSubmit = async (data) => {
      try {
        if (!isValid(data)) {
          setError('Please provide complete and valid data.');
          return;
        }
    
        const response = await fetch(`/api/v1/application_for_jobs`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            name: data.name, 
            email: data.email, 
            phone_number: data.phone_number, 
            experience: data.experience, 
            resume: data.resume, 
            linkedin_url: data.linkedin_url, 
            github_url: data.github_url, 
            cover_letter: data.cover_letter, 
            job_id: id 
          }),
        });
    
        if (!response.ok) {
            throw new Error('Server error');
        }
    
        const result = await response.json();
    
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
    
    const isValid = (data) => {
      if (!data.name || !data.email || !data.phone_number || !data.experience || !data.resume || !data.cover_letter) {
        return false;
      }
      return true;
     };
   
    
    

    const handleKeyPress = (e) => {
      const isValidInput = /^[0-9\b\t]+$/.test(e.key);
      if (!isValidInput) {
        e.preventDefault();
      }
    };


    return (
      <div className="max-w-md mx-auto m-8 p-6 bg-gray-100 rounded-md font-poppins">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Apply for this position</h2>
        <form  onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 align-middle" htmlFor="name">
              <HiOutlineUser className="inline-block mr-2" />Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Name'
              
              {...register('name', { required: 'Name is required' })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
                errors.name ? 'border-red-500' : ''
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text -xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email" >
              <HiOutlineMail className="inline-block mr-2" />Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder='email'
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
                errors.email ? 'border-red-500' : ''
              }`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email address',
                },
              })}
          
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              <HiOutlinePhone className="inline-block mr-2" />Phone Number
            </label>
            <input
              type="string"
              id="phone_number"
              name="phone_number"
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength="12"
              value={data.phone_number}
              placeholder="Enter your phone number"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
                errors.phone ? 'border-red-500' : ''
              }`}
              {...register('phone_number', { required: 'Phone is required' })}
              onKeyPress={handleKeyPress}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          {/* Skills Field */}
          {/* Add your skills dropdown here */}

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

          {/* Resume Upload Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
            <HiDocumentText className="inline-block mr-1 mb-1" /> Resume (PDF)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
                errors.resume ? 'border-red-500' : ''
              }`}
              {...register('resume', { required: 'Resume is required' })}
            />
            {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume.message}</p>}
          </div>

          {/* LinkedIn Profile URL Field */}
          <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedin">
          <AiFillLinkedin className="inline-block mr-2 mb-1" />LinkedIn URL
          </label>
          <input
            type="string"
            id="linkedin_url"
            name="linkedin_url"
            placeholder='your Linkdln Url'
          
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
              errors.linkedin ? 'border-red-500' : ''
            }`}
            {...register('linkedin_url')}
          />
          {errors.linkedin && <p className="text-red-500 text-xs mt-1">{errors.linkedin.message}</p>}
        </div>


          {/* GitHub URL Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="github">
            <AiOutlineGithub className="inline-block mr-2 mb-1"/>
  GitHub URL
            </label>
            <input
              type="string"
              id="github_url"
              name="github_url"
              placeholder='your github URl'
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
                errors.github ? 'border-red-500' : ''
              }`}
              {...register('github_url')}
            />
            {errors.github && <p className="text-red-500 text-xs mt-1">{errors.github.message}</p>}
          </div>

          {/* Cover Letter Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverLetter">
              <HiOutlineChatAlt className="inline-block mr-2" />Cover Letter
            </label>
            <textarea
            type="text"
              id="cover_letter"
              name="cover_letter"
              rows="4"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
                errors.coverLetter ? 'border-red-500' : ''
              }`}
              {...register('cover_letter', { required: 'Cover Letter is required' })}
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
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    );
  };

  export default CareerForm;