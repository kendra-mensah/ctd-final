// src/shared/Card.jsx
import React from "react";

export default function Card({ children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      backgroundColor: "#fff",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      {children}
    </div>
  );
}