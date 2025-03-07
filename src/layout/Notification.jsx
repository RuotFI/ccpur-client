
import { Link } from "react-router-dom";
import notification from "../assets/notification.png";
import { useEffect, useState } from "react";
import axios from "axios";


// const notification = [
//   {

//   }
// ]


const Notification = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pdfList, setPdfList] = useState([]);


  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get("http://192.168.1.11:8000/api/documents");
        setPdfList(response.data);
      } catch (error) {
        console.error("Error fetching documents:", error);
        setError("Error fetching documents. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchDocuments();
  }, []);

  const handlePreview = async (doc_id) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://192.168.1.11:8000/api/documents/${doc_id}`);
      window.open(response.data.fileUrl, "_blank");
    } catch (error) {
      console.error("Error fetching document:", error);
      setError("Error fetching document for preview.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fadeIn group z-50 w-full px-5 lg:py-1 bg-sky-100 border-b-2 border-red-600 text-center flex items-center justify-start lg:gap-3">
      <div className="relative overflow-hidden w-full">
        {/* Wrapper for scrolling content */}
        <div className="animate-marquee text-black flex items-center gap-12 whitespace-nowrap">
          {
            loading && <div>Loading...</div>
          }
          {
            pdfList.map((doc) => (
              <div key={doc.id} className="flex items-center">
                <img
                  src={notification}
                  className="w-8 h-8 animate-pulse"
                  alt="notification"
                />
                <div className="ml-3">
                  <button
                    onClick={() => handlePreview(doc.doc_id)}
                    className="text-sm font-semibold hover:text-sky-500"
                  >
                    {doc.title}
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Notification;
