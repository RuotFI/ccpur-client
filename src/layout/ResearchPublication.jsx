

const publications = [
  {
    title: "Advancements in Artificial Intelligence",
    author: "Dr. John Doe",
    date: "January 15, 2024",
    link: "#",
  },
  {
    title: "Quantum Computing: The Next Frontier",
    author: "Prof. Jane Smith",
    date: "February 10, 2024",
    link: "#",
  },
  {
    title: "Renewable Energy Innovations",
    author: "Dr. Alan Turing",
    date: "March 5, 2024",
    link: "#",
  },
];

export default function ResearchPublication() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center">Research & Publications</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-white p-6 space-y-3"
          >
            <h2 className="text-xl font-semibold">{pub.title}</h2>
            <p className="text-gray-600">By {pub.author}</p>
            <p className="text-sm text-gray-500">{pub.date}</p>
            <a
              href={pub.link}
              className="mt-2 inline-block px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Read More
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-lg text-gray-700">Want to contribute your research?</p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Submit Your Work
        </button>
      </div>
    </div>
  );
}
