import React from "react";
import { useState } from "react";

const Counters = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div
      style={{
        backgroundColor: "blueviolet",
        color: "white",
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Rohan Gupta</h1>
      <h1>Counter:{count}</h1>
      <button
        onClick={increment}
        style={{
          backgroundColor: "blue",
          color: "white",
          height: "30px",
          margin: "20px",
          border: "1rem",
        }}
      >
        Increases {count}
      </button>
      <button
        onClick={decrement}
        style={{
          backgroundColor: "red",
          height: "30px",
          border: "10px",
          color: "white",
        }}
      >
        Decreases{count}
      </button>
    </div>
  );
};

export default Counters;
