import { useState } from "react";
import MoodSelector from "../shared/MoodSelector.jsx";

function AddEntry({ onAdd }) {
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("😊");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ content, mood, date: new Date().toISOString() });
    setContent("");
    setMood("😊");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your diary entry..."
        rows={4}
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <MoodSelector mood={mood} setMood={setMood} />
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default AddEntry;
