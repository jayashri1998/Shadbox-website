
import GetInTouch from '../OtherFile/GetInTouch'
import AboutShadbox from './AboutShadbox'
import ApproachImg from '../../assets/Image/Approach.jpg'
import { Fade } from 'react-awesome-reveal'

const Approach = () => {
  return (
    
    <div className='mt-16 '>
    <Fade direction="bottom">
   <div className='bg-[#eaf3ff] h-fit  py-8 '>
    <h1 className='font-semibold font-poppins text-4xl mx-2 lg:mx-16' >Solution Facilitation- Our Strategy for 
    <li className='text-3xl font-medium'>Pre-Implementation</li> 
    <li className='text-3xl font-medium'>Implementation</li> <li className='text-3xl font-medium'> Post-Implementation Phases</li></h1>
    </div>
    </Fade>
    <Fade direction= "bottom">
    <h1 className='text-2xl leading-7 font-roboto lg:text-justify text-gray-600 m-4 lg:mx-16'>
       Shadbox consistently focuses on solution enablement throughout the entire process, starting from the planning phase before implementation and extending through post-implementation maintenance and enhancements.</h1>
       </Fade>
       <Fade direction="bottom">
       <div className='relative lg:mx-32 h-fit  flex  '>  
       <div className='relative  '>
       <img src={ApproachImg} alt='' className='w-screen lg:w-[65rem] h-80 opacity-20 ' />
       <div className='reletive hidden lg:block '>
       <div className='absolute top-28 right-80 bg-blue-400 w-32 h-32 rounded-full flex items-center justify-center'>
         <div className='bg-white w-24 h-24 rounded-full flex items-center justify-center '>
           <span className='text-black text-center'>Solution Enablement</span>
         </div>
       </div>
     
       <div className='absolute top-28 right-52 bg-blue-400 w-32 h-32 rounded-full flex items-center justify-center'>
       <div className='bg-white w-24 h-24 rounded-full flex items-center justify-center'>
         <span className='text-black text-center'>Discover</span>
       </div>
     </div>
     <div className='absolute top-28 right-24 bg-blue-400 w-32 h-32 rounded-full flex items-center justify-center'>
     <div className='bg-white w-24 h-24 rounded-full flex items-center justify-center'>
       <span className='text-black text-center'>Risk Minimization</span>
     </div>
   </div>
     </div>  
     </div>
       <h1 className='text-2xl font-roboto absolute inset-0  p-4  lg:w-[600px] font-normal text-gray-700'>
      Services provided prior to the implementation phase
       <p className='text-3xl mt-4  ' >Business Analysis</p>
       <p className='text-3xl'>Requirements Gathering</p>
       <p className='text-3xl'>Scoping and Planning</p>
       <span className=' text-sm tracking-wide hidden lg:block ' style={{ lineHeight: '1', marginTop:'10px' }}>At Shadbox, we prioritize a customer-centric approach to your purchasing process, focusing on your needs rather than being centered around Software development or . Our experienced consultants are dedicated to planning for a successful implementation.
       <p className='mt-4'>
       Explore the potential benefits that Shadbox can bring to your business without any commitment or risk.
       </p></span>
       </h1>
     </div>
     </Fade>
     
     <div className='lg:mx-12 mt-4 gap-4 mx-2'>
     <h1 className='font-semibold text-2xl mx-2'>Solution Enablement: The Role of Sales</h1>
     <div className='lg:grid lg:grid-cols-2 gap-8'>
     <Fade direction="left">
       <div className='font-roboto mt-8 mx-2'>
         <h1 className='text-[#2563EB] text-lg mt-4'>The Traditional Approach</h1>
         <p className='text-lg leading-7 text-justify text-gray-600 my-4'>
         Frequently, the initial stages of implementation are characterized by an abundance of sales efforts, often lacking sufficient focus on ensuring customer success. With a continuous stream of offerings and upselling, the sales process can become an additional challenge for you to manage.
         </p>
       </div>
       </Fade>
       <Fade direction="right">
       <div className='font-roboto mt-8'>
         <h1 className='text-[#2563EB] text-lg mt-4'>The Shadbox Approach</h1>
         <p className='text-lg leading-7 text-justify text-gray-600 my-4'>
          In Shadbox, our approach replaces traditional sales functions with solution enablement consultants who are dedicated to achieving your goals and ensuring the successful delivery of solutions into production. We collaborate closely with you to develop comprehensive designs and scopes of work, ensuring precise planning and minimizing the risks associated with scope, schedule, and cost surprises throughout the project lifecycle. When you choose Shadbox for project delivery, these services are provided to you at no additional cost.
         </p>
       </div>
       </Fade>
     </div>
   </div>
   <h1 className='mx-8 text-gray-200 hidden lg:block'>//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</h1>
   <div className='lg:mx-12 mt-4 gap-4'>
   
   <h1 className='font-semibold text-2xl mx-2'>Discover:The Role of Web Development</h1>
   <div className='lg:grid lg:grid-cols-2 gap-8 mx-2'>
   <Fade  direction="left">
     <div className='font-roboto mt-8 mx-2'>
       <h1 className='text-[#2563EB] text-lg mt-4 '>The Traditional Approach</h1>
       <p className='text-lg leading-7 text-justify text-gray-600 my-4'>
       Several System Integrators (SIs) actively push an abundance of software solutions, aiming to boost sales revenue and foster connections with sales representatives. This frequently leads to customers purchasing software that may be unnecessary or premature. Instead of identifying the root causes of your challenges, they advocate for solutions and dictate what they believe you require.
       </p>
     </div>
     </Fade>
     <Fade direction="right">
     <div className='font-roboto mt-8'>
       <h1 className='text-[#2563EB] text-lg mt-4'>The Shadbox Approach</h1>
       <p className='text-lg leading-7 text-justify text-gray-600 my-4'>
       At Shadbox, we specialize in crafting web applications with a unique approach that prioritizes your specific needs. Our process involves in-depth collaboration to understand the intricacies of your requirements. We believe in addressing only what is necessary, ensuring that the solutions we provide are tailored to enhance the functionality and user experience of your web application. Our approach is driven by a commitment to your project's success, placing emphasis on efficiency and delivering results that truly matter to your business.
       </p>
     </div>
     </Fade>
   </div>
 </div>
 <h1 className='mx-8 text-gray-200 hidden lg:block'>//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</h1>

 <div className='lg:mx-12 mt-4 gap-4 mx-2'>
   <h1 className='font-semibold text-2xl'>Risk Minimization: Dedicated Staff vs Subcontractors</h1>
   <div className='lg:grid lg:grid-cols-2 gap-8 mx-2'>
   <Fade  direction="left">
     <div className='font-roboto mt-8'>
       <h1 className='text-[#2563EB] text-lg mt-4'>The Traditional Approach</h1>
       <p className='text-lg leading-7 text-justify text-gray-600 my-4'>
      
          Does your web development partner plan to assign their in-house team to your project, or will they opt for subcontractors or independent consultants? It's crucial to have clarity on these aspects. Involving external resources introduces unnecessary uncertainties and risks. Some web development firms assess their consultants based on utilization and margins, which may lead to misalignment with your project objectives.
       </p>
     </div>
     </Fade>
     <Fade direction="right">
     <div className='font-roboto mt-8'>
       <h1 className='text-[#2563EB] text-lg mt-4'>The Shadbox Approach</h1>
       <p className='text-lg leading-7 text-justify text-gray-600 my-4'>
       We involve our web development consultants to collaborate directly with you during your procurement phase, offering valuable perspectives on both the solution and the process. Our consultants are solely evaluated based on customer satisfaction and individual skills, encompassing both technical and soft skills. Through our commitment to avoiding subcontractors and independent consultants, we completely eliminate the risk associated with unreliable resources.
       </p>
     </div>
     </Fade>
   </div>
 </div>
<Fade direction="bottom">
<div className='mx-2'>
    <AboutShadbox/>
    </div>
    </Fade>
    <Fade direction="bottom">
    <GetInTouch/>
    </Fade>
    </div>
    
  )
}

export default Approach