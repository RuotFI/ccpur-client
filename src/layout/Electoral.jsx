const Electoral = () => {

    const electoralData = [
        {
          id: 1,
          name: "Dr. Ph. Ngamkhokhai Mate",
          designation: "Assistant Professor",
          portfolio: "Nodal Officer",
        },
    ]
  return (
    <div className="w-full h-full py-12">

      <div className="w-full flex justify-center">
        <table className="w-44 lg:w-2/3 bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-slate-100">
            <tr>
                <th colSpan="4" className="w-full text-center py-3 border border-gray-300">ELECTORAL LITERACY CLUB</th>
            </tr>
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
                Portfolio
              </th>
            </tr>
          </thead>
          <tbody>
            {electoralData.map((member) => (
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
                  {member.portfolio}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Electoral