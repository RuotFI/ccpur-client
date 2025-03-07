import axios from "axios";
import { useEffect, useState } from "react";



const teachingStaffData = [
  {
    "id": 1,
    "Name": "Nehzasoi Simte",
    "Designation_Position": "Associate Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Pol. Science"
},
{
    "id": 2,
    "Name": "Pauchungnung Vaiphei",
    "Designation_Position": "Associate Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Pol. Science"
},
{
    "id": 3,
    "Name": "Pumsiankim",
    "Designation_Position": "Associate Professor & HoD",
    "Nature_of_Appointment": "Regular",
    "Department": "Pol. Science"
},
{
    "id": 4,
    "Name": "Thangkhanlal Ngaihte",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Pol. Science"
},
{
    "id": 5,
    "Name": "H.S. Kaiminhuan",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Pol. Science"
},
{
    "id": 6,
    "Name": "Lily Lalnunmawi",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Fleguler",
    "Department": "Pol. Science"
},
{
    "id": 7,
    "Name": "Thangzamang Ngaihte",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Locally engaged",
    "Department": "Pol. Science"
},
{
    "id": 8,
    "Name": "Pauneilal Haulai",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Locally engaged",
    "Department": "Pol. Science"
},
{
    "id": 9,
    "Name": "Lily L. Tombing",
    "Designation_Position": "Associate Professor & HoD",
    "Nature_of_Appointment": "Regular",
    "Department": "Education"
},
{
    "id": 10,
    "Name": "Sonniang",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Education"
},
{
    "id": 11,
    "Name": "Dr. Jangkholun Mate",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Education"
},
{
    "id": 12,
    "Name": "Nemngaichin",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Education"
},
{
    "id": 13,
    "Name": "Dr. Grace Kim Khaute",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Education"
},
{
    "id": 14,
    "Name": "Lhilhing Mate",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Contract",
    "Department": "Education"
},
{
    "id": 15,
    "Name": "Gladys Nangmuankim Baite",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Contract",
    "Department": "Education"
},
{
    "id": 16,
    "Name": "Hoihvanlal Venny Gangte",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Contract",
    "Department": "Education"
},
{
    "id": 17,
    "Name": "Caroline Zothangmawi",
    "Designation_Position": "Associate Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Geography"
},
{
    "id": 18,
    "Name": "Dr. Lalzagou Neitsial",
    "Designation_Position": "Associate Professor & HoD",
    "Nature_of_Appointment": "Regular",
    "Department": "Geography"
},
{
    "id": 19,
    "Name": "Khupminthang Khongsal",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Geography"
},
{
    "id": 20,
    "Name": "L Lhingneilam",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Geography"
},
{
    "id": 21,
    "Name": "M Thangginmang Haokip",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Geography"
},
{
    "id": 22,
    "Name": "LH Seitinthang",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Geography"
},
{
    "id": 23,
    "Name": "K. Douminlun",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Locally engaged",
    "Department": "Geography"
},
{
    "id": 24,
    "Name": "Stephen Remnalal",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Locally engaged",
    "Department": "Geography"
},
{
    "id": 25,
    "Name": "Latzuitluanga",
    "Designation_Position": "Assistant Professor & HoD",
    "Nature_of_Appointment": "Regular",
    "Department": "Mizo"
},
{
    "id": 26,
    "Name": "K Jenny Zohmingliani",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Mizo"
},
{
    "id": 27,
    "Name": "Elena Saithuami Sello",
    "Designation_Position": "Assistant Professor & HoD",
    "Nature_of_Appointment": "Locally engaged",
    "Department": "Anthropology"
},
{
    "id": 28,
    "Name": "Lhingzouzam Singson",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Locally engaged",
    "Department": "Anthropology"
},
{
    "id": 29,
    "Name": "Dr. Heokip Nemneivah",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Locally engaged",
    "Department": "Anthropology"
},
{
    "id": 30,
    "Name": "Dr. Tongkholal Baite",
    "Designation_Position": "Associate Professor & HoD",
    "Nature_of_Appointment": "Regular",
    "Department": "Economics"
},
{
    "id": 31,
    "Name": "Dr. Ph. Ngamkhokhai Mate",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Economics"
},
{
    "id": 32,
    "Name": "Kamchinhau",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Economics"
},
{
    "id": 33,
    "Name": "Bijumuon",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Economics"
},
{
    "id": 34,
    "Name": "T Thawngkhansiam",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Contract",
    "Department": "Economics"
},
{
    "id": 35,
    "Name": "Singthuam Thomte",
    "Designation_Position": "Associate Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "English"
},
{
    "id": 36,
    "Name": "Nianmuanching Naulak",
    "Designation_Position": "Assistant Professor & HoD",
    "Nature_of_Appointment": "Regular",
    "Department": "English"
},
{
    "id": 37,
    "Name": "Hoikhovah Haokip",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "English"
},
{
    "id": 38,
    "Name": "Man Lun Kim",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "English"
},
{
    "id": 39,
    "Name": "Janice T. Jingsol",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "English"
},
{
    "id": 40,
    "Name": "Dr. Chingbiakmai",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "English"
},
{
    "id": 41,
    "Name": "Dr. Mongneilam Kipgen",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "English"
},
{
    "id": 42,
    "Name": "Euniki Zamhoiting",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Contract",
    "Department": "English"
},
{
    "id": 43,
    "Name": "Olivia Haokip",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Contract",
    "Department": "English"
},
{
    "id": 44,
    "Name": "Nenei Lhungdim",
    "Designation_Position": "Assistant Professor & HoD",
    "Nature_of_Appointment": "Regular",
    "Department": "History"
},
{
    "id": 45,
    "Name": "Khaiminlian",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "History"
},
{
    "id": 46,
    "Name": "Dr. Nengneivah Eva Haokip",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "History"
},
{
    "id": 47,
    "Name": "Ching Ngaih",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Contract",
    "Department": "History"
},
{
    "id": 48,
    "Name": "Ginzamang T. Zomi",
    "Designation_Position": "Associate Professor & HoD",
    "Nature_of_Appointment": "Regular",
    "Department": "Sociology"
},
{
    "id": 49,
    "Name": "T Onkhothong Haokip",
    "Designation_Position": "Associate Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Sociology"
},
{
    "id": 50,
    "Name": "G Gouliansiam",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Locally engaged",
    "Department": "Sociology"
},
{
    "id": 51,
    "Name": "Lunginlien Hanghal",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Locally engaged",
    "Department": "Sociology"
},
{
    "id": 52,
    "Name": "Gary Mangminlien Chongloi",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Locally engaged",
    "Department": "Sociology"
},
{
    "id": 53,
    "Name": "H Esther Gangte",
    "Designation_Position": "Assistant Professor & HoD",
    "Nature_of_Appointment": "Regular",
    "Department": "Botany"
},
{
    "id": 54,
    "Name": "Dr. Hoikhokim",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Botany"
},
{
    "id": 55,
    "Name": "Dr. Ruth Laldinthar",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Botany"
},
{
    "id": 56,
    "Name": "Kambiakkim",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Botany"
},
{
    "id": 57,
    "Name": "Kimneihchawi",
    "Designation_Position": "Assistant Professor & HoD",
    "Nature_of_Appointment": "Regular",
    "Department": "Chemistry"
},
{
    "id": 58,
    "Name": "Dr. Henry N Pangamte",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Chemistry"
},
{
    "id": 59,
    "Name": "Leivon George",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Chemistry"
},
{
    "id": 60,
    "Name": "Dr. Nehjamang Hackip",
    "Designation_Position": "Assistant Professor & HoD",
    "Nature_of_Appointment": "Regular",
    "Department": "Mathematics"
},
{
    "id": 61,
    "Name": "Baby Lamkhonel",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Contract",
    "Department": "Mathematics"
},
{
    "id": 62,
    "Name": "TPauminien",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Locally engaged",
    "Department": "Mathematics"
},
{
    "id": 63,
    "Name": "Khup Tonsing",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Locally engaged",
    "Department": "Mathematics"
},
{
    "id": 64,
    "Name": "Bliss Haublakching",
    "Designation_Position": "Associate Professor & HoD",
    "Nature_of_Appointment": "Regular",
    "Department": "Physics"
},
{
    "id": 65,
    "Name": "Th Thangsingson",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Locally engaged",
    "Department": "Physics"
},
{
    "id": 66,
    "Name": "Md. Anuwar Shah",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Statistics"
},
{
    "id": 67,
    "Name": "Chiin Bink Mawi",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Locally engaged",
    "Department": "Statistics"
},
{
    "id": 68,
    "Name": "Darrokim",
    "Designation_Position": "Associate Professor & HoD",
    "Nature_of_Appointment": "Regular",
    "Department": "Zoology"
},
{
    "id": 69,
    "Name": "Dr. Lalhmuoklien",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Zoology"
},
{
    "id": 70,
    "Name": "Lalrengliani",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Zoology"
},
{
    "id": 71,
    "Name": "Sharon Gangte",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Regular",
    "Department": "Zoology"
},
{
    "id": 72,
    "Name": "Paotinlun Doungel",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Locally engaged",
    "Department": "Geography"
},
{
    "id": 73,
    "Name": "Demminthang Singsit",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Locally engaged",
    "Department": "Pol. Science"
},
{
    "id": 74,
    "Name": "Daniel Cliff Gonmei",
    "Designation_Position": "Assistant Professor",
    "Nature_of_Appointment": "Locally engaged",
    "Department": "Physics"
}
]
const TeachingStaff = () => {
  
  return (
    <div className="w-full lg:px-20 h-full py-12">
        <div>
            <h2 className="text-2xl font-bold text-start py-3">TEACHING STAFF</h2>
        </div>

        <div className="w-full flex justify-start overscroll-x-auto">
            <table className="w-44 lg:w-2/3 bg-white border text-sm border-gray-200 shadow-md rounded-lg">
                <thead className="bg-slate-100">
                    <tr>
                        <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">Sl No.</th>
                        <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">Name</th>
                        <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">Designation</th>
                        <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">Nature of Appointment</th>
                        <th className="px-4 py-1 lg:py-2 border border-gray-300 text-start">Department</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       teachingStaffData.map((member) => (
                            <tr className="hover:bg-gray-100" key={member.id}>
                                <td className="px-4 py-2 border border-gray-300 text-start">{member.id}</td>
                                <td className="px-4 py-2 border border-gray-300 text-start">{member.Name}</td>
                                <td className="px-4 py-2 border border-gray-300 text-start">{member.Designation_Position}</td>
                                <td className="px-4 py-2 border border-gray-300 text-start">{member.Nature_of_Appointment}</td>
                                <td className="px-4 py-2 border border-gray-300 text-start">{member.Department}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default TeachingStaff;
