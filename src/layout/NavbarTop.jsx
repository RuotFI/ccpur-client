
import { Link } from "react-router-dom";
import logo from "../assets/ccpurlogo.png";
import NavTopMobileMenu from "./NavTopMobileMenu";

const NavbarTop = () => {
 

  return (    
    <div>
      <NavTopMobileMenu />
      <div className="bg-blue-600 hidden lg:block w-full">
      <div className="w-full">
      <div className="flex items-center h-[100%] text-gray-100 w-full text-sm font-medium md:justify-end lg:justify-end lg:px-6 gap-3 px-3 lg:gap-1">
        {/* Admissions Dropdown */}
        <div className="relative group lg:px-3 border-solid hover:bg-white hover:text-black leading-none align-middle py-2">
          <Link to="/" className="cursor-pointer text-md">Admissions</Link>
          <div className="absolute lg:px-12 bg-slate-100 right-[-420px] border-b-4 top-full py-1 shadow-lg border-red-600 w-screen opacity-0 scale-y-0 transform origin-top transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-y-100 z-10">
            <div className="grid w-full grid-cols-3">
              <div className="">
                <Link to="/" className="flex items-center"> 
                  <img
                    src={logo}
                    alt="Churachandpur College Logo"
                    className="w-36 lg:w-24"
                  />
                </Link>
              </div>
              <div>
                <Link
                  to="/admission-process"
                  className="block px-4 py-2 text-sky-700 hover:underline"
                >
                  Admission Process
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sky-700 hover:underline"
                >
                  Eligibility & Selection Criteria
                </Link>
                <Link
                  to="/fee-structure"
                  className="block px-4 py-2 text-red-600 hover:underline hover:text-red-500"
                >
                  Fee Structure
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sky-700 hover:underline"
                >
                  FAQs
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sky-700 hover:underline"
                >
                  Download Brochures
                </Link>
              </div>
              
            </div>
          </div>
        </div>
        <a href="https://scholarships.gov.in/" target="_blank" className=" border-gray-300 lg:px-2 border-solid hover:bg-white hover:text-black leading-none align-middle py-2">
          Scholarships
        </a>
        <button className=" border-gray-300 lg:px-2 border-solid hover:bg-white hover:text-black leading-none align-middle py-2">
          Alumni
        </button>
        <button className=" border-gray-300 lg:px-2 border-solid hover:bg-white hover:text-black leading-none align-middle py-2">
          Online Payment
        </button>
        <Link to="login-page" className=" border-gray-300 lg:px-2 border-solid hover:bg-white hover:text-black leading-none align-middle py-2">
          Student Login
        </Link>
        {/* <Link to="/existing-students" className=" border-gray-300 lg:px-2 border-solid hover:bg-white hover:text-black leading-none align-middle py-2">
          Existing Students
        </Link> */}
        {/* <Link to="/admin-login">Admin</Link> */}
      </div>
      </div>
      
    </div>
    </div>
    
  );
};

export default NavbarTop;
