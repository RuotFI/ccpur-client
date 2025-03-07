// import { Link } from "react-router-dom";
import notification from "../assets/notification.png";
import { useEffect, useState } from "react";
import axios from "axios";
const BASE_API = import.meta.env.REACT_APP_BASE_API;
// const notification = [
//   {

//   }
// ]

const Notification = () => {
  // const [loading, setLoading] = useState(true);
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
    <div className="animate-pulse group z-50 w-full px-5 lg:py-1 bg-sky-100 border-b-2 border-blue-500 text-center flex items-center justify-start lg:gap-3">
      <div className="relative overflow-hidden w-full">
        {/* Wrapper for scrolling content */}
        <div className="animate-marquee text-gray-700  flex items-center gap-12 whitespace-nowrap">
          <div>{error && <div className="text-red-500">{error}</div>}</div>

          {/* {loading && <div>Loading...</div>} */}
          {pdfList.map((doc) => (
            <div key={doc.id} className="flex items-center">
              <img
                src={notification}
                className="w-8 h-8 animate-pulse"
                alt="notification"
              />
              <div className="ml-3">
                <button
                  onClick={() => handlePreview(doc.doc_id)}
                  className="text-sm font-semibold hover:text-gray-600 hover:underline"
                >
                  {doc.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
