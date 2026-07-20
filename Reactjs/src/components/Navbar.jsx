// Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <h2 style={{ color: "white", margin: 0 }}>My React Apps</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          Counters
        </NavLink>
        <NavLink
          to="/git-profile"
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          Git Profile
        </NavLink>
        <NavLink
          to="/timer"
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          Timer
        </NavLink>
      </div>
    </nav>
  );
};

// Simple Styles
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#1f2937",
  padding: "15px 30px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
};

const linkStyle = {
  color: "#9ca3af",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "500",
  padding: "6px 12px",
  borderRadius: "5px",
};

const activeLinkStyle = {
  ...linkStyle,
  color: "white",
  backgroundColor: "#3b82f6",
};

export default Navbar;
