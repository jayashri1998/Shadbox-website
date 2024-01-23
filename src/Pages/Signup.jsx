import { useState } from 'react';
import LoginImage from '../assets/Image/login.png'; // Replace with the actual path to your login image
import { useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const login_url = import.meta.env.VITE_LOGIN_URL; // Replace with the actual login URL

  const handleLogin = async () => {
    try {
      const response = await axios.post(login_url, formData);
      console.log(response);
      console.log('Login successful:');
      console.log('Response status:', response.status);
      console.log('Response data:', response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='lg:h-screen lg:flex m-16'>
      <img src={LoginImage} alt='' className='w-auto h-auto hidden lg:block mt-32' />
      <section className='w-full'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <a href="#" className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
            <img className='w-8 h-8 mr-2' src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg' alt='logo' />
            Login
          </a>
          <div className='w-full mt-8 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Welcome back!
              </h1>
              <form className='space-y-4 md:space-y-6' onSubmit={handleLogin}>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@company.com'
                    required=''
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required=''
                    onChange={handleChange}
                  />
                </div>
                <button
                  type='submit'
                  className='w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Login
                </button>
                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Don't have an account?{' '}
                  <a href='/signup' className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
                    Sign up here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
