// import AboutUsLink from "./AboutUsLink";

const legacyData = [
  {
    year: "1964",
    description:
      "Established: Churachandpur College was founded as a co-educational institution to provide quality education in the Arts and Science streams.",
  },
  {
    year: "1970s",
    description:
      "Growth in Courses: The college began offering a wider range of undergraduate courses, including subjects in the arts and sciences.",
  },
  {
    year: "1980s",
    description:
      "Expansion of Infrastructure: Significant improvements to the campus and facilities were made to cater to an increasing number of students.",
  },
  {
    year: "1990s",
    description:
      "Affiliation to Manipur University: Churachandpur College continued to operate as an affiliated college under the jurisdiction of Manipur University, offering undergraduate programs in various disciplines.",
  },
  {
    year: "2000",
    description:
      "Introduction of Honours Programs: The college introduced honours courses in several subjects to provide specialized education to students.",
  },
  {
    year: "2010",
    description:
      "Autonomy Progress: The college began the process toward becoming an autonomous institution, with plans to enhance academic freedom and curriculum design.",
  },
  {
    year: "2014",
    description:
      "Autonomy Status Granted: Churachandpur College achieved autonomy, allowing greater control over academic programs, exams, and the introduction of new subjects.",
  },
  {
    year: "2016-2019",
    description:
      "Infrastructure Development: Upgraded facilities and new departments were introduced to cater to the needs of students, focusing on both academic and extracurricular growth.",
  },
  {
    year: "2020",
    description:
      "Recognized for Excellence: Churachandpur College was recognized for its academic excellence, contributing to the regional development of higher education in Manipur.",
  },
  {
    year: "2024",
    description:
      "Renewed and Enhanced Autonomy: The college received further recognition and autonomy, empowering it with increased academic freedom and the ability to innovate in its educational offerings and administrative functions.",
  },
];

const OurLegacyPage = () => {
  return (
    <div className="w-full bg-gray-100 pt-6 lg:pt-16 px-3 lg:px-20">
      {/* <AboutUsLink /> */}
      {/* Header */}
      <div className="flex mt-6 flex-col">
        <div>
          <h2 className="text-center  text-3xl lg:text-4xl font-bold text-gray-800">
            <span className="text-sky-600">Our</span> Legacy
          </h2>
        </div>
        <div>
          <h2 className="text-center text-md lg:text-md font-bold text-gray-800 mb-8">
            Churachandpur College - Facts Timeline
          </h2>
        </div>
      </div> 

      {/* Timeline Container */}
      <div className="relative border-l-4 border-sky-600 pl-8 lg:pl-12">
        {legacyData.map((item, index) => (
          <div key={index} className="mb-8 flex items-start">
            {/* Timeline Dot */}
            <div className="absolute left-[-12px] w-5 h-5 bg-sky-600 rounded-full border-4 border-white"></div>

            {/* Timeline Content */}
            <div className="">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
                {item.year}
              </h3>
              <p className="text-gray-700 text-sm lg:text-base mt-2">
                {item.description}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLegacyPage;
