import React, { useEffect, useState } from "react";

import ExistingPersonalDetails from "./ExistingPersonalDetails";
import ExistingPassTable from "./ExistingPassTable";
import ExistingSignature from "./ExistingSignature";
import ExistingSemesterPassed from "./ExistingSemesterPassed";

const ExistingStudentsForm = () => {

  // const [session, setSession] = useState("");
  const [formData, setFormData] = useState({
    session: "",
    full_name: "",
    date_of_birth: "",
    aadhaar_no: "",
    sex: "",
    category: "",
    nationality: "",
    religion: "",
    name_of_community: "",
    contact_no: "",
    blood_group: "",
    email: "",
    fathers_name: "",
    fathers_occupation: "",
    mothers_name: "",
    mothers_occupation: "",
    permanent_address: "",
    present_address: "",
    guardian_name: "",
    guardian_address: "",
    hslc_board: "",
    hslc_rollno: "",
    hslc_year: "",
    hslc_div: "",
    hslc_tmarks: "",
    hslc_inst: "",
    classxii_board: "",
    classxii_rollno: "",
    classxii_year: "",
    classxii_div: "",
    classxii_tmarks: "",
    classxii_inst: "",
    course: "",
    mil: "",
    subject: "",
    exampassed1: "",
    exampassed2: "",
    exampassed3: "",
    exampassed4: "",
    exampassed5: "",
    exampassed6: "",
    board1: "",
    board2: "",
    board3: "",
    board4: "",
    board5: "",
    board6: "",
    year1: "",
    year2: "",
    year3: "",
    year4: "",
    year5: "",
    year6: "",
    roll_no1: "",
    roll_no2: "",
    roll_no3: "",
    roll_no4: "",
    roll_no5: "",
    roll_no6: "",
    division1: "",
    division2: "",
    division3: "",
    division4: "",
    division5: "",
    division6: "",
    subject_taken1: "",
    subject_taken2: "",
    subject_taken3: "",
    subject_taken4: "",
    subject_taken5: "",
    subject_taken6: "",
    abc_id: "",
    registration_no: "",
    course_code: "",
    current_semester: "",
    roll_no: "",
    agree: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked, // Set to true or false depending on whether the checkbox is checked
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value, // For other fields, use the regular value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
   
  };

  return (
    <div className="w-full overscroll-y-none bg-gray-100">
      <div className="flex items-center justify-center pt-20 h-auto">
        <div
          className="lg:w-2/3 w-full bg-white shadow-md py-8 "
          id="admission-form"
        >
          <form className="p-3 lg:p-8" onSubmit={handleSubmit}>
            <ExistingPersonalDetails formData={formData} handleChange={handleChange} />
            <ExistingPassTable  formData={formData} handleChange={handleChange}/>
            <ExistingSemesterPassed formData={formData} handleChange={handleChange}/>
            <ExistingSignature formData={formData} handleChange={handleChange} />
            {/* Submit Button */}
            <div className="flex justify-end items-start w-full mt-6">
              <button
                type="submit"
                className="bg-gray-900 w-44 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ExistingStudentsForm;
