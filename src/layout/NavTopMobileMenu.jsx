import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/ccpurlogo.png";
import { FiSearch } from "react-icons/fi";

const NavTopMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchRef = useRef(null);
  const menuRef = useRef(null)

  const handleClickOutside = (event) => {
    if(menuRef.current && !menuRef.current.contains(event.target)){
        setIsOpen(false);
    };
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])

 
  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

  // Close the search input when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white w-full lg:hidden">
      <div className="flex items-center justify-between p-2 text-black">
        <Link className="flex items-center" to="/">
          <img src={logo} alt="Logo" className="w-10" />
          <div>
          <h2 className="font-semibold flex lg:hidden lg:font-bold text-[10px] lg:text-[16px] text-gray-800">
              CHURACHANDPUR COLLEGE <br/> (AUTONOMOUS)
            </h2>
          </div>
        </Link>
        <div className="flex lg:flex items-center">
            <div
              className="flex md:flex lg:flex items-center lg:gap-1"
              ref={searchRef}
            >
              {/* Apply Now Button */}
              {!isSearchVisible && (
                <Link
                  to="/signup-page"
                  className="bg-red-600 hidden lg:flex text-white py-2 px-5 text-sm md:text-md lg:px-4 lg:py-2 lg:text-md rounded-md font-medium hover:bg-red-700"
                >
                  APPLY NOW
                </Link>
              )}

              <div
                className={`relative transition-all duration-300 ease-in-out ${
                  isSearchVisible ? "lg:w-60 pl-3" : "w-0"
                }`}
              >
                {/* Only show the search icon inside the input when it's visible */}
                <input
                  type="search"
                  placeholder="search..."
                  className={`pl-8  py-1 border lg:border-gray-800 border-sky-500 outline-none rounded w-44 lg:w-full ${
                    isSearchVisible ? "block" : "hidden"
                  }`}
                />
                {isSearchVisible && (
                  <FiSearch
                    className="absolute text-gray-700 w-3 h-3 left-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={toggleSearch}
                  />
                )}
              </div>

              <Link
                to="/apply"
                className="bg-red-600 fixed top-[200px] right-[-31px] z-20 -rotate-90 flex lg:hidden text-white py-1.5 px-3 text-xs md:text-md lg:px-4 lg:py-2 lg:text-md font-medium hover:bg-red-700"
              >
                APPLY NOW
              </Link>

              {/* Search Icon outside the input, shown only when input is hidden */}
              {!isSearchVisible && (
                <FiSearch
                  onClick={toggleSearch}
                  className="lg:text-gray-800 text-gray-800 w-6 h-6 cursor-pointer"
                />
              )}
            </div>

            {/* Mobile Menu */}
            
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 z-50 text-gray-800">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
          </div>
       
      </div>
      
      {isOpen && (
        <div ref={menuRef} className="absolute top-0 right-0 w-52 h-screen bg-slate-100 shadow-lg p-4 z-30">
          <ul className="text-sky-700 space-y-3 pt-16">
            <li>
              <Link to="/admissions" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/admission-process" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                Admission Process
              </Link>
            </li>
            <li>
              <Link to="/fee-structure" className="block py-2 border-b text-red-600" onClick={() => setIsOpen(false)}>
                Fee Structure
              </Link>
            </li>
            <li>
              <a href="https://scholarships.gov.in/" target="_blank" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                Scholarships
              </a>
            </li>
            <li>
              <a href="https://scholarships.gov.in/" target="_blank" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                Alumni
              </a>
            </li>
            <li>
              <a href="https://scholarships.gov.in/" target="_blank" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                Online Payment
              </a>
            </li>
            <li>
              <Link to="/login-page" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                Student Login
              </Link>
            </li>
            <li>
              {/* <Link to="/existing-students" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                Existing Students
              </Link> */}
            </li>
            <li>
              <button onClick={() => window.location.href ="http://localhost:9000/register"} className="block py-2 border-b">
                Apply Now
              </button>
            </li>
            {/* <li>
              <Link to="/admin-login" className="block py-2" onClick={() => setIsOpen(false)}>
                Admin
              </Link>
            </li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavTopMobileMenu;
