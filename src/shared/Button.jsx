import React from "react";

export default function Button({ type = "button", children, ...props }) {
  return (
    <button
      type={type}  // important: forwards type="submit" to the button
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",
      }}
      {...props}
    >
      {children}
    </button>
  );
}
