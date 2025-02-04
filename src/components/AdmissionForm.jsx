import React, { useEffect, useState } from "react";
import AdmissionProcess from "../layout/AdmissionProcess";
import FeeStructure from "../layout/FeeStructure";
import SignaturePage from "./SignaturePage";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// import InputField from "./InputField";

const AdmissionForm = () => {

  const generatePDF = () => {
    const input = document.getElementById("admission-form");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("admission-form.pdf");
    });
  };
  

  const programs = {
    BA: [
      "Anthropology ( For Arts Background )",
      "Economics ( For Arts Background )",
      "Education",
      "English",
      "Geography ( For Arts Background )",
      "History",
      "Mathematics ( For Arts Background )",
      "Manipuri",
      "Mizo",
      "Political Science",
      "Sociology",
      "Statistics ( For Arts Background )",
    ],
    BSc: [
      "Anthropology ( For Science Background )",
      "Botany",
      "Chemistry",
      "Economics",
      "Geography ( For Science Background )",
      "Mathematics ( For Science Background )",
      "Physics",
      "Statistics ( For Science Background )",
      "Zoology",
    ],
  };

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
    classXII_board: "",
    classXII_rollno: "",
    classXII_year: "",
    classXII_div: "",
    classXII_tmarks: "",
    classXII_inst: "",
    course: "",
    subject: "",
    mil: "",
    agree: true,
  });

  // useEffect(() => {
  //   const currentYear = new Date().getFullYear();
  //   const nextYear = currentYear + 1;
  //   setSession(`${currentYear}-${nextYear}`);
  // }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,  // Set to true or false depending on whether the checkbox is checked
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,  // For other fields, use the regular value
      }));
    }
  };
   

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Check if all required fields are filled
    for (const key in formData) {
      if (!formData[key]) {
        alert(`Please fill out the field: ${key}`);
        return; // Stop the function if any field is missing
      }
    }
    try {
      console.log("Submitting form data:", formData); // Debugging
      const response = await fetch("http://localhost:5000/api/user/newapps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), //  Send formData directly
      });
      const data = await response.json(); // Convert response to JSON
      console.log("Server Response:", data); //Log server response
      if (response.ok) {
        //  Success message
        alert("Form submitted successfully!");

        setFormData({
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
          classXII_board: "",
          classXII_rollno: "",
          classXII_year: "",
          classXII_div: "",
          classXII_tmarks: "",
          classXII_inst: "",
          course: "",
          mil: "",
          subject: "",
          agree: true,
        });
      } else {
        const errorData = await response.json();
        alert(
          `Failed to submit the form: ${errorData.message || "Try again."}`
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <div className="w-full overscroll-y-none bg-gray-100">
      <AdmissionProcess />
      <FeeStructure />
      <div className=" flex items-center justify-start pt-20 px-16 h-auto">
        <div className="w-full bg-white shadow-md  px-6 py-8 " id="admission-form">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center border-b justify-between">
              <h2 className="py-3 text-2xl font-medium text-gray-800">
                New Application
              </h2>
              <div className="flex items-center space-x-4">
                <label className="font-medium">Session -</label>
                <input
                  type="number"
                  name="session"
                  value={formData.session}
                  onChange={handleChange}
                  className="px-2 w-32 border-b h-8 border-gray-500 outline-none"
                />
              </div>
            </div>
            <div className="w-full pt-6 grid grid-cols-3 grid-rows-6 gap-8">
              {/* Name */}
              <div className="flex flex-col">
                <label className="font-medium text-gray-800 text-sm py-1">
                  Name (In full) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth} // ✅ Bind to formData
                  onChange={handleChange} // ✅ Update state on change
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-medium px-2 border-gray-300 rounded-sm outline-none"
                  required // ✅ Ensure it's required
                />
              </div>

              {/* Aadhaar No. */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Aadhaar No. <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="aadhaar_no"
                  value={formData.aadhaar_no} // ✅ Bind input to formData
                  onChange={handleChange} // ✅ Update state on change
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
                  placeholder="Enter Aadhaar Number"
                  required // ✅ Make it required
                />
              </div>

              {/* Sex */}
              <div className="flex flex-col">
                <label htmlFor="sex">
                  Sex <span className="text-red-500">*</span>
                </label>
                <select
                value={formData.sex} // Bind the select value to formData
                onChange={handleChange} // Call handleChange on value change
                required
                  name="sex"
                  className="border text-gray-400 text-sm font-light border-gray-300 w-72 h-8 rounded-sm outline-none"
                >
                  <option value="">Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* Category */}
              <div className="flex flex-col">
                <label htmlFor="category">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                value={formData.category} // Bind the select value to formData
                onChange={handleChange}
                  name="category"
                  className="border text-gray-400 text-sm font-light border-gray-300 w-72 h-8 rounded-sm outline-none"
                >
                  <option value="">Select Category</option>
                  <option value="Schedule Tribe (ST)">Paite</option>
                  <option value="Hmar">Hmar</option>
                  <option value="Other Backward Classes (OBC)">Mizo</option>
                  <option value="General (GEN)">General (GEN)</option>
                </select>
              </div>
              {/* Nationality */}
              <div className="flex flex-col">
                <label htmlFor="Nationality">
                  Nationality <span className="text-red-500">*</span>
                </label>
                <select
                value={formData.nationality} // Bind the select value to formData
                onChange={handleChange}
                  name="nationality"
                  className="border text-sm font-light border-gray-300 w-72 h-8 text-gray-400 rounded-sm outline-none"
                >
                  <option value="" className="">
                    Select Nationality
                  </option>
                  <option value="Indian">Indian</option>
                  <option value="Non-Indian">Non-Indian</option>
                </select>
              </div>

              {/* Religion */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Religion <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/*  */}
              {/* Community */}
              <div className="flex flex-col">
                <label className="font-medium text-gray-800 text-sm py-1">
                  Name of Community <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name_of_community"
                  value={formData.name_of_community}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Contact */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Contact No. <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="contact_no"
                  value={formData.contact_no}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Blood Group */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Blood Group <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="blood_group"
                  value={formData.blood_group}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/*  */}
              {/* Email */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Email Id <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Fathers Name */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Father's Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fathers_name"
                  value={formData.fathers_name}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Fathers Occupation */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Father's Occupation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fathers_occupation"
                  value={formData.fathers_occupation}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Mothers Name */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Mother's Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="mothers_name"
                  value={formData.mothers_name}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Mothers Occupation */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Mother's Occupation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="mothers_occupation"
                  value={formData.mothers_occupation}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Permanent Address */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Permanent Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="permanent_address"
                  value={formData.permanent_address}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Present Address */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Persent Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="present_address"
                  value={formData.present_address}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              {/* Guardian Name */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Guardian's Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="guardian_name"
                  value={formData.guardians_name}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
                  placeholder=""
                />
              </div>
              {/* Guardian Address */}
              <div className="flex flex-col">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Guardian Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="guardian_address"
                  value={formData.guardians_address}
                  onChange={handleChange}
                  required
                  className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
                  placeholder=""
                />
              </div>

              <div className=" w-full">
                <label className="font-medium text-sm py-1 text-gray-800">
                  Choose a Program <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center ">
                  {/* Course Selection Dropdown */}
                  <select
                    id="program"
                    name="course"
                    value={formData.course}
                    onChange={(e) => {
                      handleChange(e); // Update formData.course
                      setFormData((prev) => ({ ...prev, subject: "" })); // Reset subject
                    }}
                    className="border text-sm font-light border-gray-300 w-72 h-8 text-gray-400 rounded-sm outline-none"
                    required
                  >
                    <option value="">Select Program</option>
                    <option className="text-gray-600" value="BA">
                      BA
                    </option>
                    <option className="text-gray-600" value="BSc">
                      B.Sc
                    </option>
                  </select>
                </div>

                {/* Subject Selection */}
                {formData.course && programs?.[formData.course]?.length > 0 && (
                  <div className="flex flex-col">
                    <label
                      className="font-medium text-sm sm:text-md mt-2"
                      htmlFor="subject"
                    >
                      Select Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="border text-sm font-light border-gray-300 w-72 h-8 text-gray-400 rounded-sm outline-none"
                      required
                    >
                      <option value="">Choose a subject</option>
                      {programs[formData.course].map((subject, index) => (
                        <option
                          key={index}
                          className="text-gray-800"
                          value={subject}
                        >
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  className="font-medium text-sm py-1"
                  htmlFor="For BA & BSc MIL"
                >
                  For BA & BSc MIL <span className="text-red-500">*</span>
                </label>
                <select
                value={formData.mil} // Bind the select value to formData
                onChange={handleChange}
                  name="mil"
                  className="border text-sm font-light border-gray-300 w-72 h-8 text-gray-400 rounded-sm outline-none"
                >
                  <option className=" " value="">
                    Select MIL
                  </option>
                  <option value="Paite">Paite</option>
                  <option value="Schedule Caste (SC)">Hmar</option>
                  <option value="Mizo">Mizo</option>
                  <option value="THK">THK</option>
                  <option value="GEN">GEN</option>
                </select>
              </div>
            </div>

            <div className="mt-8 w-full">
              <label className="font-medium text-sm text-gray-800 my-4">
                Details of Examination Passed:
              </label>
              <table className="w-full border-collapse border border-gray-300 ">
                <thead className="bg-gray-100 text-start">
                  <tr>
                    <th className="border text-start border-gray-300 px-2 py-2 text-sm font-medium text-gray-800">
                      Exams
                    </th>
                    <th className="border text-start border-gray-300 px-2 py-2 w-36 text-sm font-medium text-gray-800">
                      Board
                    </th>
                    <th className="border text-start border-gray-300 px-2 py-2 w-44 text-sm font-medium text-gray-800">
                      Roll No
                    </th>
                    <th className="border text-start border-gray-300 px-2 py-2 w-44 text-sm font-medium text-gray-800">
                      Year
                    </th>
                    <th className="border text-start border-gray-300 px-2 py-2 w-36 text-sm font-medium text-gray-800">
                      Division
                    </th>
                    <th className="border text-start border-gray-300 px-2 py-2 w-28 text-sm font-medium text-gray-800">
                      Total Mark
                    </th>
                    <th className="border text-start border-gray-300 px-2 w-64 py-2 text-sm font-medium text-gray-800">
                      Institution
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* Add rows here */}
                  <tr>
                    <td className="border border-gray-300 w-44 px-2 py-2 text-sm font-medium">
                      HSLC
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. BSEM/CBSE"
                        name="hslc_board"
                        value={formData.hslc_board}
                        onChange={handleChange}
                        className="outline-none border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. 1234567"
                        name="hslc_rollno"
                        value={formData.hslc_rollno}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. 2022"
                        name="hslc_year"
                        value={formData.hslc_year}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. 1st division"
                        name="hslc_div"
                        value={formData.hslc_div}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. 355"
                        name="hslc_tmarks"
                        value={formData.hslc_tmarks}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. Rayburn High School"
                        name="hslc_inst"
                        value={formData.hslc_inst}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border font-medium border-gray-300 px-2 py-2 text-sm whitespace-nowrap">
                      Class XII
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. BSEM/CBSE"
                        name="classXII_board"
                        value={formData.classXII_board}
                        onChange={handleChange}
                        className="outline-none border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. 1234567"
                        name="classXII_rollno"
                        value={formData.classXII_rollno}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. 1st Division"
                        name="classXII_year"
                        value={formData.classXII_year}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. 364"
                        name="classXII_div"
                        value={formData.classXII_div}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. 364"
                        name="classXII_tmarks"
                        value={formData.classXII_tmarks}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="e.x. Rayburn College"
                        name="classXII_inst"
                        value={formData.classXII_inst}
                        onChange={handleChange}
                        className="border w-full px-2 py-2 text-sm"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className=" flex pt-8 items-center gap-2 text-start">
              <div>
                <input type="checkbox" name="agree" value={formData.agree} onChange={handleChange} />
              </div>
              <div>
                <p className=" text-md font-semibold text-red-600">
                  I promise to abide by the rules & regulations of the college
                  and also promise to attend classes regularly. I may be barred
                  from filling up the Examination Form if I do not attend the
                  required percentage of attendance prescribed by the
                  University.
                </p>
              </div>
            </div>

            {/* MIL Selection */}

            <SignaturePage />
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
export default AdmissionForm;
