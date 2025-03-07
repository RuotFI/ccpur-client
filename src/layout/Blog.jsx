
import ccpur_it from "../assets/ccpur_it.jpeg";

const Blog = () => {

  const latestBlogs = [
    {
      title: "Navigating Campus Resources at Churachandpur College: A Step-by-Step Guide",
      image: ccpur_it,
    },
    { title: "What is a Flexible Manufacturing System: Its..." },
    { title: "Celebrating Excellence..." },
    { title: "Hosts India's First International..." },
    { title: "International Conference on Artificial Intelligence, Privacy..." }, 
    { title: "Multidisciplinary Approaches to Sustainable Trade and..." },
 
  ];

  return (
    <div className="p-8">
        {/* Latest Blogs Section */}
        <div>
          <h2 className="text-2xl font-bold text-sky-600 mb-4 uppercase">
            Blogs
          </h2>
          <div className="flex flex-col lg:flex-col gap-4">
            {/* Image on the Left */}
            <img
              src={latestBlogs[0].image}
              alt={latestBlogs[0].title}
              className="w-full lg:w-full h-72 object-cover rounded-md shadow-md"
            />
            {/* Text on the Right */}
            <div className="w-full space-y-2">
              <p className="text-gray-700 text-lg font-semibold">
                {latestBlogs[0].title}
              </p>
              <ul className="space-y-2">
                {latestBlogs.slice(1).map((blog, index) => (
                  <li
                    key={index}
                    className="text-sm text-blue-500 hover:text-blue-700 cursor-pointer transition"
                  >
                    • {blog.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Blog;
