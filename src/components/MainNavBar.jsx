import { useEffect, useRef, useState } from "react";
import logo from "../assets/ccpurlogo.png";
import { Link } from "react-router-dom";
import {
  
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import MainNavMobileMenu from "./MainNavMobileMenu";

const MainNavBar = () => {
  
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchRef = useRef(null);

 
  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

 
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

  const navButton = [
    {
      id: 1,
      title: "About Us",
      link: "/about-us",
      submenu: [
        { title: "Our Legacy", link: "/our-legacy" },
        { title: "Administrative Bodies", link: "/administrative-bodies" },
        { title: "Acedemic Advisory Board", link: "/advisory-board" },
        { title: "Planning and Development Board", link: "/development-board" },
        { title: "Committee", link: "/committee" },
        { title: "Student Union", link: "/student-union" },
      ],
    },
    // Other nav buttons...
    {
      id: 2,
      title: "Programs",
      link: "/undergraduate",
      submenu: [
        { title: "Undergraduate", link: "/undergraduate" },
        { title: "Postgraduate", link: "/undergraduate" },
        { title: "Online Courses", link: "/undergraduate" },
        
      ],
    },
    {
      id: 3,
      title: "Research & Publications",
      link: "/research-publication",
      submenu: [
        { title: "Projects", link: "/research-publication" },
        { title: "Publications", link: "/research-publication" },
        { title: "Collaborations", link: "/research-publication" },
        
      ],
    },
    {
      id: 4,
      title: "College News",
      link: "/college-news",
      submenu: [
        { title: "Department News", link: "/department-news" },
        { title: "Announcement", link: "/announcement" },
        // { title: "Overall", link: "/overall" },
      ],
    },
    {
      id: 5,
      title: "Examination",
      link: "/examination",
      submenu: [
        { title: "Examination Schedules", link: "/examination-schedules" },
        { title: "Examination Result", link: "/examination-result" },
        { title: "Examination News", link: "/examination-news" },
      ],
    },
  ];

  return (
    <div className="w-full bg-white border-b shadow-md">
      <div className="hidden lg:flex justify-between items-center px-2 lg:px-6">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Churachandpur College Logo"
            className="w-10 md:w-16 md:h-16 lg:w-16 "
          />
          <div>
            <h2 className="font-semibold hidden lg:flex lg:font-bold text-xs lg:text-[16px] text-gray-800">
              CHURACHANDPUR COLLEGE (AUTONOMOUS)
            </h2>
            
          </div>
        </Link>

        <div className="flex items-center gap-2 h-16">
          {navButton.map((button) => (
            <div
              key={button.id}
              className="relative hidden group h-full hover:text-gray-100 active:text-white hover:bg-sky-700 last:border-none  hover:rounded-t-lg lg:flex items-center"
            >
              <Link to={button.link} className="text-gray-900 active:hover:text-white px-2 border-gray-700 font-semibold hover:text-gray-100">
                {button.title}
              </Link>

              {button.submenu && (
                <div className="fixed border-b-4 z-50 border-red-600 top-[94px] left-0 w-max lg:w-full bg-sky-700 shadow-lg opacity-0 scale-y-0 transform origin-top transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-y-100">
                <div className="grid grid-cols-3 p-4">
                  {button.submenu.map((sub, index) => (
                    <Link
                      to={sub.link}
                      key={index}
                      className="block px-4 hover:underline py-2 text-sm text-gray-100"
                    >
                      {sub.title}
                    </Link>
                  ))}  
                </div>
              </div>
              
              )}
            </div>
          ))}

          {/* Search and Mobile menu */}
          <div className="flex lg:flex items-center gap-3">
            <div
              className="flex md:flex lg:flex items-center lg:gap-1"
              ref={searchRef}
            >
              {/* Apply Now Button */}
              {!isSearchVisible && (
                <button
                  onClick={() => window.location.href ="http://localhost:9000/register"}
                  className="bg-red-600 hidden lg:flex text-white py-2 px-5 text-sm md:text-md lg:px-4 lg:py-2 lg:text-md rounded-md font-medium hover:bg-red-700"
                >
                  APPLY NOW
                </button>
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
                  className={`pl-8  py-1 border lg:border-gray-800 border-sky-700 outline-none rounded w-44 lg:w-full ${
                    isSearchVisible ? "block" : "hidden"
                  }`}
                />
                {isSearchVisible && (
                  <FiSearch
                    className="absolute text-gray-700 w-4 h-4 left-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={toggleSearch}
                  />
                )}
              </div>

              <button
                onClick={() => window.location.href ="http://localhost:9000/register"}
                className="bg-red-600 fixed top-[200px] right-[-31px] z-20 -rotate-90 flex lg:hidden text-white py-1.5 px-3 text-xs md:text-md lg:px-4 lg:py-2 lg:text-md font-medium hover:bg-red-700"
              >
                APPLY NOW
              </button>

              {/* Search Icon outside the input, shown only when input is hidden */}
              {!isSearchVisible && (
                <FiSearch
                  onClick={toggleSearch}
                  className="lg:text-gray-800 text-sky-500 w-7 h-7 cursor-pointer"
                />
              )}
            </div>      
          </div>
          
        </div>
        
      </div>
      <MainNavMobileMenu />
    </div>
  );
};

export default MainNavBar;
