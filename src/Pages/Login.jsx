import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoggingIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user: {
      email: '',
      password: '',
    },
  });

  const [error, setError] = useState('');

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
      const response = await fetch('/api/v1/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      console.log(result);

      if (result.message === 'Success') {
        console.log('Login Success');
        setFormData({
          user: {
            email: '',
            password: '',
          },
        });
        setError('');
        navigate('/');
      } else {
        setError('Incorrect email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 mb-20 p-8 bg-white rounded shadow-lg">
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700">
          Log In
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default LoggingIn;
