const ExaminationsCommittee = () => {
  const examinationsCommitteeData = [
    {
      id: 1,
      name: "Dr. Siamkhum Guite",
      designation: "Principal (Regular)",
      assigned_designation: "Chairperson",
    },
    {
      id: 2,
      name: "Caroline Zothangmawi",
      designation: "Associate Professor & Vice Principal",
      assigned_designation: "Vice-Chairperson",
    },
    {
      id: 3,
      name: "Dr. Lalzagou Neihsial",
      designation: "Associate Professor",
      assigned_designation: "Member Secretary",
    },
    {
      id: 4,
      name: "Dr. Ph. Ngamkhokhai",
      designation: "Assistant Professor",
      assigned_designation: "Member",
    },
    {
      id: 5,
      name: "Nehzasoi Simte",
      designation: "Assistant Professor",
      assigned_designation: "Member",
    },
    {
      id: 6,
      name: "Dr. D. Sonkhojang Haokip",
      designation: "Associate Professor",
      assigned_designation: "Member",
    },
    {
      id: 7,
      name: "Lallianmang",
      designation: "Associate Professor",
      assigned_designation: "Member",
    },
  ];

  return (
    <div className="w-full lg:px-20 h-full py-12">
      <div>
        <h2 className="text-2xl font-bold text-start py-3">
          Examinations Committee
        </h2>
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
            {examinationsCommitteeData.map((member) => (
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
export default ExaminationsCommittee;
