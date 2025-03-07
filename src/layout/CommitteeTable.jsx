// import React from "react";

const committees = [
  {
    title: "WEBSITE POLICIES COMMITTEE",
    columns: ["Sl. No", "Name", "Designation", "Portfolio"],
    members: [
      [1, "Dr. Siamkhum Guite", "Principal (Regular)", "Chairperson"],
      [2, "Pauchungnung Vaiphei", "Associate Professor & IQAC Head", "Member Secretary"],
      [3, "Dr. Henry N. Pangamte", "Assistant Professor", "IT Nodal Officer"],
      [4, "Lalzuitluanga", "Assistant Professor & Assistant Coordinator IQAC", "Member"],
      [5, "Dr. Nengneivah Eva Haokip", "Assistant Professor", "Web Content Information Manager"],
      [7, "Bijumuon", "Assistant Professor", "Web Administrator"],
      [8, "Khaiminlian", "Assistant Professor", "Technical Support Staff"],
    ],
  },
  {
    title: "STUDENT WELFARE COMMITTEE",
    columns: ["Sl. No", "Name", "Designation", "Assigned Designation"],
    members: [
      [1, "Dr. Siamkhum Guite", "Principal (Regular)", "Chairperson"],
      [2, "Caroline Zothangmawi", "Associate Professor & Vice Principal", "Vice Chairperson"],
      [3, "Dr. Nehjamang Haokip", "Assistant Professor", "Secretary"],
      [4, "Dr. Ph. Ngamkhokhai Mate", "Assistant Professor", "Assistant Secretary"],
      [5, "Dr. D Sonkhojang Haokip", "Associate Professor & HoD History", "Member"],
      [6, "Khaiminlian", "Assistant Professor", "Member"],
    ],
  },
  {
    title: "SC/ST/OBC CELL:",
    columns: ["Sl. No", "Name", "Designation", "Assigned Designation"],
    members: [
      [1, "Ginzamang T. Zomi", "Associate Professor & HoD Sociology", "Chairman"],
      [2, "Kamchinhau", "Assistant Professor", "Vice Chairperson"],
      [3, "Darrokim", "Assistant Professor & HoD Zoology", "Member"],
      [4, "S Lallianmang", "Assistant Professor", "Assistant Secretary"],
      [5, "Dr. Grace Kim Khaute", "Associate Professor", "Member"],
    ],
  },
  {
    title: "SEXUAL HARASSMENT COMMITTEE",
    columns: ["Sl. No", "Name", "Designation", "Assigned Designation"],
    members: [
      [1, "Dr. Siamkhum Guite", "Principal (Regular)", "Chairperson"],
      [2, "Caroline Zothangmawi", "Associate Professor & Vice Principal", "Secretary"],
      [3, "Dr. Tongkholal Baite", "Associate Professor & HoD Economics", "Member"],
      [4, "H. Shila Devi", "Associate Professor & HoD Anthropology", "Member"],
      [5, "Nemngaichin", "Assistant Professor", "Member"],
    ],
  },
  {
    title: "RESEARCH COMMITTEE",
    columns: ["Sl. No", "Designation", "Name", "Assigned Designation"],
    members: [
      [1, "Chairperson", "Dr. Siamkhum Guite", "Principal (Regular)"],
      [2, "Member Secretary", "Dr. Th. Nanachandra Singh", "Associate Professor"],
      [3, "Member", "Dr. Tongkholal Baite", "Associate Professor & HoD Economics"],
      [4, "Member", "Dr. Lalzagou Neihsial", "Associate Professor & HoD Geography"],
      [5, "Member", "Dr. D. Sonkhojang Haokip", "Associate Professor & HoD History"],
    ],
  },
  {
    title: "PHOTOGRAPHY CLUB",
    columns: ["Sl. No", "Name", "Designation", "Assigned Designation"],
    members: [
      [1, "Leivon George", "Assistant Professor", "Teacher Incharge"],
      [2, "Dr. Henry N Pangamte", "Assistant Professor", ""],
    ],
  },
  {
    title: "MINORITY CELL",
    columns: ["Sl. No", "Name", "Designation", "Assigned Designation"],
    members: [
      [1, "Dr. Ph. Ngamkhokhai Mate", "Assistant Professor", "Chairman"],
      [2, "Leivon George", "Assistant Professor", "Secretary"],
      [3, "Nianmuanching Naulak", "Assistant Professor & HoD English", "Member"],
      [4, "Nemngaihchin", "Assistant Professor", "Member"],
    ],
  },
  {
    title: "LITERARY CLUB",
    columns: ["Sl. No", "Name", "Designation", "Assigned Designation"],
    members: [
      [1, "Man lun kim", "Assistant Professor", "Chairman"],
      [2, "Janice T. Jingsol", "Assistant Professor", "Secretary"],
      [3, "Dr. Grace Kim Khaute", "Assistant Professor", "Member"],
      [4, "Dr. Chingbiakmawi", "Assistant Professor", "Member"],
      [5, "Thangkhanlal Ngaihte", "Assistant Professor", "Member"],
      [6, "Dr. Nengneivah Eva Haokip", "Assistant Member", "Member"],
    ],
  },
  // Add other committees in the same format
];

const CommitteeTable = () => {
  return (
    <div className="container mx-auto py-12">
      {committees.map((committee, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-bold text-center p-2 rounded">
            {committee.title}
          </h2>
          <div className="overflow-x-auto flex justify-center">
            <table className="lg:w-2/3 border border-gray-300 mt-2">
              <thead className="bg-slate-100">
              <tr>
                <th colSpan="4" className="w-full text-center py-3 border border-gray-300">ACADEMIC BANK OF CREDITS</th>
            </tr>
                <tr>
                  {committee.columns.map((col, i) => (
                    <th key={i} className="border border-gray-300 px-4 py-2 text-start">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {committee.members.map((member, i) => (
                  <tr key={i} className="border border-gray-300">
                    {member.map((data, j) => (
                      <td key={j} className="border border-gray-300 px-4 py-2">
                        {data}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommitteeTable;