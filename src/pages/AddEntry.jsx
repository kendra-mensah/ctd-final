// src/pages/AddEntry.jsx
import React, { useState, useEffect } from "react";

export default function AddEntry({ onAdd, onUpdate, editingEntry, onCancel }) {
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("happy");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  // Populate form when editing
  useEffect(() => {
    if (editingEntry) {
      setContent(editingEntry.content);
      setMood(editingEntry.mood);
      setDate(editingEntry.date);
    }
  }, [editingEntry]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!content.trim()) {
      alert("Please enter some content for your diary entry.");
      return;
    }

    const entryData = { content, mood, date };

    if (editingEntry) {
      onUpdate(editingEntry.id, entryData); // Update existing entry
    } else {
      onAdd(entryData); // Create new entry
    }

    // Reset form
    setContent("");
    setMood("happy");
    setDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "2rem",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>{editingEntry ? "Edit Entry" : "Add Diary Entry"}</h2>

      <label style={{ display: "block", marginBottom: "0.5rem" }}>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "1rem" }}
        />
      </label>

      <label style={{ display: "block", marginBottom: "0.5rem" }}>
        Content:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          style={{ display: "block", width: "100%", marginBottom: "1rem" }}
        />
      </label>

      <label style={{ display: "block", marginBottom: "0.5rem" }}>
        Mood:
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "1rem" }}
        >
          <option value="happy">happy</option>
          <option value="ok">ok</option>
          <option value="tired">tired</option>
          <option value="not feeling it">not feeling it</option>
        </select>
      </label>

      <button
        type="submit"
        style={{
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          cursor: "pointer",
          marginRight: "0.5rem",
        }}
      >
        {editingEntry ? "Update Entry" : "Add Entry"}
      </button>

      {editingEntry && (
        <button
          type="button"
          onClick={onCancel}
          style={{
            backgroundColor: "#999",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      )}
    </form>
  );
}