import React, { useState } from "react";

const Counters = () => {
  const [count, setCount] = useState(0);

  // Safe State Updates using Functional Form
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div
      style={{
        backgroundColor: "blueviolet",
        color: "white",
        display: "flex",
        flexDirection: "column", // Elements ko ek ke neeche ek arrange karne ke liye
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Full screen height centre alignment ke liye
        gap: "10px",
      }}
    >
      <h1>Rohan Gupta</h1>
      <h2>Counter: {count}</h2>

      {/* Buttons Container */}
      <div style={{ display: "flex", gap: "15px" }}>
        <button
          onClick={increment}
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "8px 10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Increase ({count})
        </button>

        <button
          onClick={decrement}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Decrease ({count})
        </button>
      </div>
    </div>
  );
};

export default Counters;
