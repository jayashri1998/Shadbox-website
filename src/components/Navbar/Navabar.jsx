import { useState } from 'react';
import Logo from '../../assets/Image/Logo.jpg';
import { IoChevronDown } from 'react-icons/io5';
import { MdMobileFriendly } from 'react-icons/md';
import { IoIosMenu } from 'react-icons/io';
import { GrPersonalComputer } from "react-icons/gr";
import { MdDeveloperMode } from "react-icons/md";
import { SiRubyonrails, SiAltiumdesigner  } from "react-icons/si";
import DropDown  from '../../assets/Image/DropDown.jpg';
import CallSupportDrop from './CallSupportDrop';
import Excellence from '../../assets/Image/Excellence.jpg'
import { AiOutlineSolution } from "react-icons/ai";
import { GrAchievement } from "react-icons/gr";
import { FaIndustry } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [serviceDropdownHovered, setServiceDropdownHovered] = useState(false);
  const [user, setUser] = useState({ email: 'user@example.com' });
  const isMobile = () => {
    return window.innerWidth < 768;
  };
  const adminUserEmail = 'sam@gmail.com';
  const handleSubmenuToggle = (event) => {
    event.preventDefault();
    setServiceDropdownOpen(!serviceDropdownOpen);
  };
  
  const handleAboutmenuToggle = (event) => {
    event.preventDefault();
    setAboutDropdownOpen(!aboutDropdownOpen);
  };
  const handleMouseEnter = () => {
    if (!isMobile()) {
      setServiceDropdownOpen(true);
 
    }
  };
  
  const handleMouseLeave = () => {
    if (!isMobile()) {
        setServiceDropdownOpen(false);
    }
  };
  const handleAboutMouseEnter = () => {
    if (!isMobile()) {
      setAboutDropdownOpen(true);
 
    }
  };
  
  const handleAboutMouseLeave = () => {
    if (!isMobile()) {
      setAboutDropdownOpen(false);
    }
  };
  const handleDropdownEnter = () => {
    setServiceDropdownHovered(true);
  };

  const handleDropdownLeave = () => {
    setServiceDropdownHovered(false);
  };
  const handleLogOut = () =>{
    if (user.email === adminUserEmail) {
    console.log("logout successfully")
    }
  }

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10 mt-1" >
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-2">
          <span className="icon">
            <img src={Logo} alt="Logo" className="w-12 h-10 rounded" />
          </span>
          <a  href="/"><span  className='text-[#46BFE2]'>Shad</span><span className='text-[#4066AD]'>Box</span></a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          <IoIosMenu name={open ? 'close' : 'menu'}></IoIosMenu>
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-10 ' : 'top-[-490px]'
          }`}
        >
          <li className="lg:ml-8 text-xl lg:my-0 my-7 font-semibold relative group">
            <a
              href="/"
              className="text-gray-800 hover:text-blue-400 active:text-blue-600 duration-500"
            >
              <div className="flex items-center justify-between">
                Home
              </div>
            </a>
          </li>
          <li className="lg:ml-8 text-xl lg:my-0 my-7 font-semibold relative group  "
          onMouseEnter={handleMouseEnter }
          onMouseLeave={handleMouseLeave}
          >
          <a
          href="/service"
          className="text-gray-800 hover:text-blue-400 active:text-blue-600  duration-1000 ease-in"
        >
              <div className="flex items-center justify-between">
                Service
                <IoChevronDown className="w-8 h-4 mt-2 " onClick={handleSubmenuToggle} />
              </div>
             
            </a>
           <div
           onMouseEnter={handleDropdownEnter}
           onMouseLeave={handleDropdownLeave}
            className={`absolute ${
            serviceDropdownOpen ? 'block' : 'hidden'
          }  bg-white z-10  lg:ml-8  text-gray-800 lg:w-[90vw] border shadow-lg mt-4  mx-auto border-gray-200 rounded-lg p-2  items-center justify-center w-fit h-fit lg:right-[-475px]  text-xl`} >
            <ul>
               <div className='lg:w-full  lg:flex lg:mt-8 lg:gap-8 mx-8' >
              {/* Submenu items for SERVICE */}
              <div className='text-xl font-medium leading-10 '>
              <span>We are Experts in</span>
              <li>
              <a href="/service/mobileapp" className="hover:text-blue-400 text-lg font-roboto flex gap-2 duration-700 leading-8"> <MdMobileFriendly className='w-6 h-6'/>
                Mobile App Development
              </a>
              </li>
             <li>
              <a href="/service/webdevelopment" className= "hover:text-blue-400  text-lg font-roboto gap-2 flex duration-700 leading-8">
              <GrPersonalComputer className='w-6 h-6'/> Web Development
              </a>
              </li>
              </div>
              <div className='text-xl font-medium lg:mt-8 leading-10'>
                <li>
                <a href="/service/hiresoftware" className="hover:text-blue-400 gap-2  text-lg font-roboto flex duration-700 leading-8">
                <MdDeveloperMode className='w-6 h-6' />   Hire Software Developer
                </a>
                </li>
                <li>
                <a href="/service/integration" className="hover:text-blue-400  text-lg font-roboto gap-2 flex duration-700 leading-8">
               <SiRubyonrails className='w-6 h-6' /> Excellence in Ruby on Rails
                </a>
                </li>
     
            <li>
              <a href="/service/uxdesign" className="hover:text-blue-400  text-lg font-roboto flex gap-2 duration-700">
              <SiAltiumdesigner className='w-6 h-6'/> UI/UX Design 
              </a>
            </li>
            </div>
         
            <img src={DropDown} alt='' className='w-[370px] ml-72 h-56 hidden lg:block rounded-lg   '/>
            </div>
            <div className=' hidden lg:block'>
            <hr className='my-4 border-gray-200 '/>
           <CallSupportDrop/>
           </div>
            </ul>
            </div>
          </li>
          
          <li className="lg:ml-8 text-xl lg:my-0 my-7 font-semibold relative group"
          onMouseEnter={handleAboutMouseEnter }
          onMouseLeave={handleAboutMouseLeave}
          >
            <a
              href="/about"
              className="text-gray-800 hover:text-blue-400 active:text-blue-600 duration-500"
            >
              <div className="flex items-center justify-between">
                About 
                <IoChevronDown className="w-8 h-4 mt-2 " onClick={handleAboutmenuToggle} />
              </div>
            </a>
            <div className={`absolute ${
              aboutDropdownOpen ? 'block' : 'hidden'
            }  bg-white z-10  lg:ml-8  text-gray-800 lg:w-[90vw] border shadow-lg mt-4  mx-auto border-gray-200 rounded-lg p-2  items-center justify-center w-fit h-fit lg:right-[-370px]  text-xl`} >
              <ul>
                 <div className='lg:w-full  lg:flex lg:mt-8 lg:gap-8 mx-8' >
                {/* Submenu items for SERVICE */}
                <div className='text-xl font-medium leading-10 '>
                <span>Industry Excellence: </span>
                <li>
                <a href="/about/approach" className="hover:text-blue-400 text-lg font-roboto flex gap-2 duration-700 leading-10"> <MdMobileFriendly className='w-6 h-6'/>
                Approach 
                </a>
                </li>
               <li>
                <a href="/about/solution" className= "hover:text-blue-400  text-lg font-roboto gap-2 flex duration-700 leading-10">
                <AiOutlineSolution  className='w-6 h-6'/>Solution
                </a>
                </li>
                </div>
                <div className='text-xl font-medium lg:mt-8 leading-10'>
                  <li>
                  <a href="/about/success" className="hover:text-blue-400 gap-2 mt-2  text-lg font-roboto flex duration-700 leading-10">
                  <GrAchievement className='w-6 h-6' />Success Stories
                  </a>
                  </li>
                  <li>
                  <a href="/about/industries" className="hover:text-blue-400  text-lg font-roboto gap-2 flex duration-700 leading-8">
                 <FaIndustry className='w-6 h-6' />Industries
                  </a>
                  </li>
              </div>
           
              <img src={Excellence} alt='' className='w-[400px] ml-96 h-56 hidden lg:block rounded-lg   '/>
              </div>
              <div className=' hidden lg:block'>
              <hr className='my-4 border-gray-200 '/>
             <CallSupportDrop/>
             </div>
              </ul>
              </div>
          </li>
          <li className="lg:ml-8 text-xl lg:my-0 my-7 font-semibold relative group">
            <a
              href="/career"
              className="text-gray-800 hover:text-blue-400 active:text-blue-600 duration-500"
            >
              <div className="flex items-center justify-between">
                Career
              </div>
            </a>
          </li>
          <li className="lg:ml-8 text-xl lg:my-0 my-7 font-semibold relative group">
            <a
              href="/blog"
              className="text-gray-800 hover:text-blue-400 active:text-blue-600 duration-500"
            >
              <div className="flex items-center justify-between">
                Blogs
              </div>
            </a>
          </li>
          <li className="lg:ml-8 text-xl lg:my-0 my-7 font-semibold relative group">
          <a
            href="/contact"
            className="text-gray-800 hover:text-blue-400 active:text-blue-600 duration-500"
          >
            <div className="flex items-center justify-between">
              Contact Us
            </div>
          </a>
        </li>
        {user.email === adminUserEmail && <li onClick={handleLogOut}>Logout</li>}
    
          
          <a href="/hiredeveloper">
            <button className="btn bg-blue-600 text-white lg:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static hover:text-black">
              Hire Us
            </button>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
// style={{right:'-475px'}}