// src/shared/DiaryEntryItem.jsx
import React from "react";

function DiaryEntryItem({ entry }) {
  const { date, content, mood } = entry;

  return (
    <div className="diary-entry-item">
      <div className="diary-entry-header">
        <span className="diary-entry-date">{date}</span>
        <span className="diary-entry-mood">{mood}</span>
      </div>
      <p className="diary-entry-content">{content}</p>
    </div>
  );
}

export default DiaryEntryItem;

