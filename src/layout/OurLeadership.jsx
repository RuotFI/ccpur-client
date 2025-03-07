import { useEffect, useState } from "react";
import Footer2 from "./Footer2";
import AboutUsLink from "./AboutUsLink";

const leadershipData = [
  {
    title: "PRINCIPAL",
    name: "Dr. Siamkhum Guite",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ultrices lacus. Ut sit amet ligula risus. Sed tincidunt dui ac ex accumsan pretium. Phasellus bibendum eu velit eu eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat pharetra nunc, sed faucibus diam dapibus non. Nam venenatis enim eu dolor faucibus ultrices. Cras a ullamcorper nulla. Aliquam sit amet elit efficitur, tempus diam sed, egestas arcu. Aliquam laoreet, dolor vel porttitor eleifend, sapien est ullamcorper metus, laoreet congue augue nunc non arcu. Praesent faucibus varius enim a egestas. Pellentesque eleifend vulputate turpis a porttitor. Donec ornare tellus in quam pharetra maximus.",
    email: "Principal@cppurcollege.edu.in",
    image: "https://www.churachandpurcollege.edu.in/prin.jpg", // Replace with actual image URL
  },
  {
    title: "VICE PRINCIPAL",
    name: "Caroline Zothangmawi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ultrices lacus. Ut sit amet ligula risus. Sed tincidunt dui ac ex accumsan pretium. Phasellus bibendum eu velit eu eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat pharetra nunc, sed faucibus diam dapibus non. Nam venenatis enim eu dolor faucibus ultrices. Cras a ullamcorper nulla. Aliquam sit amet elit efficitur, tempus diam sed, egestas arcu. Aliquam laoreet, dolor vel porttitor eleifend, sapien est ullamcorper metus, laoreet congue augue nunc non arcu. Praesent faucibus varius enim a egestas. Pellentesque eleifend vulputate turpis a porttitor. Donec ornare tellus in quam pharetra maximus.",
    email: "Viceprincipal@cppurcollege.edu.in",
    image: "https://www.churachandpurcollege.edu.in/Photos/P14082004625.jpeg", // Replace with actual image URL
  },
  {
    title: "HEAD-IQAC",
    name: "Shri Pauchungnung Vaiphei",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ultrices lacus. Ut sit amet ligula risus. Sed tincidunt dui ac ex accumsan pretium. Phasellus bibendum eu velit eu eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat pharetra nunc, sed faucibus diam dapibus non. Nam venenatis enim eu dolor faucibus ultrices. Cras a ullamcorper nulla. Aliquam sit amet elit efficitur, tempus diam sed, egestas arcu. Aliquam laoreet, dolor vel porttitor eleifend, sapien est ullamcorper metus, laoreet congue augue nunc non arcu. Praesent faucibus varius enim a egestas. Pellentesque eleifend vulputate turpis a porttitor. Donec ornare tellus in quam pharetra maximus.",
    email: "headiqac@cppurcollege.edu.in",
    image: "https://www.churachandpurcollege.edu.in/iqac%20coordinator.jpg", // Replace with actual image URL
  },
  {
    title: "CONTROLLER Of EXAMINATION",
    name: "Jaden Wilson",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ultrices lacus. Ut sit amet ligula risus. Sed tincidunt dui ac ex accumsan pretium. Phasellus bibendum eu velit eu eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat pharetra nunc, sed faucibus diam dapibus non. Nam venenatis enim eu dolor faucibus ultrices. Cras a ullamcorper nulla. Aliquam sit amet elit efficitur, tempus diam sed, egestas arcu. Aliquam laoreet, dolor vel porttitor eleifend, sapien est ullamcorper metus, laoreet congue augue nunc non arcu. Praesent faucibus varius enim a egestas. Pellentesque eleifend vulputate turpis a porttitor. Donec ornare tellus in quam pharetra maximus.",
    email: "coe@cppurcollege.edu.in",
    image: "https://www.churachandpurcollege.edu.in/iqac%20coordinator.jpg", // Replace with actual image URL
  },
  {
    title: "DEAN OF SCIENCE",
    name: "Bliss Haubiakching",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ultrices lacus. Ut sit amet ligula risus. Sed tincidunt dui ac ex accumsan pretium. Phasellus bibendum eu velit eu eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat pharetra nunc, sed faucibus diam dapibus non. Nam venenatis enim eu dolor faucibus ultrices. Cras a ullamcorper nulla. Aliquam sit amet elit efficitur, tempus diam sed, egestas arcu. Aliquam laoreet, dolor vel porttitor eleifend, sapien est ullamcorper metus, laoreet congue augue nunc non arcu. Praesent faucibus varius enim a egestas. Pellentesque eleifend vulputate turpis a porttitor. Donec ornare tellus in quam pharetra maximus.",
    email: "deanofscience@cppurcollege.edu.in",
    image: "https://www.churachandpurcollege.edu.in/Photos/P240820103.jpg", // Replace with actual image URL
  },
  {
    title: "DEAN OF SOCIAL SCIENCE",
    name: "Nehzasoi Simte",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ultrices lacus. Ut sit amet ligula risus. Sed tincidunt dui ac ex accumsan pretium. Phasellus bibendum eu velit eu eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat pharetra nunc, sed faucibus diam dapibus non. Nam venenatis enim eu dolor faucibus ultrices. Cras a ullamcorper nulla. Aliquam sit amet elit efficitur, tempus diam sed, egestas arcu. Aliquam laoreet, dolor vel porttitor eleifend, sapien est ullamcorper metus, laoreet congue augue nunc non arcu. Praesent faucibus varius enim a egestas. Pellentesque eleifend vulputate turpis a porttitor. Donec ornare tellus in quam pharetra maximus.",
    email: "deanofsocialscience@cppurcollege.edu.in",
    image: "https://www.churachandpurcollege.edu.in/Photos/P29082002146.jpg", // Replace with actual image URL
  },
  {
    title: "TEACHING STAFF",
    staffList: [
      {
        "id": 1,
        "Name": "Nehzasoi Simte",
        "Designation": "Associate Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Pol. Science"
    },
    {
        "id": 2,
        "Name": "Pauchungnung Vaiphei",
        "Designation": "Associate Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Pol. Science"
    },
    {
        "id": 3,
        "Name": "Pumsiankim",
        "Designation": "Associate Professor & HoD",
        "Nature_of_Appointment": "Regular",
        "Department": "Pol. Science"
    },
    {
        "id": 4,
        "Name": "Thangkhanlal Ngaihte",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Pol. Science"
    },
    {
        "id": 5,
        "Name": "H.S. Kaiminhuan",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Pol. Science"
    },
    {
        "id": 6,
        "Name": "Lily Lalnunmawi",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Fleguler",
        "Department": "Pol. Science"
    },
    {
        "id": 7,
        "Name": "Thangzamang Ngaihte",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Locally engaged",
        "Department": "Pol. Science"
    },
    {
        "id": 8,
        "Name": "Pauneilal Haulai",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Locally engaged",
        "Department": "Pol. Science"
    },
    {
        "id": 9,
        "Name": "Lily L. Tombing",
        "Designation": "Associate Professor & HoD",
        "Nature_of_Appointment": "Regular",
        "Department": "Education"
    },
    {
        "id": 10,
        "Name": "Sonniang",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Education"
    },
    {
        "id": 11,
        "Name": "Dr. Jangkholun Mate",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Education"
    },
    {
        "id": 12,
        "Name": "Nemngaichin",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Education"
    },
    {
        "id": 13,
        "Name": "Dr. Grace Kim Khaute",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Education"
    },
    {
        "id": 14,
        "Name": "Lhilhing Mate",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Contract",
        "Department": "Education"
    },
    {
        "id": 15,
        "Name": "Gladys Nangmuankim Baite",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Contract",
        "Department": "Education"
    },
    {
        "id": 16,
        "Name": "Hoihvanlal Venny Gangte",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Contract",
        "Department": "Education"
    },
    {
        "id": 17,
        "Name": "Caroline Zothangmawi",
        "Designation": "Associate Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Geography"
    },
    {
        "id": 18,
        "Name": "Dr. Lalzagou Neitsial",
        "Designation": "Associate Professor & HoD",
        "Nature_of_Appointment": "Regular",
        "Department": "Geography"
    },
    {
        "id": 19,
        "Name": "Khupminthang Khongsal",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Geography"
    },
    {
        "id": 20,
        "Name": "L Lhingneilam",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Geography"
    },
    {
        "id": 21,
        "Name": "M Thangginmang Haokip",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Geography"
    },
    {
        "id": 22,
        "Name": "LH Seitinthang",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Geography"
    },
    {
        "id": 23,
        "Name": "K. Douminlun",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Locally engaged",
        "Department": "Geography"
    },
    {
        "id": 24,
        "Name": "Stephen Remnalal",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Locally engaged",
        "Department": "Geography"
    },
    {
        "id": 25,
        "Name": "Latzuitluanga",
        "Designation": "Assistant Professor & HoD",
        "Nature_of_Appointment": "Regular",
        "Department": "Mizo"
    },
    {
        "id": 26,
        "Name": "K Jenny Zohmingliani",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Mizo"
    },
    {
        "id": 27,
        "Name": "Elena Saithuami Sello",
        "Designation": "Assistant Professor & HoD",
        "Nature_of_Appointment": "Locally engaged",
        "Department": "Anthropology"
    },
    {
        "id": 28,
        "Name": "Lhingzouzam Singson",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Locally engaged",
        "Department": "Anthropology"
    },
    {
        "id": 29,
        "Name": "Dr. Heokip Nemneivah",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Locally engaged",
        "Department": "Anthropology"
    },
    {
        "id": 30,
        "Name": "Dr. Tongkholal Baite",
        "Designation": "Associate Professor & HoD",
        "Nature_of_Appointment": "Regular",
        "Department": "Economics"
    },
    {
        "id": 31,
        "Name": "Dr. Ph. Ngamkhokhai Mate",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Economics"
    },
    {
        "id": 32,
        "Name": "Kamchinhau",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Economics"
    },
    {
        "id": 33,
        "Name": "Bijumuon",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Economics"
    },
    {
        "id": 34,
        "Name": "T Thawngkhansiam",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Contract",
        "Department": "Economics"
    },
    {
        "id": 35,
        "Name": "Singthuam Thomte",
        "Designation": "Associate Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "English"
    },
    {
        "id": 36,
        "Name": "Nianmuanching Naulak",
        "Designation": "Assistant Professor & HoD",
        "Nature_of_Appointment": "Regular",
        "Department": "English"
    },
    {
        "id": 37,
        "Name": "Hoikhovah Haokip",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "English"
    },
    {
        "id": 38,
        "Name": "Man Lun Kim",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "English"
    },
    {
        "id": 39,
        "Name": "Janice T. Jingsol",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "English"
    },
    {
        "id": 40,
        "Name": "Dr. Chingbiakmai",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "English"
    },
    {
        "id": 41,
        "Name": "Dr. Mongneilam Kipgen",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "English"
    },
    {
        "id": 42,
        "Name": "Euniki Zamhoiting",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Contract",
        "Department": "English"
    },
    {
        "id": 43,
        "Name": "Olivia Haokip",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Contract",
        "Department": "English"
    },
    {
        "id": 44,
        "Name": "Nenei Lhungdim",
        "Designation": "Assistant Professor & HoD",
        "Nature_of_Appointment": "Regular",
        "Department": "History"
    },
    {
        "id": 45,
        "Name": "Khaiminlian",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "History"
    },
    {
        "id": 46,
        "Name": "Dr. Nengneivah Eva Haokip",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "History"
    },
    {
        "id": 47,
        "Name": "Ching Ngaih",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Contract",
        "Department": "History"
    },
    {
        "id": 48,
        "Name": "Ginzamang T. Zomi",
        "Designation": "Associate Professor & HoD",
        "Nature_of_Appointment": "Regular",
        "Department": "Sociology"
    },
    {
        "id": 49,
        "Name": "T Onkhothong Haokip",
        "Designation": "Associate Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Sociology"
    },
    {
        "id": 50,
        "Name": "G Gouliansiam",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Locally engaged",
        "Department": "Sociology"
    },
    {
        "id": 51,
        "Name": "Lunginlien Hanghal",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Locally engaged",
        "Department": "Sociology"
    },
    {
        "id": 52,
        "Name": "Gary Mangminlien Chongloi",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Locally engaged",
        "Department": "Sociology"
    },
    {
        "id": 53,
        "Name": "H Esther Gangte",
        "Designation": "Assistant Professor & HoD",
        "Nature_of_Appointment": "Regular",
        "Department": "Botany"
    },
    {
        "id": 54,
        "Name": "Dr. Hoikhokim",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Botany"
    },
    {
        "id": 55,
        "Name": "Dr. Ruth Laldinthar",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Botany"
    },
    {
        "id": 56,
        "Name": "Kambiakkim",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Botany"
    },
    {
        "id": 57,
        "Name": "Kimneihchawi",
        "Designation": "Assistant Professor & HoD",
        "Nature_of_Appointment": "Regular",
        "Department": "Chemistry"
    },
    {
        "id": 58,
        "Name": "Dr. Henry N Pangamte",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Chemistry"
    },
    {
        "id": 59,
        "Name": "Leivon George",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Chemistry"
    },
    {
        "id": 60,
        "Name": "Dr. Nehjamang Hackip",
        "Designation": "Assistant Professor & HoD",
        "Nature_of_Appointment": "Regular",
        "Department": "Mathematics"
    },
    {
        "id": 61,
        "Name": "Baby Lamkhonel",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Contract",
        "Department": "Mathematics"
    },
    {
        "id": 62,
        "Name": "TPauminien",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Locally engaged",
        "Department": "Mathematics"
    },
    {
        "id": 63,
        "Name": "Khup Tonsing",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Locally engaged",
        "Department": "Mathematics"
    },
    {
        "id": 64,
        "Name": "Bliss Haublakching",
        "Designation": "Associate Professor & HoD",
        "Nature_of_Appointment": "Regular",
        "Department": "Physics"
    },
    {
        "id": 65,
        "Name": "Th Thangsingson",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Locally engaged",
        "Department": "Physics"
    },
    {
        "id": 66,
        "Name": "Md. Anuwar Shah",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Statistics"
    },
    {
        "id": 67,
        "Name": "Chiin Bink Mawi",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Locally engaged",
        "Department": "Statistics"
    },
    {
        "id": 68,
        "Name": "Darrokim",
        "Designation": "Associate Professor & HoD",
        "Nature_of_Appointment": "Regular",
        "Department": "Zoology"
    },
    {
        "id": 69,
        "Name": "Dr. Lalhmuoklien",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Zoology"
    },
    {
        "id": 70,
        "Name": "Lalrengliani",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Zoology"
    },
    {
        "id": 71,
        "Name": "Sharon Gangte",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Regular",
        "Department": "Zoology"
    },
    {
        "id": 72,
        "Name": "Paotinlun Doungel",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Locally engaged",
        "Department": "Geography"
    },
    {
        "id": 73,
        "Name": "Demminthang Singsit",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Locally engaged",
        "Department": "Pol. Science"
    },
    {
        "id": 74,
        "Name": "Daniel Cliff Gonmei",
        "Designation": "Assistant Professor",
        "Nature_of_Appointment": "Locally engaged",
        "Department": "Physics"
    }
    ],
  },
  {
    title: "NON-TEACHING STAFF",
    staffList: [
      {
        "id": 1,
        "Name": "Melody Zenthianneihhoih",
        "Designation": "Librarian",
        "Nature_of_Appointment": "Engaged",
        "Department": "N/A"
      },
      {
        "id": 2,
        "Name": "T. Mangminlian",
        "Designation": "Cashier/Accountant",
        "Nature_of_Appointment": "Engaged",
        "Department": "N/A"
      },
      {
        "id": 3,
        "Name": "T. Jamson",
        "Designation": "Billing Clerk",
        "Nature_of_Appointment": "Engaged",
        "Department": "N/A"
      },
      {
        "id": 4,
        "Name": "Janggoumang Khongsai",
        "Designation": "LDC",
        "Nature_of_Appointment": "Engaged",
        "Department": "N/A"
      },
      {
        "id": 5,
        "Name": "Ngamgousiem Gangte",
        "Designation": "LDC",
        "Nature_of_Appointment": "Engaged",
        "Department": "N/A"
      },
      {
        "id": 6,
        "Name": "Chiching",
        "Designation": "LDC",
        "Nature_of_Appointment": "Engaged",
        "Department": "N/A"
      },
      {
        "id": 7,
        "Name": "Vumkhanhau",
        "Designation": "Laboratory Attendant",
        "Nature_of_Appointment": "Regular",
        "Department": "N/A"
      },
      {
        "id": 8,
        "Name": "S. Paupi",
        "Designation": "Laboratory Attendant",
        "Nature_of_Appointment": "Regular",
        "Department": "N/A"
      },
      {
        "id": 9,
        "Name": "Lutjapao Singson",
        "Designation": "Laboratory Attendant",
        "Nature_of_Appointment": "Regular",
        "Department": "N/A"
      },
      {
        "id": 10,
        "Name": "Shokhothong Touthang",
        "Designation": "Chowkidar",
        "Nature_of_Appointment": "Regular",
        "Department": "N/A"
      },
      {
        "id": 11,
        "Name": "Khailal Gangto",
        "Designation": "Chowkidar",
        "Nature_of_Appointment": "Regular",
        "Department": "N/A"
      },
      {
        "id": 12,
        "Name": "H. Goukhanpau",
        "Designation": "Peon",
        "Nature_of_Appointment": "Regular",
        "Department": "N/A"
      },
      {
        "id": 13,
        "Name": "Lalramlien",
        "Designation": "Peon",
        "Nature_of_Appointment": "Regular",
        "Department": "N/A"
      },
      {
        "id": 14,
        "Name": "Lunkhanhau",
        "Designation": "Peon",
        "Nature_of_Appointment": "Regular",
        "Department": "N/A"
      },
      {
        "id": 15,
        "Name": "Ginkhankhual",
        "Designation": "Peon",
        "Nature_of_Appointment": "Regular",
        "Department": "N/A"
      },
      {
        "id": 16,
        "Name": "Dimneichin",
        "Designation": "Peon",
        "Nature_of_Appointment": "Regular",
        "Department": "N/A"
      },
      {
        "id": 17,
        "Name": "Lalparmawi",
        "Designation": "Peon",
        "Nature_of_Appointment": "Regular",
        "Department": "N/A"
      },
      {
        "id": 18,
        "Name": "Chinzaniang",
        "Designation": "Hostel Cook",
        "Nature_of_Appointment": "Regular",
        "Department": "N/A"
      },
      {
        "id": 19,
        "Name": "L. Chinbiaksuan",
        "Designation": "MTS",
        "Nature_of_Appointment": "Engaged",
        "Department": "N/A"
      },
      {
        "id": 20,
        "Name": "Hatneiting",
        "Designation": "MTS",
        "Nature_of_Appointment": "Engaged",
        "Department": "N/A"
      },
      {
        "id": 21,
        "Name": "Chinkhenthang",
        "Designation": "MTS/Chowkidar",
        "Nature_of_Appointment": "Engaged",
        "Department": "N/A"
      },
      {
        "id": 22,
        "Name": "H. Pumgin",
        "Designation": "MTS",
        "Nature_of_Appointment": "Engaged",
        "Department": "N/A"
      },
      {
        "id": 23,
        "Name": "G. Kamzamang",
        "Designation": "MTS/Driver",
        "Nature_of_Appointment": "Engaged",
        "Department": "N/A"
      },
      {
        "id": 24,
        "Name": "Hoineichong Touthang",
        "Designation": "MTS",
        "Nature_of_Appointment": "Engaged",
        "Department": "N/A"
      },
      {
        "id": 25,
        "Name": "Chinbiaklian Vualnam",
        "Designation": "MTS",
        "Nature_of_Appointment": "Engaged",
        "Department": "N/A"
      },
      {
        "id": 26,
        "Name": "Mary Lalvenghim",
        "Designation": "MTS",
        "Nature_of_Appointment": "Engaged",
        "Department": "N/A"
      },
      {
        "id": 27,
        "Name": "Zothanpuii",
        "Designation": "MTS",
        "Nature_of_Appointment": "Engaged",
        "Department": "N/A"
      },
      {
        "id": 28,
        "Name": "L. Khamminlian Ngaihte",
        "Designation": "MTS",
        "Nature_of_Appointment": "Engaged",
        "Department": "N/A"
      }
    ],
  },
];

const OurLeadership = () => {
  const [activeTab, setActiveTab] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-slate-100 pt-6 lg:pt-16 animate-fadeIn">
      <AboutUsLink />
      <h2 className="text-center text-3xl lg:text-4xl font-extrabold text-gray-800 mb-12">
        <span className="text-sky-600 font-medium">Our</span> Leadership
      </h2>

      <div className="mb-12 w-full flex flex-col lg:flex-row gap-12 items-center justify-center">
        <div className="flex flex-col gap-2 w-full px-5 lg:w-80">
          {leadershipData.map((member, index) => (
            <button
              key={index}
              className={`px-2 h-14 text-start border border-gray-300 w-full font-normal text-md ${
                activeTab === index + 1 ? "bg-sky-700 text-white" : "bg-white text-gray-900"
              }`}
              onClick={() => setActiveTab(index + 1)}
            >
              {member.title.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="w-full lg:w-2/4 shadow-xl">
          {leadershipData
            .filter((_, index) => activeTab === index + 1)
            .map((member, index) => (
              <div key={index} className="p-3 border text-center w-full animate-fadeIn">
                {member.staffList ? (
                  // Render table for Teaching/Non-Teaching Staff
                  <div className="overflow-y-auto h-96">
                    <h2 className="font-semibold text-lg text-start text-red-600">{member.title}</h2>
                    <table className="w-full border-collapse border border-gray-300 mt-4">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="border border-gray-300 px-3 py-2">Sl. no.</th>
                          <th className="border border-gray-300 px-3 py-2">Name</th>
                          <th className="border border-gray-300 px-3 py-2">Designation</th>
                          <th className="border border-gray-300 px-3 py-2">Nature of Appointment</th>
                          <th className="border border-gray-300 px-3 py-2">Department</th>
                        </tr>
                      </thead>
                      <tbody>
                        {member.staffList.map((staff, index) => (
                          <tr key={index} className="text-gray-700">
                            <td className="border border-gray-300 px-3 py-2 text-start">{index + 1}</td>
                            <td className="border border-gray-300 px-3 py-2 text-start">{staff.Name}</td>
                            <td className="border border-gray-300 px-3 py-2 text-start">{staff.Designation}</td>
                            <td className="border border-gray-300 px-3 py-2 text-start">{staff.Nature_of_Appointment}</td>
                            <td className="border border-gray-300 px-3 py-2 text-start">{staff.Department}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  // Render normal leadership details
                  <div className="p-3 flex flex-col lg:flex-row gap-5">
                    <div className="w-full px-3">
                      <h2 className="font-semibold text-start text-red-600 text-xl">{member.name}</h2>
                      <p className="text-md text-start">{member.title}</p>
                      <p className="py-3 text-justify text-sm text-gray-600">{member.description}</p>
                    </div>
                    <div className="lg:w-2/3 px-3 py-3">
                      <img src={member.image} className="w-full h-56 lg:w-80 lg:h-72 object-cover" />
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default OurLeadership;
