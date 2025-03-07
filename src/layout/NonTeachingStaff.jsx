const NonTeachingStaff = () => {

    const nonteachingStaffData = [
        
            {
              "id": 1,
              "Name": "Melody Zenthianneihhosh",
              "Designation": "Librarian",
              "Nature_of_Appointment": "Engaged"
            },
            {
              "id": 2,
              "Name": "T. Mangminlian",
              "Designation": "Cashier/Accountant",
              "Nature_of_Appointment": "Engaged"
            },
            {
              "id": 3,
              "Name": "T. Jamson",
              "Designation": "Billing Clerk",
              "Nature_of_Appointment": "Engaged"
            },
            {
              "id": 4,
              "Name": "Janggoumang Khongsai",
              "Designation": "LDC",
              "Nature_of_Appointment": "Engaged"
            },
            {
              "id": 5,
              "Name": "Ngamgousiem Gangte",
              "Designation": "LDC",
              "Nature_of_Appointment": "Engaged"
            },
            {
              "id": 6,
              "Name": "Chiching",
              "Designation": "LDC",
              "Nature_of_Appointment": "Engaged"
            },
            {
              "id": 7,
              "Name": "Vumkhanhau",
              "Designation": "Laboratory Attendant",
              "Nature_of_Appointment": "Regular"
            },
            {
              "id": 8,
              "Name": "S. Paupi",
              "Designation": "Laboratory Attendant",
              "Nature_of_Appointment": "Regular"
            },
            {
              "id": 9,
              "Name": "Lutjapao Singson",
              "Designation": "Laboratory Attendant",
              "Nature_of_Appointment": "Regular"
            },
            {
              "id": 10,
              "Name": "Shokhothong Touthang",
              "Designation": "Chowkidar",
              "Nature_of_Appointment": "Regular"
            },
            {
              "id": 11,
              "Name": "Khailal Gangto",
              "Designation": "Chowkidar",
              "Nature_of_Appointment": "Regular"
            },
            {
              "id": 12,
              "Name": "H. Goukhanpau",
              "Designation": "Peon",
              "Nature_of_Appointment": "Regular"
            },
            {
              "id": 13,
              "Name": "Lalramlien",
              "Designation": "Peon",
              "Nature_of_Appointment": "Regular"
            },
            {
              "id": 14,
              "Name": "Lunkhanhau",
              "Designation": "Peon",
              "Nature_of_Appointment": "Regular"
            },
            {
              "id": 15,
              "Name": "Ginkhankhual",
              "Designation": "Peon",
              "Nature_of_Appointment": "Regular"
            },
            {
              "id": 16,
              "Name": "Dimneichin",
              "Designation": "Peon",
              "Nature_of_Appointment": "Regular"
            },
            {
              "id": 17,
              "Name": "Lalparmawi",
              "Designation": "Peon",
              "Nature_of_Appointment": "Regular"
            },
            {
              "id": 18,
              "Name": "Chinzaniang",
              "Designation": "Hostel Cook",
              "Nature_of_Appointment": "Regular"
            },
            {
              "id": 19,
              "Name": "L. Chinbiaksuan",
              "Designation": "MTS",
              "Nature_of_Appointment": "Engaged"
            },
            {
              "id": 20,
              "Name": "Hatneiting",
              "Designation": "MTS",
              "Nature_of_Appointment": "Engaged"
            },
            {
              "id": 21,
              "Name": "Chinkhenthang",
              "Designation": "MTS/Chowkidar",
              "Nature_of_Appointment": "Engaged"
            },
            {
              "id": 22,
              "Name": "H. Pumgin",
              "Designation": "MTS",
              "Nature_of_Appointment": "Engaged"
            },
            {
              "id": 23,
              "Name": "G. Kamzamang",
              "Designation": "MTS/Driver",
              "Nature_of_Appointment": "Engaged"
            },
            {
              "id": 24,
              "Name": "Hoineichong Touthang",
              "Designation": "MTS",
              "Nature_of_Appointment": "Engaged"
            },
            {
              "id": 25,
              "Name": "Chinbiaklian Vualnam",
              "Designation": "MTS",
              "Nature_of_Appointment": "Engaged"
            },
            {
              "id": 26,
              "Name": "Mary Lalvenghim",
              "Designation": "MTS",
              "Nature_of_Appointment": "Engaged"
            },
            {
              "id": 27,
              "Name": "Zothanpuii",
              "Designation": "MTS",
              "Nature_of_Appointment": "Engaged"
            },
            {
              "id": 28,
              "Name": "L. Khamminlian Ngaihte",
              "Designation": "MTS",
              "Nature_of_Appointment": "Engaged"
            }
          
          
    ]
  return (
    <div className="w-full lg:px-20 h-full py-12">
        <div>
            <h2 className="text-2xl font-bold text-start py-3">NON-TEACHING STAFF</h2>
        </div>

        <div className="w-full flex justify-start overscroll-x-auto">
            <table className="w-44 lg:w-2/3 bg-white border text-sm border-gray-200 shadow-md rounded-lg">
                <thead className="bg-slate-100">
                    <tr>
                        <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">Sl No.</th>
                        <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">Name</th>
                        <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">Designation</th>
                        <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">Nature of Appointment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nonteachingStaffData.map((member) => (
                            <tr className="hover:bg-gray-100" key={member.id}>
                                <td className="px-4 py-2 border border-gray-300 text-start">{member.id}</td>
                                <td className="px-4 py-2 border border-gray-300 text-start">{member.Name}</td>
                                <td className="px-4 py-2 border border-gray-300 text-start">{member.Designation}</td>
                                <td className="px-4 py-2 border border-gray-300 text-start">{member.Nature_of_Appointment}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
export default NonTeachingStaff