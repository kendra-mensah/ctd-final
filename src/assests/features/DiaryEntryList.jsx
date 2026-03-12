// src/features/DiaryEntryList.jsx
import React from "react";
import DiaryEntryItem from "../shared/DiaryEntryItem.jsx";

function DiaryEntryList({ entries }) {
  if (!entries || entries.length === 0) {
    return <p>No diary entries yet.</p>;
  }

  return (
    <div className="diary-entry-list">
      {entries.map((entry) => (
        <DiaryEntryItem key={entry.id} entry={entry} />
      ))}
    </div>
  );
}

export default DiaryEntryList;
