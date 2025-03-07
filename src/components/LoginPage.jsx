import axios from "axios";
import { useState } from "react";
import { FiLoader } from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast, Bounce } from "react-toastify";

const LoginPage = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors
    try {
      const response = await axios.post(
        "http://192.168.1.10:5000/api/login",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        const { token } = response.data;
        localStorage.setItem("token", token); // Save the token

        // Show success message
        toast.success("Login Successful", {
          position: "bottom-right",
          autoClose: 700,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "light",
          transition: Bounce,
        });

        // Redirect to EMS
        setTimeout(() => {
          window.location.href = "http://192.168.1.11:5176/student-dashboard"; // Replace with your EMS frontend URL
        }, 1500);
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        setError(error.response.data.error || "Invalid email or password.");
      } else {
        setError("Server unreachable. Please try again later.");
      }
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <form
        className="bg-white shadow-lg p-6 flex flex-col gap-6 w-80 rounded-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-xl font-semibold text-gray-800">
          Login
        </h2>

        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}

        <div>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Email"
            required
            className="w-full border border-gray-500 py-2 px-3 rounded-sm outline-none"
          />
        </div>

        <div>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Password"
            required
            className="w-full border border-gray-500 py-2 px-3 rounded-sm outline-none"
          />
          <Link to="/forgot-password" className="text-xs underline text-blue-500 mt-4">
            Forgot password?
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className={`px-6 py-2 w-full text-white rounded-sm transition duration-300 ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gray-800 hover:bg-gray-900"
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <FiLoader className="animate-spin w-5 h-5" />
              </div>
            ) : (
              "Login"
            )}
          </button>
        </div>

        <div className="flex justify-center items-center gap-1">
          <p className="text-xs">Don't have an account?</p>
          <Link to="/signup-page" className="underline text-blue-500 text-xs">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;