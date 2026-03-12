import React from "react";

export default function MoodSelector({ mood, setMood }) {
  const moods = ["😊", "😢", "😡", "😎", "😴"];

  return (
    <div style={{ margin: "1rem 0" }}>
      <label style={{ display: "block", marginBottom: "0.5rem" }}>Mood:</label>
      {moods.map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => setMood(m)}
          style={{
            fontSize: "1.5rem",
            marginRight: "0.5rem",
            padding: "0.25rem 0.5rem",
            border: mood === m ? "2px solid blue" : "1px solid gray",
            borderRadius: "5px",
            background: "white",
            cursor: "pointer",
          }}
        >
          {m}
        </button>
      ))}
    </div>
  );
}
