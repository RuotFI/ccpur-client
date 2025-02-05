import React from "react";

const ExistingPersonalDetails = ({ formData, handleChange, setFormData}) => {

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


  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex lg:flex-row items-start border-b justify-between">
        <h2 className="py-3 text-start text-md lg:text-2xl font-medium text-gray-800">
          Existing Application <br/>Form
        </h2>
        <div className="flex items-center lg:space-x-4">
          <label className="font-medium">Session -</label>
          <input
            type="number"
            name="session"
            value={formData?.session || ""}
            onChange={handleChange}
            className="px-2 lg:w-32 border-b h-8 border-gray-500 outline-none"
          />
        </div>
      </div>
      <div className="w-full gap-4 pt-6 grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:grid-rows-6 lg:gap-8">
        {/* Name */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-800 text-sm py-1">
            Name (In full) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="full_name"
            value={formData?.full_name || ""}
            onChange={handleChange}
            required
            className="border lg:w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
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
            value={formData?.date_of_birth || ""} // ✅ Bind to formData
            onChange={handleChange} // ✅ Update state on change
            className="border lg:w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-medium px-2 border-gray-300 rounded-sm outline-none"
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
            value={formData?.aadhaar_no || ""} // ✅ Bind input to formData
            onChange={handleChange} // ✅ Update state on change
            className="border lg:w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
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
            value={formData?.sex || ""} // Bind the select value to formData
            onChange={handleChange} // Call handleChange on value change
            required
            name="sex"
            className="border text-gray-400 text-sm font-light border-gray-300 lg:w-72 h-8 rounded-sm outline-none"
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
            value={formData?.category || ""} // Bind the select value to formData
            onChange={handleChange}
            name="category"
            className="border text-gray-400 text-sm font-light border-gray-300 lg:w-72 h-8 rounded-sm outline-none"
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
            value={formData?.nationality || ""} // Bind the select value to formData
            onChange={handleChange}
            name="nationality"
            className="border text-sm font-light border-gray-300 lg:w-72 h-8 text-gray-400 rounded-sm outline-none"
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
            value={formData?.religion || ""}
            onChange={handleChange}
            required
            className="border lg:w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
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
            value={formData?.name_of_community || ""}
            onChange={handleChange}
            required
            className="border lg:w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
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
            value={formData?.contact_no || ""}
            onChange={handleChange}
            required
            className="border lg:w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
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
            value={formData?.blood_group || ""}
            onChange={handleChange}
            required
            className="border lg:w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
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
            value={formData?.email || ""}
            onChange={handleChange}
            required
            className="border lg:w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
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
            value={formData?.fathers_name || ""}
            onChange={handleChange}
            required
            className="border lg:w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
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
            value={formData?.fathers_occupation || ""}
            onChange={handleChange}
            required
            className="border lg:w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
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
            value={formData?.mothers_name || ""}
            onChange={handleChange}
            required
            className="border lg:w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
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
            value={formData?.mothers_occupation || ""}
            onChange={handleChange}
            required
            className="border lg:w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
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
            value={formData?.permanent_address || ""}
            onChange={handleChange}
            required
            className="border lg:w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
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
            value={formData?.present_address || ""}
            onChange={handleChange}
            required
            className="border lg:w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
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
            value={formData?.guardian_name || ""}
            onChange={handleChange}
            required
            className="border lg:w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
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
            value={formData?.guardian_address || ""}
            onChange={handleChange}
            required
            className="border lg:w-72 h-8 placeholder:text-sm placeholder:text-gray-400 placeholder:font-normal px-2 border-gray-300 rounded-sm outline-none"
            placeholder=""
          />
        </div>

        <div className="flex flex-col">
        <label className="font-medium text-sm py-1 text-gray-800">
          Choose a Program <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center">
          {/* Course Selection Dropdown */}
          <select
            id="program"
            name="course"
            value={formData?.course || ""}
            onChange={(e) => {
              handleChange(e); // Update formData.course
              setFormData((prev) => ({ ...prev, subject: "" })); // Reset subject
            }}
            className="border text-sm font-light border-gray-300 lg:w-72 h-8 text-gray-400 rounded-sm outline-none"
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
        {formData?.course && programs?.[formData.course]?.length > 0 && (
          <div className="flex flex-col">
            <label className="font-medium text-sm sm:text-md mt-2" htmlFor="subject">
              Select Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData?.subject || ""}
              onChange={handleChange}
              className="border text-sm font-light border-gray-300 lg:w-72 h-8 text-gray-400 rounded-sm outline-none"
              required
            >
              <option value="">Choose a subject</option>
              {programs[formData.course].map((subject, index) => (
                <option key={index} className="text-gray-800" value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* MIL Selection */}
      <div className="flex flex-col">
        <label className="font-medium text-sm py-1" htmlFor="For BA & BSc MIL">
          For BA & BSc MIL <span className="text-red-500">*</span>
        </label>
        <select
          value={formData?.mil || ""}
          onChange={handleChange}
          name="mil"
          className="border text-sm font-light border-gray-300 lg:w-72 h-8 text-gray-400 rounded-sm outline-none"
        >
          <option value="">Select MIL</option>
          <option value="Paite">Paite</option>
          <option value="Hmar">Hmar</option>
          <option value="Mizo">Mizo</option>
          <option value="THK">THK</option>
          <option value="GEN">GEN</option>
        </select>
      </div>
      </div>
    </div>
  );
};

export default ExistingPersonalDetails;
