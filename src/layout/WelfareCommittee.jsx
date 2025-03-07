const WelfareCommittee = () => {
  const welfareCommitteeData = [
    {
      id: 1,
      name: "Dr. Siamkhum Guite",
      designation: "Principal (Regular)",
      assigned_designation: "Chairman",
    },
    {
      id: 2,
      name: "Caroline Zothangmawi",
      designation: "Associate Professor & Vice Principal",
      assigned_designation: "Vice Chairman",
    },
    {
      id: 3,
      name: "Dr. Lalzagou Neihsial",
      designation: "Associate Professor & HoD (Geography)",
      assigned_designation: "Member Secretary",
    },
    {
      id: 4,
      name: "Pauchungnung Vaiphei",
      designation: "Associate Professor & IQAC Head",
      assigned_designation: "Member",
    },
    {
      id: 5,
      name: "Lalzuitluanga",
      designation: "Assistant Professor",
      assigned_designation: "Member",
    },
    {
      id: 6,
      name: "Bijumuon",
      designation: "Assistant Professor",
      assigned_designation: "Member",
    },
    {
      id: 7,
      name: "Kamchinhau",
      designation: "Assistant Professor",
      assigned_designation: "Member",
    },
    {
      id: 8,
      name: "Dr. Henry N. Pangamte",
      designation: "Assistant Professor",
      assigned_designation: "Member",
    },
    {
      id: 9,
      name: "Leivon George",
      designation: "Assistant Professor",
      assigned_designation: "Member",
    },
  ];

  return (
    <div className="w-full lg:px-20 h-full py-12">
      <div className="flex flex-col justify-start">
        <h2 className="text-2xl font-bold text-start py-3">
          Welfare Committee
        </h2>
        <p className="lg:w-2/3 text-start py-4 text-gray-600">
          The Welfare Committee, operating under the auspices of the College
          Principal, is devoted to enhancing the well-being of staff members
          through a range of financial support initiatives. Established in
          November 2020, the Corpus Fund System is sustained by voluntary
          contributions from the College Principal, as well as faculty and
          administrative staff. The Committee is committed to providing
          financial assistance to staff in need, thereby fostering a culture of
          solidarity and mutual support within the institution.
        </p>
      </div>

      <div className="w-full flex justify-start">
        <table className="w-44 lg:w-2/3 bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">
                Sl No.
              </th>
              <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">
                Name
              </th>
              <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">
                Designation
              </th>
              <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">
                Assigned Designation
              </th>
            </tr>
          </thead>
          <tbody>
            {welfareCommitteeData.map((member) => (
              <tr key={member.id}>
                <td className="px-4 py-2 border border-gray-300 text-start">
                  {member.id}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-start">
                  {member.name}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-start">
                  {member.designation}
                </td>
                <td className="px-4 py-2 border border-gray-300 text-start">
                  {member.assigned_designation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default WelfareCommittee;
