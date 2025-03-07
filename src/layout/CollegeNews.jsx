// import React from "react";

const newsArticles = [
  {
    title: "New Research Lab Inaugurated",
    date: "February 12, 2024",
    excerpt: "The college has opened a state-of-the-art research lab to promote innovation and development.",
    link: "#",
  },
  {
    title: "Annual Science Fair Announced",
    date: "March 5, 2024",
    excerpt: "Students and faculty are invited to participate in the upcoming annual science fair showcasing groundbreaking projects.",
    link: "#",
  },
  {
    title: "College Ranked Among Top 10 in the Country",
    date: "April 20, 2024",
    excerpt: "Our institution has been ranked among the top 10 colleges in the country for academic excellence and research achievements.",
    link: "#",
  },
];

export default function CollegeNews() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center">College News</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((news, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-white p-6 space-y-3"
          >
            <h2 className="text-xl font-semibold">{news.title}</h2>
            <p className="text-sm text-gray-500">{news.date}</p>
            <p className="text-gray-700">{news.excerpt}</p>
            <a
              href={news.link}
              className="mt-2 inline-block px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
