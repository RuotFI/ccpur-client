// import React from "react";
// import ccpur from "../assets/ccpur.jpg";


const objectives = [
  {
    title: "Provide Quality Higher Education",
    description:
      "Established in 1964, Churachandpur College is dedicated to offering quality education in both Arts and Science streams, fostering intellectual, physical, and spiritual growth in students.",
  },
  {
    title: "Promote Holistic Development",
    description:
      "The College believes in nurturing students to reach their full potential—intellectually, physically, and spiritually—preparing them to contribute positively to society.",
  },
  {
    title: "Foster Peace and Unity",
    description:
      "Situated in a region with diverse ethnic communities, Churachandpur College promotes peaceful co-existence, nurturing a sense of unity and collective identity.",
  },
  {
    title: "Encourage Intellectual and Ethical Growth",
    description:
      "The College aims to illuminate the human mind, broaden perspectives, and cultivate compassion, humility, and ethical values in students.",
  },
  {
    title: "Cultivate a Spirit of Harmony",
    description:
      "In an area historically marked by ethnic divisions, the College encourages mutual respect, understanding, and collaboration across communities.",
  },
  {
    title: "Commitment to Progress and Development",
    description:
      "Education eradicates ignorance and selfishness. The institution guides students to become socially responsible citizens with ethical values.",
  },
  {
    title: "Build a Unified College Community",
    description:
      "The College fosters an environment free from communal strife, focused solely on academic excellence and societal impact.",
  },
  {
    title: "Instill Values of Respect and Tolerance",
    description:
      "The College emphasizes the importance of respect, tolerance, and harmonious living, laying the foundation for a meaningful life for all.",
  },
];

const ObjectivePage = () => {
  return (
    <div className="bg-gray-100 text-gray-900">

      {/* Hero Section */}
      <section className="relative">
       <img
                 className="w-full h-80 object-cover"
                 src="https://www.churachandpurcollege.edu.in/b_file/B03022511919.jpg"
                 alt="Churachandpur College Background"
               />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-6">
          <h2 className="text-3xl font-semibold">Empowering Students for a Better Future</h2>
          <p className="mt-2 text-lg">Education | Peace | Progress</p>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
          Objectives of the College
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-800">{obj.title}</h3>
              <p className="text-gray-700 mt-2">{obj.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-blue-900 text-white text-center py-6 mt-12">
        <p>&copy; {new Date().getFullYear()} Churachandpur College. All Rights Reserved.</p>
      </footer> */}
    </div>
  );
};

export default ObjectivePage;
