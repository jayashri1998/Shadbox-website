// SigningUp.js
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SigningUp = () => {
    const [formData, setFormData] = useState({
      user: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    });
  const [success, setSuccess] = useState(false);
  const [error] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      user: {
        ...prevFormData.user,
        [name]: value,
      },
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('/api/v1/sign_up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        console.log(result);

        if (result === 'Already registered') {
            alert('E-mail already registered! Please Login to proceed.');
            navigate('/login');
        } else {
            alert('Registered successfully! Please Login to proceed.');
            navigate('/login');
        }
    } catch (error) {
        console.error(error);
    }
};
 
  return (
    <div className="max-w-md mx-auto mt-24 mb-20 p-8 bg-white rounded shadow-lg">
      {success ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Signup Successful!</h2>
          {/* You can redirect the user to another page if needed */}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.user.username}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.user.email}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.user.password}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.user.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700"
          >
            Sign Up
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default SigningUp;