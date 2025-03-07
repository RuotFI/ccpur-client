import React from 'react';

const Collaboration = () => {
  return (
    <div className="bg-gray-100 py-20">
      <h2 className="font-bold text-2xl md:text-2xl lg:text-3xl text-center pb-8 uppercase">
          <span className="text-sky-500 font-medium">Academic</span> Collaboration
        </h2>

      <div className="grid shadow-md px-4 md:px-12 lg:px-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Image 1 */}
        <div className="relative overflow-hidden shadow-lg">
          <img
            src="https://portal.mycollegepedia.com/media/college/image/Assam_Don_Bosco_University.webp"
            alt="Collaboration 1"
            className="w-full h-72 object-cover transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold">Collaboration 1</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative overflow-hidden shadow-lg">
          <img
            src="https://image-static.collegedunia.com/public/college_data/images/appImage/1624976272about.jpg?h=260&w=360&mode=crop"
            alt="Collaboration 2"
            className="w-full h-72 object-cover transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold">Collaboration 2</p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative overflow-hidden shadow-lg">
          <img
            src="https://stedmundshillong.in/images/school-bld.jpg"
            alt="Collaboration 3"
            className="w-full h-72 object-cover transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold">Collaboration 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
