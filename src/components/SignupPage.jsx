// import axios from "axios";
// import React, { useState } from "react";
// import { FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
// import { LuEye, LuEyeClosed } from "react-icons/lu";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/ccpurlogo.png";


// const SignupPage = () => {
//   const navigate = useNavigate(); // for navigation after successful signup

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     program: "",
//     password: "",
//   });
//   const [error, setError] = useState(""); // To show errors if something goes wrong
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "http://192.168.1.11:5000/api/register",
//         formData
//       );

//       if (response.status === 201) {
//         setTimeout(() => {
//           navigate("/login-page");
//         }, 2000);
//       }
//     } catch (error) {
//       if (error.response) {
//         setError(error.response.data.error);
//       } else {
//         setError("Something went wrong. Please try again.");
//       }
//     } finally {
//       setTimeout(() => {
//         setLoading(false); // ✅ Ensure the spinner lasts 4 seconds
//       }, 2000);
//     }
//   };

//   const handlePasswordToggle = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="flex items-center justify-center w-full h-screen bg-gray-100">
//       <div className="flex flex-col bg-white lg:flex lg:flex-row lg:w-2/5 items-center border shadow-lg">
//         <div className="w-full flex justify-center bg-white">
//           <Link to="/" className="">
//                     <img
//                       src={logo}
//                       alt="Churachandpur College Logo"
//                       className="w-28 h-28  md:w-16 md:h-16 lg:w-72 lg:h-72 "
//                     />
//                   </Link>
//         </div>
//       <form
//         className="bg-white shadow-lg p-6 flex flex-col gap-3 w-full rounded-md"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-center text-xl font-semibold text-gray-800">
//           Register
//         </h2>

//         {/* Error Message Display */}
//         {/* {error && (
//           <div className="text-red-500 text-sm text-center">{error}</div>
//         )} */}

//         <div>
//           <label className=" text-sm text-gray-700">Name (In full)</label>
//           <input
//             type="text"
//             name="name"
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             placeholder="Name"
//             required
//             className="w-full border placeholder:text-gray-400 border-gray-400 py-2 px-2 rounded-sm outline-none"
//           />
//         </div>
//         <div>
//           <label className="py-2 text-sm text-gray-700">Email</label>
//           <input
//             type="email"
//             name="email"
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             placeholder="Enter email"
//             required
//             className="w-full border border-gray-400 py-2 px-2 rounded-sm outline-none"
//           />
//         </div>
//         <div>
//           <label className="py-2 text-sm text-gray-700">Program</label>
//           <select
//           name="program"
//             onChange={(e) => setFormData({ ...formData, program: e.target.value})}
//             className="w-full border border-gray-400 placeholder:text-gray-200 py-2 px-2 rounded-sm outline-none"
//           >
//                   <option className="text-gray-400 text-sm" value="">Select Program</option>
//                   <option className="text-gray-500 text-sm" value="Bachelor of Arts (B.A )">Bachelor of Arts (B.A )</option>
//                   <option className="text-gray-500 text-sm" value="Bachelor of Science (B.S.C )">Bachelor of Science (B.S.C )</option>

//           </select>
//         </div>
//         <div>
//           <label className="py-2 text-sm text-gray-700">Password</label>
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"} // Toggle input type
//               onChange={(e) =>
//                 setFormData({ ...formData, password: e.target.value })
//               }
//               placeholder="Password"
//               required
//               className="w-full border border-gray-400 py-2 px-3 rounded-sm outline-none"
//             />
//             {/* Toggle icon visibility */}
//             <div
//               className="absolute top-1/3 right-3 cursor-pointer"
//               onClick={handlePasswordToggle}
//             >
//               {showPassword ? <LuEye /> : <LuEyeClosed />}
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center justify-center">
//           <button
//             disabled={loading}
//             type="submit"
//             className={`px-6 py-2 w-full text-white rounded-sm text-center transition duration-300
//               ${
//                 loading
//                   ? "bg-gray-500 cursor-not-allowed"
//                   : "bg-gray-800 hover:bg-gray-900"
//               }
//             `}
//           >
//             {loading ? (
//               <div className="flex items-center justify-center gap-2">
//                 <FiLoader className="animate-spin w-5 h-5" />{" "}
//                 {/* 🔥 Loader Icon */}
//               </div>
//             ) : (
//               "Register"
//             )}
//           </button>
//         </div>
//         <div className="flex items-center justify-end w-full gap-1 -mt-[12px]">
//           <p className="text-xs">Already have an account?</p>
//           <Link to="/login-page" className="underline text-blue-500 text-xs">
//             Login
//           </Link>
//         </div>
//       </form>
//       </div>
      
//     </div>
//   );
// };

// export default SignupPage;
