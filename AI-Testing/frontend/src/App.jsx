// App.jsx (Simple React Component)
import React, { useState } from "react";

export default function App() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleExplain = async () => {
    if (!code.trim()) return;

    setLoading(true);
    setResult("");

    try {
      // Apne Express Backend ko call kar rahe hain
      const res = await fetch("http://localhost:5000/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codeSnippet: code }),
      });

      const data = await res.json();

      if (res.ok) {
        setResult(data.explanation);
      } else {
        setResult(data.error || "Kuch gadbad ho gayi!");
      }
    } catch (err) {
      setResult("Server connect nahi ho pa raha hai.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>👨‍💻 AI Code Explainer</h2>

      <textarea
        rows="8"
        style={{ width: "100%", padding: "10px", fontSize: "14px" }}
        placeholder="write your code here....."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <br />
      <br />

      <button
        onClick={handleExplain}
        disabled={loading}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        {loading ? "AI Soch Raha Hai..." : "Explain Code"}
      </button>

      {/* Result Display */}
      {result && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#f4f4f4",
            borderRadius: "5px",
          }}
        >
          <h3>Explanation:</h3>
          <p style={{ whiteSpace: "pre-line" }}>{result}</p>
        </div>
      )}
    </div>
  );
}
