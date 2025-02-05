import React from 'react'

const ExistingSemesterPassed = ({ formData, handleChange}) => {
  return (
    <div>
        <div className="border p-4 rounded-lg shadow-sm bg-gray-50 mt-6">
        <h3 className="text-md font-semibold text-gray-700 mb-2">1st Semester <span className="text-red-500">*</span></h3>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="classxii_board" placeholder="Board/University" 
            value={formData?.classxii_board || ""} onChange={handleChange}
            className="border border-gray-400 px-3 py-2 rounded-md text-sm w-full"
          />
          <input type="text" name="classxii_rollno" placeholder="Roll No." 
            value={formData?.classxii_rollno || ""} onChange={handleChange}
            className="border border-gray-400 px-3 py-2 rounded-md text-sm w-full"
          />
          <input type="text" name="classxii_year" placeholder="Year"
            value={formData?.classxii_year || ""} onChange={handleChange}
            className="border border-gray-400 px-3 py-2 rounded-md text-sm w-full"
          />
          <input type="text" name="classxii_div" placeholder="Division"
            value={formData?.classxii_div || ""} onChange={handleChange}
            className="border border-gray-400 px-3 py-2 rounded-md text-sm w-full"
          />
          <input type="text" name="classxii_tmarks" placeholder="Subject taken"
            value={formData?.classxii_tmarks || ""} onChange={handleChange}
            className="border border-gray-400 px-3 py-2 rounded-md text-sm w-full"
          />
        </div>
      </div>

      <div className="border p-4 rounded-lg shadow-sm bg-gray-50 mt-6">
        <h3 className="text-md font-semibold text-gray-700 mb-2">2nd Semester <span className="text-red-500">*</span></h3>
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
          <input type="text" name="classxii_tmarks" placeholder="Subject taken"
            value={formData?.classxii_tmarks || ""} onChange={handleChange}
            className="border border-gray-500 px-3 py-2 rounded-md text-sm w-full"
          />
        </div>
      </div>

      <div className="border p-4 rounded-lg shadow-sm bg-gray-50 mt-6">
        <h3 className="text-md font-semibold text-gray-700 mb-2">3rd Semester <span className="text-red-500">*</span></h3>
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
          <input type="text" name="classxii_tmarks" placeholder="Subject taken"
            value={formData?.classxii_tmarks || ""} onChange={handleChange}
            className="border border-gray-500 px-3 py-2 rounded-md text-sm w-full"
          />
        </div>
      </div>

      <div className="border p-4 rounded-lg shadow-sm bg-gray-50 mt-6">
        <h3 className="text-md font-semibold text-gray-700 mb-2">4th Semester <span className="text-red-500">*</span></h3>
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
          <input type="text" name="classxii_tmarks" placeholder="Subject taken"
            value={formData?.classxii_tmarks || ""} onChange={handleChange}
            className="border border-gray-500 px-3 py-2 rounded-md text-sm w-full"
          />
        </div>
      </div>

      <div className="border p-4 rounded-lg shadow-sm bg-gray-50 mt-6">
        <h3 className="text-md font-semibold text-gray-700 mb-2">5th Semester <span className="text-red-500">*</span></h3>
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
          <input type="text" name="classxii_tmarks" placeholder="Subject taken"
            value={formData?.classxii_tmarks || ""} onChange={handleChange}
            className="border border-gray-500 px-3 py-2 rounded-md text-sm w-full"
          />
        </div>
      </div>

      <div className="border p-4 rounded-lg shadow-sm bg-gray-50 mt-6">
        <h3 className="text-md font-semibold text-gray-700 mb-2">6th Semester <span className="text-red-500">*</span></h3>
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
          <input type="text" name="classxii_tmarks" placeholder="Subject taken"
            value={formData?.classxii_tmarks || ""} onChange={handleChange}
            className="border border-gray-500 px-3 py-2 rounded-md text-sm w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default ExistingSemesterPassed