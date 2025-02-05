import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if(location.pathname === "/") {
    return null;
  }

  return (
    <nav className="px-3 lg:px-20 text-gray-700">
      <ul className="flex pt-12">
        <li>
          <Link to="/" className="text-gray-800 text-xs lg:text-md font-medium hover:underline">
            Churachandpur College
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={index} className="flex items-center">
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
