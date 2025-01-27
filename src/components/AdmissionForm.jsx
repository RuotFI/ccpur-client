import React, { useEffect, useState } from "react";
// import InputField from "./InputField";

const AdmissionForm = () => {
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
    name: "",
    dob: "",
    aadhar: "",
    sex: "",
    category: "",
    nationality: "",
    religion: "",
    community: "",
    contact: "",
    bloodgroup: "",
    email: "",
    fathersName: "",
    fathersOccupation: "",
    mothersName: "",
    mothersOccupation: "",
    permanentAddress: "",
    presentAddress: "",
    guardiansName: "",
    guardiansAddress: "",
    hslcBoard: "",
    classTwelveBoard: "",
    hslcRollNoandYear: "",
    twelveRollNoandYear: "",
    hslcDivision: "",
    twelveDivision: "",
    hslcTotalMark: "",
    twelveTotalMark: "",
    hslcInstitution: "",
    twelveInstitution: "",
    MIL: "",
    admissionGranted: "",
    admissionNotGranted: "",
    programs: "",
  });

  // useEffect(() => {
  //   const currentYear = new Date().getFullYear();
  //   const nextYear = currentYear + 1;
  //   setSession(`${currentYear}-${nextYear}`);
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  return (
    <div className="w-full overscroll-y-none bg-gray-100 pt-32">
      <div className=" flex items-center justify-center h-auto">
        <div className="w-2/3 bg-white shadow-md  px-6 py-8">
          <div className="flex items-center border-b justify-between">
            <h2 className="py-3 text-2xl font-medium text-gray-800">
              Admission form
            </h2>
            <div className="flex items-center space-x-4">
              <label>Session -</label>
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
                Name (In full)
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                placeholder=""
              />
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col">
              <label className="font-medium text-sm py-1 text-gray-800">
                Date of Birth
              </label>
              <input
                type="date"
                className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                // placeholder="Enter full name"
              />
            </div>

            {/* Aadhar No. */}
            <div className="flex flex-col">
              <label className="font-medium text-sm py-1 text-gray-800">
                Aadhar No.
              </label>
              <input
                type="number"
                className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                placeholder=""
              />
            </div>

            {/*  */}

            {/* Sex */}
            <div className="flex flex-col">
              <label className="font-medium text-sm py-1 text-gray-800">
                Sex
              </label>
              <div className="flex items-center space-x-4">
                <label for="Male" className="flex items-center">
                  <input
                    type="radio"
                    name="sex"
                    value="Male"
                    className="mr-2"
                  />
                  Male
                </label>
                <label for="Female" className="flex items-center">
                  <input
                    type="radio"
                    name="sex"
                    value="Female"
                    className="mr-2"
                  />
                  Female
                </label>
              </div>
            </div>

            {/* Category */}
            <div className="flex flex-col">
              <label className="font-medium text-sm py-1 text-gray-800">
                Category
              </label>
              <div className="flex items-center space-x-4">
                <label for="ST" className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value="category"
                    className="mr-2"
                  />
                  ST
                </label>
                <label for="SC" className="flex items-center text-gray-800">
                  <input
                    type="radio"
                    name="category"
                    value="category"
                    className="mr-2"
                  />
                  SC
                </label>
                <label for="OBC" className="flex items-center text-gray-800">
                  <input
                    type="radio"
                    name="category"
                    value="category"
                    className="mr-2"
                  />
                  OBC
                </label>
                <label for="GEN" className="flex items-center text-gray-800">
                  <input
                    type="radio"
                    name="category"
                    value="category"
                    className="mr-2"
                  />
                  GEN
                </label>
              </div>
            </div>

            {/* Religion */}
            <div className="flex flex-col">
              <label className="font-medium text-sm py-1 text-gray-800">
                Religion
              </label>
              <input
                type="text"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                required
                className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                placeholder=""
              />
            </div>

            {/*  */}
            {/* Community */}
            <div className="flex flex-col">
              <label className="font-medium text-gray-800 text-sm py-1">
                Name of Community
              </label>
              <input
                type="text"
                name="community"
                value={formData.community}
                onChange={handleChange}
                required
                className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                placeholder=""
              />
            </div>

            {/* Contact */}
            <div className="flex flex-col">
              <label className="font-medium text-sm py-1 text-gray-800">
                Contact No.
              </label>
              <input
                type="number"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                placeholder=""
              />
            </div>

            {/* Blood Group */}
            <div className="flex flex-col">
              <label className="font-medium text-sm py-1 text-gray-800">
                Blood Group
              </label>
              <input
                type="text"
                name="bloodgroup"
                value={formData.bloodgroup}
                onChange={handleChange}
                required
                className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                placeholder=""
              />
            </div>

            {/*  */}
            {/* Email */}
            <div className="flex flex-col">
              <label className="font-medium text-sm py-1 text-gray-800">
                Email Id
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                placeholder=""
              />
            </div>

            {/* Fathers Name */}
            <div className="flex flex-col">
              <label className="font-medium text-sm py-1 text-gray-800">
                Father's Name
              </label>
              <input
                type="text"
                name="fathersName"
                value={formData.fathersName}
                onChange={handleChange}
                required
                className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                placeholder=""
              />
            </div>

            {/* Fathers Occupation */}
            <div className="flex flex-col">
              <label className="font-medium text-sm py-1 text-gray-800">
                Father's Occupation
              </label>
              <input
                type="text"
                name="fathersOccupation"
                value={formData.fathersOccupation}
                onChange={handleChange}
                required
                className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                placeholder=""
              />
            </div>

            {/* Mothers Name */}
            <div className="flex flex-col">
              <label className="font-medium text-sm py-1 text-gray-800">
                Mother's Name
              </label>
              <input
                type="text"
                name="mothersName"
                value={formData.mothersName}
                onChange={handleChange}
                required
                className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                placeholder=""
              />
            </div>

            {/* Mothers Occupation */}
            <div className="flex flex-col">
              <label className="font-medium text-sm py-1 text-gray-800">
                Mother's Occupation
              </label>
              <input
                type="text"
                name="mothersOccupation"
                value={formData.mothersOccupation}
                onChange={handleChange}
                required
                className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                placeholder=""
              />
            </div>

            {/* Permanent Address */}
            <div className="flex flex-col">
              <label className="font-medium text-sm py-1 text-gray-800">
                Permanent Address
              </label>
              <input
                type="text"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                required
                className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                placeholder=""
              />
            </div>

            {/* Present Address */}
            <div className="flex flex-col">
              <label className="font-medium text-sm py-1 text-gray-800">
                Persent Address
              </label>
              <input
                type="text"
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleChange}
                required
                className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                placeholder=""
              />
            </div>

            {/* Guardian Address */}
            <div className="flex flex-col">
              <label className="font-medium text-sm py-1 text-gray-800">
                Guardian Address
              </label>
              <input
                type="text"
                name="guardiansAddress"
                value={formData.guardiansAddress}
                onChange={handleChange}
                required
                className="border w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-400 rounded-sm outline-none"
                placeholder=""
              />
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
                    Roll No. & Year
                  </th>
                  <th className="border text-start border-gray-300 px-2 py-2 w-36 text-sm font-medium text-gray-800">
                    Division
                  </th>
                  <th className="border text-start border-gray-300 px-2 py-2 text-sm font-medium text-gray-800">
                    Total Mark
                  </th>
                  <th className="border text-start border-gray-300 px-2 w-72 py-2 text-sm font-medium text-gray-800">
                    Institution
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Add rows here */}
                <tr>
                  <td className="border border-gray-300 px-2 py-2 text-sm">
                    HSLC
                  </td>
                  <input
                    type="text"
                    placeholder="e.x. BSEM/CBSE"
                    name="hslcBoard"
                    value={formData.hslcBoard}
                    onChange={handleChange}
                    className="outline-none border w-full px-2 py-2 text-sm"
                  />
                  <td>
                    <input
                      type="text"
                      placeholder="e.x. 1234567"
                      name="hslcRollNoandYear"
                      value={formData.hslcRollNoandYear}
                      onChange={handleChange}
                      className="border w-full px-2 py-2 text-sm"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="e.x. 1st Division"
                      name="hslcDivision"
                      value={formData.hslcDivision}
                      onChange={handleChange}
                      className="border w-full px-2 py-2 text-sm"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="e.x. 364"
                      name="hslcTotalMark"
                      value={formData.hslcTotalMark}
                      onChange={handleChange}
                      className="border w-full px-2 py-2 text-sm"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="e.x. Rayburn High School"
                      name="hslcInstitution"
                      value={formData.hslcInstitution}
                      onChange={handleChange}
                      className="border w-full px-2 py-2 text-sm"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-2 text-sm whitespace-nowrap">
                    Class XII
                  </td>
                  <input
                    type="text"
                    placeholder="e.x. BSEM/CBSE"
                    name="classTwelveBoard"
                    value={formData.classTwelveBoard}
                    onChange={handleChange}
                    className="outline-none border w-full px-2 py-2 text-sm"
                  />
                  <td>
                    <input
                      type="text"
                      placeholder="e.x. 1234567"
                      name="twelveRollNoandYear"
                      value={formData.twelveRollNoandYear}
                      onChange={handleChange}
                      className="border w-full px-2 py-2 text-sm"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="e.x. 1st Division"
                      name="twelveDivision"
                      value={formData.twelveDivision}
                      onChange={handleChange}
                      className="border w-full px-2 py-2 text-sm"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="e.x. 364"
                      name="twelveTotalMark"
                      value={formData.twelveTotalMark}
                      onChange={handleChange}
                      className="border w-full px-2 py-2 text-sm"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="e.x. Rayburn College"
                      name="twelveInstitution"
                      value={formData.twelveInstitution}
                      onChange={handleChange}
                      className="border w-full px-2 py-2 text-sm"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-7 w-full">
            <label className="font-medium text-sm py-2 text-gray-800">
              Subject Offered: BA/BSc First Year : First Semester & Second
              Semester :
            </label>
            <div className="flex items-center gap-52 mb-6">
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-96 px-2 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                required
              >
                <option value="">Choose a program</option>
                <option value="BA">BA</option>
                <option value="BSc">B.Sc</option>
              </select>
            </div>
            
            {/* Subject Selection */}
            {formData.program && (
              <div className="flex flex-col mb-6">
                <label
                  className="font-medium text-sm sm:text-md mb-2"
                  htmlFor="subject"
                >
                  Select Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="">Choose a subject</option>
                  {programs[formData.program].map((subject, index) => (
                    <option key={index} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div>
              <label className="font-medium text-sm text-gray-800">
                For BA & B.SC MIL :
              </label>
              <div className="flex items-center space-x-4">
                <label for="Paite" className="flex items-center">
                  <input type="radio" name="MIL" value="MIL" className="mr-2" />
                  Paite
                </label>
                <label for="Hmar" className="flex items-center text-gray-800">
                  <input type="radio" name="MIL" value="MIL" className="mr-2" />
                  Hmar
                </label>
                <label for="Mizo" className="flex items-center text-gray-800">
                  <input type="radio" name="MIL" value="MIL" className="mr-2" />
                  Mizo
                </label>
                <label for="THK" className="flex items-center text-gray-800">
                  <input type="radio" name="MIL" value="MIL" className="mr-2" />
                  THK
                </label>
                <label for="GEN" className="flex items-center text-gray-800">
                  <input type="radio" name="MIL" value="MIL" className="mr-2" />
                  GEN
                </label>
              </div>
            </div>

          <div className="w-full mt-20">
            <h2 className="text-2xl font-bold text-center underline">
              DECLARATION
            </h2>
            <div className="py-6">
              <p>
                I promise to abide by the rules & regulations of the college and
                also promise to attend classes regularly. I may be barred from
                filling up Examination Form if i do not attend the required
                percentag of attendance prescribed by the University
              </p>
            </div>
            <div className="flex flex-col my-6">
              {/* <label className="font-medium text-sm py-1 text-gray-800">
                Sex
              </label> */}
              <div className="flex items-center justify-between space-x-4">
                <div className="flex">

                
                <label for="admissionGranted" className="flex items-center">
                  <input
                    type="checkbox"
                    name="admissionGranted"
                    value="admissionGranted"
                    className="mr-2"
                  />
                  Admission Granted /
                </label>
                <label for="admissionNotGranted" className="flex items-center">
                  <input
                    type="checkbox"
                    name="admissionNotGranted"
                    value="admissionNotGranted"
                    className="mr-2"
                  />
                  Not Granted
                </label>
                </div>
                <div>
                <h2>(Signature of Applicant)</h2>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
