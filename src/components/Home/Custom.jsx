
import { useForm } from 'react-hook-form';
import style from '../HireForm/HireForm.module.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Custom = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleEmailChange = (e) => {
    setValue('email', e.target.value.toLowerCase());
  };

  return (
    <div className="flex bg-gray-50 mt-2">
      <div className="max-w-xl mx-16 mt-6 leading-10">
        <h1 className="text-xl font-roboto leading-10 text-justify">
          Leading Custom
          <p className="font-bold font-roboto text-2xl"> Software Development Firm</p>
        </h1>
        <div className="mt-4">
          <div className="flex items-center gap-3 my-3">
            <span>If you seek tailored software aligned with your business needs, Space-O Technologies stands out as the ideal choice. With a proven track record of catering to over 1200 clients, ranging from Fortune 500 giants to renowned brands like Nike and Glovo (with over 50 million downloads), we are equipped to meet your custom software requirements for scalability or gaining a competitive edge.
              For over a decade, we have been the trusted software partner across various industries, including healthcare, eCommerce, transportation, and education. Our team comprises over 100 skilled software developers well-versed in cloud technologies, microservices architecture, and DevOps, ensuring we can address your advanced technical needs.
              From the initial stages of product conception to the final software deployment, you can depend on us for your custom software development requirements. Let's engage in a discussion to explore and refine your ideas.</span>
          </div>
        </div>
      </div>

   
      <div className="flex items-center justify-center ">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-6 bg-white rounded-lg border-slate-400">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            
            </label>
            <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 w-80" htmlFor="email">
           
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email address',
              },
            })}
            type="text"
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
       
          </label>
          <PhoneInput
            inputProps={{
              name: 'phone',
              required: true,
            }}
            country={'us'}
            inputStyle={{width:'530px',height:'42px',borderColor:'#e5e7eb'}}
            containerStyle={{borderColor:'#e5e7eb'}}
            inputClass={`${style.customPhoneInput}   px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='requirement'>
           
          </label>
          <textarea
            {...register('requirement', { required: 'Requirement description is required' })}
            placeholder="Describe your requirement"
            className={`${style.customScrollbar} w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
          />
          {errors.requirement && <p className="text-red-500 text-xs mt-1">{errors.requirement.message}</p>}
        </div>
  
          <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-600">
          Schedule your consultation now.
          </button>
        </form>
      </div>
    </div>
  );
};

export default Custom;
