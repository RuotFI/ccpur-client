import LegacyTimeline from "./LegacyTimeline";
import { Link } from "react-router-dom";
import ccpur from "../assets/ccpur.jpg";
import Footer2 from "./Footer2";
import BoardMemberTable from "./BoardMemberTable";
import ObjectivePage from "./ObjectivePage";
import AboutUsLink from "./AboutUsLink";



const AboutUsPage = () => {
  return (
    <div className="w-full bg-slate-100 pt-6 lg:pt-16">
      <AboutUsLink />
      <div className="w-full px-3 lg:px-20">
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-start pb-3 lg:pb-6">
          <span className="text-sky-500 font-medium">About</span>
          <br /> Churachandpur College
        </h2>
        <p className="text-justify font-normal text-[16px]">
          Churachandpur College (Autonomous) has been granted autonomous status
          by the University Grants Commission (UGC) under the UGC (Conferment of
          Autonomous Status upon Colleges and Measures for Maintenance of
          Standards in Autonomous Colleges) Regulations, 2023 (vide No. F.
          2-10/2023 (AC Policy), dated 19th January 2024).This recognition marks
          a significant milestone in the college’s journey, reflecting its
          ongoing commitment to academic excellence, innovation, and holistic
          development. Founded on 30th November 1964 by a group of visionary
          intellectuals, including S. Pauneikhai Vaiphei and Dr. T.S. Gangte,
          Churachandpur College has long embraced the motto “Clarior-E-Tenebris”
          (from darkness to light).For over six decades, the college has
          dedicated itself to providing quality education and fostering the
          all-around development of its students. Initially affiliated with
          Guwahati University, the college became a full-fledged Government
          College in 1977. Following the establishment of Manipur University in
          1981, Churachandpur College shifted its affiliation, further
          solidifying its role as a key institution in the region's educational
          landscape. With its newly acquired status, the college is now poised
          to innovate its curriculum, enhance research opportunities, and
          strengthen industry collaborations, ensuring students are both life-
          and career-ready. As one of the three pioneering autonomous colleges
          in the hill districts of Manipur, Churachandpur College is poised to
          play a pivotal role in shaping the educational landscape of the
          region, setting new standards for academic excellence and innovation.
          The college thrives as a hub of academic rigor, offering a diverse
          array of programs with a strong emphasis on practical learning,
          interdisciplinary approaches, and global perspectives. Through its
          commitment to inclusivity, sustainability, and social responsibility,
          Churachandpur College equips students with the skills, knowledge, and
          values to excel in a rapidly changing world, while making a meaningful
          contribution to both the community and society at large
        </p>
      </div>

      <div className="mt-14 px-3 lg:px-20">
        <h2 className="font-semibold w-full text-2xl lg:text-3xl text-center">
          College Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid md:grid-rows-4 md:grid-cols-3 md:gap-2 lg:grid w-full lg:grid-rows-3 gap-3 lg:grid-cols-4 pt-8">
          <div className="border-2 border-red-600 border-dotted py-7 flex justify-center items-center text-center">
            <h2 className="text-center w-full text-md">
              <span className="text-5xl text-red-600 font-extrabold">
                1500+
              </span>
              <br />
              STUDENTS
            </h2>
          </div>
          <div className="border-2 border-red-600 border-dotted py-7 flex justify-center items-center text-center">
            <h2 className="text-center w-full text-md">
              <span className="text-5xl text-red-600 font-extrabold">50+ </span>
              <br />
              FACULTY MEMBERS
            </h2>
          </div>
          <div className="border-2 border-red-600 border-dotted py-7 flex justify-center items-center text-center">
            <h2 className="text-center w-full text-md">
              <span className="text-5xl text-red-600 font-extrabold">11+ </span>
              <br />
              DEPARTMENTS IN ARTS & SCIENCE
            </h2>
          </div>
          <div className="border-2 border-red-600 border-dotted py-7 flex justify-center items-center text-center">
            <h2 className="text-center w-full text-md">
              <span className="text-5xl text-red-600 font-extrabold">10+ </span>
              <br />
              STUDENT LED CLUBS & SOCIETIES
            </h2>
          </div>

          <div className="border-2 border-red-600 border-dotted py-7 flex justify-center items-center text-center">
            <h2 className="text-center w-full text-md">
              <span className="text-5xl text-red-600 font-extrabold">20+</span>
              <br />
              SPORTS FACILITIES
            </h2>
          </div>
          <div className="border-2 border-red-600 border-dotted py-7 flex justify-center items-center text-center">
            <h2 className="text-center w-full text-md">
              <span className="text-5xl text-red-600 font-extrabold">
                8560+{" "}
              </span>
              <br />
              BOOKS IN THE LIBRARY
            </h2>
          </div>
          <div className="border-2 border-red-600 border-dotted py-7 flex justify-center items-center text-center">
            <h2 className="text-center w-full text-md">
              <span className="text-5xl text-red-600 font-extrabold">1 </span>
              <br />
              IGNOU STUDY CENTRE
            </h2>
          </div>
          <div className="border-2 border-red-600 border-dotted py-7 flex justify-center items-center text-center">
            <h2 className="text-center w-full text-md">
              <span className="text-5xl text-red-600 font-extrabold">5+ </span>
              <br />
              SPECIAL COACHING CLASSES FOR WEAKER SECTIONS
            </h2>
          </div> 
        </div>

        <div className="mt-12 lg:-mt-12">
          <div>
            <h2 className="font-semibold text-2xl lg:text-3xl text-center">VISION</h2>
            <p className="text-justify lg:text-lg pt-3">
              Churachandpur College aspires to inspire excellence by offering a
              holistic education that nurtures the mind, body, and spirit,
              empowering students to reach their full potential and open doors
              to diverse opportunities.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="font-semibold text-2xl lg:text-3xl text-center">MISSION</h2>
            <li className="text-sm lg:text-lg text-justify py-2 marker:text-red-500">
              Cultivating a love for learning and fostering a positive attitude,
              which contributes to sustainable growth through rigorous
              intellectual and academic engagement.
            </li>
            <li className="text-sm lg:text-lg text-justify py-2 marker:text-red-500">
              Harnessing the power of new technologies to expand the
              intellectual resources of students and enhance their educational
              experience.
            </li>
            <li className="text-sm lg:text-lg text-justify py-2 marker:text-red-500">
              Encouraging academic exchange programs to broaden knowledge and
              elevate teaching quality.
            </li>
            <li className="text-sm lg:text-lg text-justify py-2 marker:text-red-500">
            Promoting a multidisciplinary learning environment, continuously
              improving the learning process, and fostering research through
              institutional upgrades and infrastructure development.
            </li>
            <li className="text-sm lg:text-lg text-justify py-2 marker:text-red-500">
              Preparing students to lead fulfilling lives, both professionally
              and personally, underpinned by empathy, love, and ethical
              responsibility.
            </li>
            <li className="text-sm lg:text-lg text-justify py-2 marker:text-red-500">
              Empowering students to develop personal resilience and strength
              that will guide them throughout their lives.
            </li>
            <li className="text-sm lg:text-lg text-justify py-2 marker:text-red-500">
              Equipping graduates to thrive in diverse cultural settings and a
              globally interconnected world.
            </li>
          </div>
        </div>
        <LegacyTimeline />
        {/* <OurLeadership /> */}
        <Link
          to="/our-leadership"
          className="text-center lg:py-4 font-bold text-3xl"
        >
          <h2 className="pt-12">Our Leadership</h2>
        </Link>
        <div className="w-full flex flex-col lg:flex lg:flex-row items-center justify-center gap-12 py-8">
          <div className="flex flex-col hover:translate-x-1 justify-center items-center lg:w-72 lg:max-h-96 shadow-lg">
            <div className="py-4">
              <img
                className="w-full h-[100%] object-cover"
                src="https://www.churachandpurcollege.edu.in/prin.jpg"
              />
            </div>
            <div className="text-start px-4 pt-2 w-full">
              <h2 className="font-bold text-lg lg:text-xl">Dr. Siamkhum Guite</h2>
              <h2 className="text-sm">PRINCIPAL, CHURACHANDPUR COLLEGE</h2>
            </div>
            <Link to="/our-leadership" className="underline px-4 text-start w-full text-sm text-blue-600 py-4"><h2 className="">See more »</h2></Link>
          </div>

          <div className="flex flex-col hover:translate-x-1 justify-center items-center lg:w-72 lg:max-h-96 shadow-lg">
            <div className="py-4 w-full">
              <img
                className="w-full max-h-[170px] object-cover"
                src="https://www.churachandpurcollege.edu.in/Photos/P14082004625.jpeg"
              />
            </div>
            <div className="text-start px-8 lg:px-4 pt-2 w-full">
              <h2 className="font-bold text-lg lg:text-xl">Caroline Zothangmawi</h2>
              <h2 className="text-sm">VICE-PRINCIPAL, CHURACHANDPUR COLLEGE</h2>
            </div>
            <Link to="/our-leadership" className="underline px-4 text-start w-full text-sm text-blue-600 py-4"><h2 className="">See more »</h2></Link>
          </div>

          <div className="flex flex-col hover:translate-x-1 justify-center items-center lg:w-72 shadow-lg">
            <div className="py-4 w-full ">
              <img
                className="w-full h-[100%] object-cover"
                src="https://www.churachandpurcollege.edu.in/iqac%20coordinator.jpg"
              />
            </div>
            <div className="text-start px-4 pt-2 w-full">
              <h2 className="font-bold text-lg lg:text-xl">Shri Pauchungnung Vaiphei</h2>
              <h2 className="text-sm">HEAD-IQAC</h2>
            </div>
            <Link to="/our-leadership" className="underline px-4 text-start w-full text-sm text-blue-600 py-4"><h2 className="">See more »</h2></Link>
          </div>
          
        </div>
      </div>
      
      <ObjectivePage />
  
      <Footer2/>
    </div>
  );
};

export default AboutUsPage;
