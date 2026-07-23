import React, { useState } from "react";

const Login = () => {
  // Form input values ko track karne ke liye state
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh", // Page ke centre me lane ke liye
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "320px",
          backgroundColor: "#111827",
          display: "flex",
          flexDirection: "column",
          gap: "15px", // Inputs ke beech clean spacing
          padding: "25px",
          color: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        <h2 style={{ textAlign: "center", margin: "0 0 10px 0" }}>
          Login Page
        </h2>

        <div style={inputGroupStyle}>
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Set your username"
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email address"
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label>Password:</label>
          {/* Typo fixed: type="password" */}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#adff2f",
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "5px",
            border: "none",
            marginTop: "10px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

// Reusable Input Styles
const inputGroupStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  textAlign: "left",
};

const inputStyle = {
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #374151",
  backgroundColor: "#1f2937",
  color: "white",
  outline: "none",
};

export default Login;
