// src/shared/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ title }) {
  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <h1>{title}</h1>
      <nav style={{ marginTop: "0.5rem" }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            marginRight: "1rem",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/add"
          style={({ isActive }) => ({
            marginRight: "1rem",
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Add Entry
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}