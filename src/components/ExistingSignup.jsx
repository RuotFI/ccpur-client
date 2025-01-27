import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  // const adminID = "admin";
  // const adminPassword = "admin123";

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [semester, setSemester] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleRollNumber = (e) => {
    setRollNumber(e.target.value);
  };
  const handleSemester = (e) => {
    setSemester(e.target.value);
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
    setName("");
    setPassword("");
    setEmail("");
    setRollNumber("");
    setPhoneNumber("");
    setSemester("");
  };

  return (
    <div className="flex items-center pt-14 justify-center w-full h-screen bg-gray-100">
      <form
        className="bg-white shadow-lg p-6 flex flex-col gap-6 rounded-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-xl font-semibold text-gray-800">
          Register
        </h2>

        {/*  */}
        <div className="flex w-full items-center gap-6">
          <div className="w-full">
            <label className="text-sm py-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Name"
              required
              className="w-full border border-gray-500 py-2 px-2 rounded-sm  outline-none"
            />
          </div>
          <div className="w-full">
            <label className="text-sm py-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="Enter email"
              required
              className=" w-full border border-gray-500 py-2 px-2 rounded-sm  outline-none"
            />
          </div>
        </div>

        {/*  */}
        <div className="flex items-center gap-6">
          <div className="w-full">
            <label className="text-sm py-2">Phone no.</label>
            <input
              type="number"
              value={phoneNumber}
              onChange={handlePhoneNumber}
              placeholder="123456789"
              required
              className=" w-full border border-gray-500 py-2 px-2 rounded-sm  outline-none"
            />
          </div>
          <div className="w-full">
            <label className="text-sm py-2">Roll no.</label>
            <input
              type="number"
              value={rollNumber}
              onChange={handleRollNumber}
              placeholder="Enter roll number"
              required
              className=" w-full border border-gray-500 py-2 px-2 rounded-sm  outline-none"
            />
          </div>
        </div>

        {/*  */}
        <div className="flex items-center gap-6">
          <div className="w-full">
            <label className="text-sm py-2">Semester</label>
            <input
              type="text"
              value={semester}
              onChange={handleSemester}
              placeholder="Enter semester"
              required
              className=" w-full border border-gray-500 py-2 px-2 rounded-sm  outline-none"
            />
          </div>
          <div className="w-full">
            <label className="text-sm py-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
              className=" w-full border border-gray-500 py-2 px-2 rounded-sm  outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Link
            to="/"
            type="submit"
            className="px-6 py-2 bg-gray-800 w-full text-white rounded-sm text-center hover:bg-gray-900 transition duration-300"
          >
            Signup
          </Link>
        </div>
        <div className="flex items-center justify-end w- gap-1 mt-[-20px]">
          <p className="text-xs">Already have an account?</p>
          <Link to="/login-page" className="underline text-blue-500 text-sm">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
