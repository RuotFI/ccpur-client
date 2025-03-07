// import axios from "axios";
// import{ useState } from "react";
// import { LuEye, LuEyeClosed } from "react-icons/lu";
// import { useParams, useNavigate } from "react-router-dom";

// const ResetPasswordPage = () => {
//   const { token } = useParams(); // Extract token from URL
//   // console.log("Token from URL:", token);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     newPassword: "",
//     ReEnterPassword: "",
//   });

//   const [showNewPassword, setShowNewPassword] = useState(false); // Boolean to toggle visibility of newPassword
//   const [showReEnterPassword, setShowReEnterPassword] = useState(false); // Boolean to toggle visibility of ReEnterPassword
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");
//     setError("");

//     // Check if passwords match
//     if (formData.newPassword !== formData.ReEnterPassword) {
//       setError("Passwords do not match.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://192.168.1.11:5000/api/resetpassword",
//         {
//           token,
//           newPassword: formData.newPassword, // Send newPassword as it is
//           ReEnterPassword: formData.ReEnterPassword, // Send ReEnterPassword too (for validation)
//         }
//       );

//       setMessage(response.data.message);
//       setTimeout(() => {
//         navigate("/login-page"); // Redirect after success
//       }, 2000);
//     } catch (error) {
//       setError(error.response?.data?.error || "Something went wrong.");
//     }

//     setLoading(false);
//   };

//   const handlePasswordToggle = () => {
//     setShowNewPassword(!showNewPassword);
//   };

//   const handleReEnterPasswordToggle = () => {
//     setShowReEnterPassword(!showReEnterPassword);
//   };

//   return (
//     <div className="flex items-center justify-center w-full h-screen bg-gray-100">
//       <form
//         className="bg-white shadow-lg p-6 flex flex-col gap-6 w-80 rounded-md"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-center text-xl font-semibold text-gray-800">
//           Reset Password
//         </h2>

//         {message && (
//           <div className="text-green-500 text-sm text-center">{message}</div>
//         )}
//         {error && (
//           <div className="text-red-500 text-sm text-center">{error}</div>
//         )}

//         <div>
//           <label className="py-2 text-sm text-gray-700">New Password</label>
//           <div className="relative">
//             <input
//               type={showNewPassword ? "text" : "password"}
//               onChange={(e) =>
//                 setFormData({ ...formData, newPassword: e.target.value })
//               }
//               placeholder="New Password"
//               required
//               className="w-full border border-gray-500 py-2 px-3 rounded-sm outline-none"
//             />
//             {/* Toggle icon visibility */}
//             <div
//               className="absolute top-1/3 right-3 cursor-pointer"
//               onClick={handlePasswordToggle}
//             >
//               {showNewPassword ? <LuEye /> : <LuEyeClosed />}
//             </div>
//           </div>
//         </div>

//         <div>
//           <label className="py-2 text-sm text-gray-700">Re-enter Password</label>
//           <div className="relative">
//             <input
//               type={showReEnterPassword ? "text" : "password"}
//               onChange={(e) =>
//                 setFormData({ ...formData, ReEnterPassword: e.target.value })
//               }
//               placeholder="Re-enter Password"
//               required
//               className="w-full border border-gray-500 py-2 px-3 rounded-sm outline-none"
//             />
//             {/* Toggle icon visibility */}
//             <div
//               className="absolute top-1/3 right-3 cursor-pointer"
//               onClick={handleReEnterPasswordToggle}
//             >
//               {showReEnterPassword ? <LuEye /> : <LuEyeClosed />}
//             </div>
//           </div>
//         </div>

//         <button
//           type="submit"
//           className={`px-6 py-2 bg-gray-800 w-full text-white rounded-sm hover:bg-gray-900 transition duration-300 
//             ${loading ? "bg-gray-500 cursor-not-allowed" : ""}`}
//           disabled={loading}
//         >
//           {loading ? "Updating..." : "Reset Password"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ResetPasswordPage;
