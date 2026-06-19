import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/axios";
import useAuthStore from "../store/authStore";
import uploadImage from "../images/upload.jpg";
import Layout from "../components/Layout";

function UploadPage() {
  const navigate = useNavigate();
  const token = useAuthStore((state) => state.token);

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (indexToRemove) => {
    setFiles((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleUpload = async () => {
    try {
      setLoading(true);
      setSuccess(false);

      const formData = new FormData();
      files.forEach((file) => formData.append("files", file));

      const res = await api.post("/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newId = res.data?.savedItinerary?._id;

      if (!newId) {
        console.error("Invalid response:", res.data);
        return;
      }

      setSuccess(true);

      setTimeout(() => {
        navigate(`/trip/${newId}`);
      }, 600);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#F6F7FB]">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-10 bg-orange-400 rounded-[40px] p-10 text-white items-center mb-12">
            <div>
              <h1 className="text-5xl font-bold">Upload travel documents</h1>
              <p className="mt-5 text-indigo-100 text-lg">
                Upload flights, hotel bookings and travel confirmations to
                generate your itinerary.
              </p>
            </div>

            <img
              src={uploadImage}
              className="rounded-3xl h-75 object-cover w-full"
            />
          </div>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`bg-white rounded-[40px] p-10 border-2 border-dashed h-72 flex flex-col justify-center items-center transition
              ${dragActive ? "border-orange-400 bg-orange-50" : "border-gray-300"}
            `}
          >
            <h2 className="text-3xl font-bold">Drag and drop files here</h2>

            <p className="mt-4 text-gray-500">PDF, JPG and PNG supported</p>

            <input
              multiple
              type="file"
              id="files"
              className="hidden"
              onChange={handleFileChange}
            />

            <label
              htmlFor="files"
              className="mt-8 bg-orange-400 text-white px-7 py-4 rounded-2xl cursor-pointer"
            >
              Browse Files
            </label>
          </div>

          {files.length > 0 && (
            <div className="mt-10 space-y-4">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-2xl p-5 flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold">{file.name}</h3>
                    <p className="text-gray-500 text-sm">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>

                  <button
                    onClick={() => removeFile(index)}
                    className="text-red-500 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={loading || files.length === 0}
            className="mt-10 w-full bg-orange-400 text-white py-5 rounded-2xl disabled:opacity-50"
          >
            {loading
              ? "Generating itinerary..."
              : success
                ? "Redirecting..."
                : "Generate Itinerary"}
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default UploadPage;
