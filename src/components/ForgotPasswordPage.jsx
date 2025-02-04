import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Make sure the CSS is included

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/forgot-password", { email });
      
      // Check if the response is what you expect (you can log it for debugging)
      console.log("Response data:", response.data);
      
      setMessage(response.data.message); // Show success message
       // Trigger success toast
       navigate("/loader");
       toast.success("Password reset link sent!");
    } catch (error) {
      console.error("Error response:", error); // Log error for debugging
      setError(error.response?.data?.error || "Something went wrong.");
      toast.error("Failed to send reset link"); // Trigger error toast
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <form className="bg-white shadow-lg p-6 flex flex-col gap-6 w-80 rounded-md" onSubmit={handleSubmit}>
        <h2 className="text-center text-xl font-semibold text-gray-800">Forgot Password</h2>

        {message && <div className="text-green-500 text-sm text-center">{message}</div>}
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}

        <div>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full border border-gray-500 py-2 px-3 rounded-sm outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={`px-6 py-2 bg-gray-800 w-full text-white rounded-sm hover:bg-gray-900 transition duration-300 
            ${loading ? "bg-gray-500 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>

      {/* Make sure ToastContainer is included here */}
      <ToastContainer /> 
    </div>
  );
};

export default ForgotPasswordPage;
