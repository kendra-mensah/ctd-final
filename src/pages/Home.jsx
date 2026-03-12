// src/pages/Home.jsx
import React, { useState, useCallback, useEffect } from "react";
import AddEntry from "./AddEntry.jsx";
import Card from "../shared/Card.jsx";

export default function Home() {
  const [entries, setEntries] = useState([]);
  const [editingEntry, setEditingEntry] = useState(null);

  // Create entry
  const addEntry = useCallback(
    (entry) => {
      const newEntry = { ...entry, id: Date.now() };
      setEntries((prev) => [newEntry, ...prev]);
    },
    [setEntries]
  );

  // Update entry
  const updateEntry = useCallback(
    (id, updatedData) => {
      setEntries((prev) =>
        prev.map((entry) => (entry.id === id ? { ...entry, ...updatedData } : entry))
      );
      setEditingEntry(null);
    },
    [setEntries]
  );

  // Delete entry
  const deleteEntry = useCallback(
    (id) => {
      setEntries((prev) => prev.filter((entry) => entry.id !== id));
      if (editingEntry && editingEntry.id === id) setEditingEntry(null);
    },
    [setEntries, editingEntry]
  );

  // Load entries from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  // Save entries to localStorage
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  return (
    <div style={{ padding: "1rem", maxWidth: "700px" }}>
      <h1>My Diary</h1>

      {/* AddEntry form */}
      <AddEntry
        onAdd={addEntry}
        onUpdate={updateEntry}
        editingEntry={editingEntry}
        onCancel={() => setEditingEntry(null)}
      />

      {/* Conditional messages */}
      {entries.length === 0 && <p>No diary entries yet. Add one!</p>}
      {entries.length > 5 && <p>Wow! You have a lot of entries today!</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {entries.map((entry) => (
          <li key={entry.id} style={{ marginBottom: "1rem" }}>
            <Card>
              <p><strong>Date:</strong> {entry.date}</p>
              <p><strong>Content:</strong> {entry.content || <em>No content entered</em>}</p>
              <p><strong>Mood:</strong> {entry.mood}</p>
              {entry.mood === "not feeling it" && (
                <p style={{ color: "red" }}>Hope tomorrow is better!</p>
              )}

              <button
                onClick={() => setEditingEntry(entry)}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginRight: "0.5rem",
                }}
              >
                Edit
              </button>

              <button
                onClick={() => deleteEntry(entry.id)}
                style={{
                  backgroundColor: "#ff4d4f",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}