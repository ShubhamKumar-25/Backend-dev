import React, { useState } from "react";

const AuthForm = () => {
  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setMode(mode === "login" ? "signup" : "login");
    setFormData({
      fullName: "",
      userName: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "login") {
      console.log("Login:", {
        email: formData.email,
        password: "••••••••",
      });
    } else {
      console.log("Signup:", formData);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.box}>
        <h2 style={styles.title}>
          {mode === "login" ? "Welcome Back 👋" : "Create Account ✨"}
        </h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          {mode === "signup" && (
            <>
              <Input
                label="Full Name"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
              />
              <Input
                label="Username"
                name="userName"
                type="text"
                value={formData.userName}
                onChange={handleChange}
              />
            </>
          )}

          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" style={styles.button}>
            {mode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        <p style={styles.toggleText}>
          {mode === "login" ? "Don't have an account?" : "Already registered?"}{" "}
          <span onClick={switchMode} style={styles.link}>
            {mode === "login" ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

// ✅ Reusable Input Component
const Input = ({ label, name, type, value, onChange }) => (
  <div style={styles.inputGroup}>
    <label htmlFor={name} style={styles.label}>
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      style={styles.input}
      required
    />
  </div>
);

// 🎨 Styles
const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1e293b, #0f172a)",
  },
  box: {
    width: "350px",
    backgroundColor: "#1f2937",
    padding: "30px",
    borderRadius: "10px",
    color: "white",
    boxShadow: "0 6px 15px rgba(0,0,0,0.6)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  label: {
    fontSize: "14px",
    marginBottom: "4px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #374151",
    backgroundColor: "#111827",
    color: "white",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    padding: "12px",
    backgroundColor: "#22c55e",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  toggleText: {
    marginTop: "15px",
    fontSize: "14px",
  },
  link: {
    color: "#22c55e",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "underline",
  },
};

export default AuthForm;
