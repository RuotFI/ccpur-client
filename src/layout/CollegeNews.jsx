// import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";
const BASE_API = import.meta.env.VITE_BASE_API;


export default function CollegeNews() {

 const [error, setError] = useState(null);
  const [pdfList, setPdfList] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get(
          (`${BASE_API}/api/documents`)
        );
        setPdfList(response.data);
      } catch (error) {
        console.error("Error fetching documents:", error);
        setError("No new notifications");
      } finally {
        // setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const handlePreview = async (doc_id) => {
    try {
      // setLoading(true);
      const response = await axios.get(
        (`${BASE_API}/api/documents/${doc_id}`)
      );
      window.open(response.data.fileUrl, "_blank");
    } catch (error) {
      console.error("Error fetching document:", error);
      setError("Error fetching document for preview.", error);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center">Announcement</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdfList.map((doc, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-white p-6 space-y-3"
          >
            <h2 className="text-xl font-semibold">{doc.title}</h2>
            <p className="text-sm text-gray-500">{doc.updated_at}</p>
            <p className="text-gray-700">{doc.description}</p>
            <button
              onClick={() => handlePreview(doc.doc_id)}
              className="mt-2 inline-block px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
