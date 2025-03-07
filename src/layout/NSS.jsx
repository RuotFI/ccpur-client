const NSS = () => {

    const nssData = [
        {
          id: 1,
          name: "Lalzuitluanga",
          designation: "Assistant Professor",
          portfolio: "Programme Officer, NSS Unit ",
        },
        {
            id: 2,
            name: "Khaiminlian",
            designation: "Assistant Professor",
            portfolio: "Programme Officer, NSS Unit II",
          },
          {
            id: 3,
            name: "Lalrengliani", 
            designation: "Assistant Professor",
            portfolio: "Programme Officer, NSS Unit III",
          },
    ]
  return (
    <div className="w-full h-full">

      <div className="w-full flex justify-center">
        <table className="w-44 lg:w-2/3 bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-slate-100">
            <tr>
                <th colSpan="4" className="w-full text-center py-3 border border-gray-300">NATIONAL SERVICE SCHEME</th>
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
            {nssData.map((member) => (
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
export default NSS