import { Outlet } from "react-router-dom";

import Breadcrumb from "./Breadcrump";

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden">
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
