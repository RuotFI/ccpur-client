import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  // const adminID = "admin";
  // const adminPassword = "admin123";

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate credentials

    // Optionally, clear the form fields after submission
    setUsername('');
    setPassword('');
    setEmail('');
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <form
        className="bg-white shadow-lg p-6 flex flex-col gap-6 w-80 rounded-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-xl font-semibold text-gray-800">Register</h2>

        <div>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
            required
            className="w-full border border-gray-500 py-2 px-3 rounded-sm  outline-none"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            placeholder="Enter email"
            required
            className=" w-full border border-gray-500 py-2 px-3 rounded-sm  outline-none"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
            className=" w-full border border-gray-500 py-2 px-3 rounded-sm  outline-none"
          />
        </div>
        <div className="flex items-center justify-center">
          <Link
          to="/admission-form"
            type="submit"
            className="px-6 py-2 bg-gray-800 w-full text-white rounded-sm text-center hover:bg-gray-900 transition duration-300"
          >
            Signup
          </Link>
          
        </div>
        <div className='flex items-center justify-end w- gap-1 mt-[-20px]'>
          <p className='text-xs'>Already have an account?</p>
          <Link to="/login-page" className='underline text-blue-500 text-sm'>Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
