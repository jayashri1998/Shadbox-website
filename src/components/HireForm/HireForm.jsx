import { useForm } from "react-hook-form";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineChatAlt,
} from "react-icons/hi";
import style from "./HireForm.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState, useEffect } from "react";

const HireForm = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    hire_us:{
    name: '',
    email: '',
    phone_number: '',
    describe_requirement: '',
    }
  });
  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      hire_us: {
        ...prevFormData.hire_us,
        [name]: value,
      },
    }));
  };

  const handlePhoneChange = (value, country, event, formattedValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      hire_us: {
        ...prevFormData.hire_us,
        phone_number: formattedValue,
      },
    }));
  };
  
  const handleDescriptionChange = (event) => {
    const updatedFormData = {
      ...formData,
      hire_us: {
        ...formData.hire_us,
        describe_requirement: event.target.value,
      },
    };
    setFormData(updatedFormData);
  };




  const handleSubmit = async (event, onSubmitCallback) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/v1/hire_us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      console.log(result);

      if (result === true) {
        alert("Please provide complete data.");
      } else {
        alert("Submit successfully!");
        if (onSubmitCallback) {
          onSubmitCallback(formData.user);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e, onSubmit)}
      className="max-w-2xl lg:w-[600px] p-6 lg:ml-32 bg-gray-100 rounded-lg"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          <HiOutlineUser className="inline-block mr-2" /> Name
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          placeholder="Enter your name"
          value={formData.hire_us.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          <HiOutlineMail className="inline-block mr-2" />
          Email
        </label>
        <input
          {...register("email", {
            required: "Email is required",

            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address",
            },
          })}
          type="text"
          onChange={handleChange}
          value={formData.hire_us.email}
          placeholder="Enter your email"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 w-fit"
          htmlFor="phone"
        >
          <HiOutlinePhone className="inline-block mr-2" />
          Phone Number
        </label>
        <PhoneInput
          inputProps={{
            name: "phone",
            required: true,
          }}
          country={"us"}
          containerStyle={{ borderColor: "#e5e7eb" }}
          inputClass={`${style.customPhoneInput}  w-96 h-12  px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
          placeholder="Enter your phone number"
          value={formData.hire_us.phone_number}
          onChange={handlePhoneChange}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="requirement"
        >
          <HiOutlineChatAlt className="inline-block mr-2" />
          Describe Your Requirement
        </label>
        <textarea
          {...register("requirement", {
            required: "Requirement description is required",
          })}
          placeholder="Describe your requirement"
          value={formData.hire_us.describe_requirement}
          onChange={handleDescriptionChange}
          className={`${style.customScrollbar} w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300`}
        />
        {errors.requirement && (
          <p className="text-red-500 text-xs mt-1">
            {errors.requirement.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};
export default HireForm;
