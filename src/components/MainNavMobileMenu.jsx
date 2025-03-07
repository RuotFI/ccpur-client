import { Link } from "react-router-dom";


const MainNavMobileMenu = () => {
  

  return (
    <div className=" bg-white overflow-x-auto scrollbar-visible lg:hidden w-full border-t border-gray-800">
      <div className="overflow-scroll flex gap-4 p-1 px-4 pt-[12px] items-start w-full justify-start">
        <Link to="/about-us" className="font-semibold flex items-center text-[14px] whitespace-nowrap text-gray-700 hover:underline">
          About Us
        </Link>

        <Link to="/undergraduate" className="font-semibold flex items-center text-[14px] whitespace-nowrap text-gray-700 hover:underline">
          Programs
        </Link>

        <Link className="font-semibold flex items-center text-[14px] whitespace-nowrap text-gray-700 hover:underline">
          Research & Publications
        </Link>

        <Link className="font-semibold flex items-center text-[14px] whitespace-nowrap text-gray-700 hover:underline">
          College News
        </Link>

        <Link className="font-semibold flex items-center text-[14px] whitespace-nowrap text-gray-700 hover:underline">
          Examinations
        </Link>
      </div>
    </div>
  );
};
export default MainNavMobileMenu;
