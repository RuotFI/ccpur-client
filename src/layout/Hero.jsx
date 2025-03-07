
import ccpurmain from "../assets/ccpurmain.jpg";

const Hero = () => {
  return (
    <main className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen mt-[108px] lg:mt-[95px] lg:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={ccpurmain}
          alt="Churachandpur College Background"
        />
      </div>
      {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
 <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-3xl">
Welcome to Churachandpur College
</h1>
<p className="text-sm sm:text-lg md:text-xl max-w-2xl drop-shdow-3xl">
Providing quality education for a better future.<br/>
</p>
<Link to="/about-us" className=" px-4 py-2 bg-blue-600 text-white  rounded-lg shadow-md hover:border-blue-500 transition">
Learn More
</Link>
</div> */}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Title with Design Line */}
      <div className="absolute top-[70%] right-[18%] lg:right-[23%] w-full flex flex-col items-center">
        <div>
        <h1 className="text-white text-start text-3xl border-l-4 px-2 sm:text-4xl md:text-5xl lg:text-8xl  lg:border-l-[15px] border-red-600 lg:px-4 font-bold">
          NAAC<br/> ACCREDITED B+
        </h1>
        
        </div>
        {/* <div className="w-2/6 h-1 bg-white mb-2"></div> */}
       
        {/* <div className="w-2/3 h-1 bg-white mt-2"></div> */}
      </div>
    </main>
  );
};

export default Hero;



