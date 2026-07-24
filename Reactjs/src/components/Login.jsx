import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({
      fullName: "",
      userName: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (isLogin) {
      console.log("Logging in with:", {
        email: formData.email,
        password: "••••••••", // don’t log raw password
      });
    } else {
      console.log("Signing up with:", formData);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        {!isLogin && (
          <>
            <InputField
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
            />
            <InputField
              label="UserName"
              name="userName"
              type="text"
              placeholder="Set your username"
              value={formData.userName}
              onChange={handleChange}
            />
          </>
        )}

        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" style={styles.submitBtn}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p style={styles.toggleText}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={handleToggle} style={styles.toggleLink}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

// ✅ Reusable Input Component
const InputField = ({ label, name, type, placeholder, value, onChange }) => (
  <div style={styles.inputGroup}>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={styles.input}
      required
    />
  </div>
);

// 🎨 Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    backgroundColor: "#0f172a",
  },
  card: {
    width: "320px",
    backgroundColor: "#111827",
    padding: "25px",
    color: "white",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    textAlign: "left",
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #374151",
    backgroundColor: "#1f2937",
    color: "white",
    transition: "border-color 0.3s",
  },
  submitBtn: {
    padding: "10px",
    backgroundColor: "#adff2f",
    color: "black",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background-color 0.3s",
  },
  toggleText: {
    marginTop: "15px",
    fontSize: "14px",
  },
  toggleLink: {
    color: "#adff2f",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "underline",
  },
};

export default Login;
