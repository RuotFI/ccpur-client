import AboutUsLink from "./AboutUsLink";

const PlanningDevelopement = ({ props }) => {


const planningDevlopementData = [
    {
        id: 1,
        name: "Dr. Siamkhum Guite",
        designation: "Principal (Regular)",
        assigned_designation: "Chairman"
    },
    {
        id: 2,
        name: "Caroline Zothangmawi",
        designation: "Associate Professor & Vice Principal",
        assigned_designation: "Secretary"
    },
    {
        id: 3,
        name: "Pauchingnung Vaiphei",
        designation: "Associate Professor & Head IQAC",
        assigned_designation: "Member"
    },
    {
        id: 4,
        name: "Ginzamang T. Zomi",
        designation: "Associate Professor & HoD",
        assigned_designation: "Member"
    },
    {
        id: 5,
        name: "Dr. Henry N Pangamte",
        designation: "Assistant Professor ",
        assigned_designation: "Member"
    },
]


  return (
    <div className="w-full h-full py-12">
        <AboutUsLink props={props} />
        <div>
            <h2 className="text-2xl font-bold text-center py-3">Planning & Development Board</h2>
        </div>

        <div className="w-full flex justify-center">
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
                        planningDevlopementData.map((member) => (
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
export default PlanningDevelopement;