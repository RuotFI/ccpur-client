import AboutUsLink from "./AboutUsLink";

const StudentUnion = () => {


    const studentUnionData = [
        {
          "id": 1,
          "name": "Dr. Siamkhum Guite",
          "portfolio": "Principal/President"
        },
        {
          "id": 2,
          "name": "Caroline Zothangmawi",
          "portfolio": "Vice-Principal/Vice-President"
        },
        {
          "id": 3,
          "name": "Thanggoulen Haokip",
          "portfolio": "General Secretary"
        },
        {
          "id": 4,
          "name": "Thangkhankhup Tombing",
          "portfolio": "Finance Secretary"
        },
        {
          "id": 5,
          "name": "K. Lelsmon",
          "portfolio": "Secretary, Games & Sports"
        },
        {
          "id": 6,
          "name": "H. Thangminlun Simte",
          "portfolio": "Secretary, Social & Culture"
        },
        {
          "id": 7,
          "name": "S. Liengoulal Gangte",
          "portfolio": "Secretary, Academic"
        },
        {
          "id": 8,
          "name": "Max Lalmalsawma",
          "portfolio": "Secretary, Magazine"
        },
        {
          "id": 9,
          "name": "George Lalditsang Sinate",
          "portfolio": "Secretary, Debate & Extension"
        },
        {
          "id": 10,
          "name": "Khuplemlian Vaiphei",
          "portfolio": "Secretary, Common Room (Boys)"
        },
        {
          "id": 11,
          "name": "Chingneiniang",
          "portfolio": "Secretary, Common Room (Girls)"
        }
      ]
      
    
    
      return (
        <div className="w-full lg:px-20 h-full py-12">
          <AboutUsLink />
            <div>
                <h2 className="text-2xl font-bold text-start py-3">Planning & Development Board</h2>
            </div>
    
            <div className="w-full flex justify-start">
                <table className="w-44 lg:w-2/3 bg-white border border-gray-200 shadow-md rounded-lg">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">Sl No.</th>
                            <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">Name</th>
                            <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">Portfolio</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentUnionData.map((member) => (
                                <tr key={member.id}>
                                    <td className="px-4 py-2 border border-gray-300 text-start">{member.id}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-start">{member.name}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-start">{member.portfolio}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
      )
    }
    export default StudentUnion;