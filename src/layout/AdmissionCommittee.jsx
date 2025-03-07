const AdmissionCommittee = () => {

    const admissionCommitteeData = [
        {
            id: 1,
            name: "Dr. Siamkhum Guite",
            designation: "Principal (Regular)",
            assigned_designation: "Chairperson"
        },
        {
            id: 2,
            name: "Caroline Zothangmawi",
            designation: "Associate Professor & Vice Principal",
            assigned_designation: "Vice-Chairperson"
        },
        {
            id: 3,
            name: "Leivon George",
            designation: "Assistant Professor",
            assigned_designation: "Member Secretary"
        },
        {
            id: 4,
            name: "Nehzasoi Simte",
            designation: "Associate Prof,. HoD (Political Science) & Dean of Social Science",
            assigned_designation: "Member"
        },
        {
            id: 5,
            name: "Dr. Lalzagou Neihsial",
            designation: "Associate Professor, HoD (Geography",
            assigned_designation: "Member"
        },
        {
            id: 6,
            name: "Dr. Ph. Ngamkhokhai",
            designation: "Associate Professor",
            assigned_designation: "Member"
        },
    ]
  return (
    <div className="w-full h-full px-20 py-12">
        <div>
            <h2 className="text-2xl font-bold text-start py-3">Admissions Committee</h2>
        </div>

        <div className="w-full flex justify-start">
            <table className="w-44 lg:w-2/3 bg-white border border-gray-200 shadow-md rounded-lg">
                <thead className="bg-slate-100">
                    <tr>
                        <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">Sl No.</th>
                        <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">Name</th>
                        <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">Designation</th>
                        <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">Assigned Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        admissionCommitteeData.map((member) => (
                            <tr key={member.id}>
                                <td className="px-4 py-2 border border-gray-300 text-start">{member.id}</td>
                                <td className="px-4 py-2 border border-gray-300 text-start">{member.name}</td>
                                <td className="px-4 py-2 border border-gray-300 text-start">{member.designation}</td>
                                <td className="px-4 py-2 border border-gray-300 text-start">{member.assigned_designation}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
export default AdmissionCommittee