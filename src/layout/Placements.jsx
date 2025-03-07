import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const tabs = ["Ccpur College Stars", "Research Work & Patents"];

const placementsData = [
  {
    name: "John",
    course: "B.Tech CSE (2019–2023)",
    ctc: "₹ 1.37 Crore",
    company: "Meta",
    image:
      "https://images.pond5.com/university-student-black-man-and-photo-229704036_iconl_nowm.jpeg",
  },
  {
    name: "Jessica",
    course: "B.Tech CSE (2019–2023)",
    ctc: "₹ 53.5 Lacs",
    company: "Adobe",
    image:
      "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Ranveer",
    course: "B.Tech CSE (2018–2022)",
    ctc: "₹ 53 Lacs",
    company: "Adobe",
    image:
      "https://img.freepik.com/premium-photo/portrait-indian-student-guy-smiling-background-university_409674-1149.jpg",
  },
  {
    name: "Cynthia",
    course: "B.Tech CSE (2019–2023)",
    ctc: "₹ 50 Lacs",
    company: "Layer3",
    image:
      "https://cdn.create.vista.com/api/media/small/663524538/stock-photo-portrait-caucasian-university-student-standing-university-campus",
  },
];

const Placement = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className=" py-8 px-6">
      <div>
        <div></div>
        <div className="flex lg:justify-center overflow-x-auto gap-2 lg:gap-3 mb-6">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-shrink-0 px-4 py-2 text-sm font-semibold ${
                activeTab === index
                  ? "bg-slate-200 text-gray-700 rounded shadow"
                  : "bg-slate-100 text-gray-700 rounded shadow"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 2 },
          }}
          className="max-w-2xl mx-auto"
        >
          {placementsData.map((person, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg border-2 shadow-lg overflow-hidden text-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full lg:h-52 h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{person.name}</h3>
                  <p className="text-gray-500 text-sm">{person.course}</p>
                  <p className="text-blue-600 text-xl font-semibold">
                    {person.ctc}
                  </p>
                  <p className="text-gray-700 text-sm">
                    Placed at {person.company}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Placement;
