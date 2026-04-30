import { useState } from "react";
import axios from "axios";

export default function AIModal({ open, onClose }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleGenerate = async () => {
    setLoading(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/ai/generate-task`,
        { input },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("✅ Task created!");
      setInput("");
      onClose();
    } catch (err) {
      console.error(err);
      alert("❌ AI failed");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-[400px] shadow-lg">
        
        <h2 className="text-lg font-semibold mb-3">
          ✨ AI Task Assistant
        </h2>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Assign login page to Rahul high priority tomorrow"
          className="w-full p-2 border rounded dark:bg-gray-800"
        />

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose}>Cancel</button>

          <button
            onClick={handleGenerate}
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>

      </div>
    </div>
  );
}
