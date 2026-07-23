import React, { useState } from "react";

const AuthForm = () => {
  // State to toggle between Login and Signup
  const [isLogin, setIsLogin] = useState(true);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", formData.email, formData.password);
    } else {
      console.log("Signing up with:", formData);
    }
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={cardStyle}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        {/* Full Name sirf Signup ke vakt dikhega */}
        {!isLogin && (
          <div style={inputGroupStyle}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
        )}

        <div style={inputGroupStyle}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={inputGroupStyle}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <button type="submit" style={submitBtnStyle}>
          {isLogin ? "Login" : "Register"}
        </button>

        {/* Bottom Toggle Option */}
        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            style={{
              color: "#adff2f",
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

// Styles
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80vh",
};

const cardStyle = {
  width: "320px",
  backgroundColor: "#111827",
  padding: "25px",
  color: "white",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  textAlign: "center",
};

const inputGroupStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  textAlign: "left",
};

const inputStyle = {
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #374151",
  backgroundColor: "#1f2937",
  color: "white",
};

const submitBtnStyle = {
  padding: "10px",
  backgroundColor: "#adff2f",
  color: "black",
  fontWeight: "bold",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "10px",
};

export default AuthForm;
