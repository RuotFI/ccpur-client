import { Outlet } from "react-router-dom";


import NavbarTop from "./NavbarTop";
import MainNavBar from "../components/MainNavBar";
import Breadcrumb from "./Breadcrump";

const MainLayout = () => {
  return (
    <div>
      <NavbarTop />
      
      <MainNavBar />
      <div className=""> {/* Add top padding equal to navbar height */}
        <Breadcrumb />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
