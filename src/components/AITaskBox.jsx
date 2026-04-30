import { useState } from "react";
import axios from "axios";

export default function AITaskBox() {
  const [input, setInput] = useState("");

  const handleAI = async () => {
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

      alert("✅ Task Created!");
      setInput("");
    } catch (err) {
      console.error(err);
      alert("❌ AI failed");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mt-4">
      <h3 className="font-semibold mb-2">✨ Create Task with AI</h3>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Assign login page to Rahul high priority tomorrow"
        className="w-full p-2 rounded border dark:bg-gray-700"
      />

      <button
        onClick={handleAI}
        className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg"
      >
        Generate
      </button>
    </div>
  );
}
