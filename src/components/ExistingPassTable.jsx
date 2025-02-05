import React from 'react';

const ExistingPassTable = ({ formData, handleChange }) => {
  return (
    <div className="mt-8">
      <label className="font-medium text-sm text-gray-800 my-4">
        Details of Examination Passed: <span className="text-red-500">*</span>
      </label>

      {/* HSLC Section */}
      <div className="border p-4 rounded-lg shadow-sm bg-gray-50 mt-4">
        <h3 className="text-md font-semibold text-gray-700 mb-2">HSLC Examination <span className="text-red-500">*</span></h3>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="hslc_board" placeholder="Board/University" 
            value={formData?.hslc_board || ""} onChange={handleChange}
            className="border px-3 py-2 rounded-md text-sm w-full"
          />
          <input type="text" name="hslc_rollno" placeholder="Roll No." 
            value={formData?.hslc_rollno || ""} onChange={handleChange}
            className="border px-3 py-2 rounded-md text-sm w-full"
          />
          <input type="text" name="hslc_year" placeholder="Year"
            value={formData?.hslc_year || ""} onChange={handleChange}
            className="border px-3 py-2 rounded-md text-sm w-full"
          />
          <input type="text" name="hslc_div" placeholder="Division"
            value={formData?.hslc_div || ""} onChange={handleChange}
            className="border px-3 py-2 rounded-md text-sm w-full"
          />
          <input type="text" name="subject_taken1" placeholder="Subjects Taken"
            value={formData?.subject_taken1 || ""} onChange={handleChange}
            className="border px-3 py-2 rounded-md text-sm w-full"
          />
          <input type="text" name="hslc_inst" placeholder="Institution"
            value={formData?.hslc_inst || ""} onChange={handleChange}
            className="border px-3 py-2 rounded-md text-sm w-full"
          />
        </div>
      </div>

      {/* Class XII Section */}
      <div className="border p-4 rounded-lg shadow-sm bg-gray-50 mt-6">
        <h3 className="text-md font-semibold text-gray-700 mb-2">Class XII Examination <span className="text-red-500">*</span></h3>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="classxii_board" placeholder="Board/University" 
            value={formData?.classxii_board || ""} onChange={handleChange}
            className="border border-gray-500 px-3 py-2 rounded-md text-sm w-full"
          />
          <input type="text" name="classxii_rollno" placeholder="Roll No." 
            value={formData?.classxii_rollno || ""} onChange={handleChange}
            className="border border-gray-500 px-3 py-2 rounded-md text-sm w-full"
          />
          <input type="text" name="classxii_year" placeholder="Year"
            value={formData?.classxii_year || ""} onChange={handleChange}
            className="border border-gray-500 px-3 py-2 rounded-md text-sm w-full"
          />
          <input type="text" name="classxii_div" placeholder="Division"
            value={formData?.classxii_div || ""} onChange={handleChange}
            className="border border-gray-500 px-3 py-2 rounded-md text-sm w-full"
          />
          <input type="text" name="classxii_tmarks" placeholder="Total Marks"
            value={formData?.classxii_tmarks || ""} onChange={handleChange}
            className="border border-gray-500 px-3 py-2 rounded-md text-sm w-full"
          />
          <input type="text" name="classxii_inst" placeholder="Institution"
            value={formData?.classxii_inst || ""} onChange={handleChange}
            className="border border-gray-500 px-3 py-2 rounded-md text-sm w-full"
          />
        </div>
      </div>

      {/* 1st semester */}

      
    </div>
  );
};

export default ExistingPassTable;
