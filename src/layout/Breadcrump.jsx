import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);


const hideonRoutes = ['/signup-page',"/admin-login", "/login-page", "/reset-password/:token", "/forgot-password"];

  if (hideonRoutes.includes(location.pathname) || location.pathname.startsWith("/reset-password/")) {
    return null;
  }
  
  if(location.pathname === "/") {
    return null;
  }

  return (
    <nav className="px-3 lg:px-20 text-gray-700">
      <ul className="flex items-center justify-start pt-32 lg:pt-28">
        <li>
          <Link to="/" className="text-gray-800 text-xs lg:text-md font-medium hover:underline">
            Churachandpur College
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={index} className="flex items-center pt-1">
              <span className="mx-2 font-medium text-xs lg:text-md"> &gt; </span>
              <Link to={to} className="text-gray-800 text-xs lg:text-md font-medium hover:underline capitalize">
                {value.replace("-", " ")}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
