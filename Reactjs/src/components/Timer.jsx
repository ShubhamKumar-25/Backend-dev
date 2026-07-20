import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [show, setShow] = useState(true);

  useEffect(() => {
    // 1. Interval set kiya
    if (!show) return;
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log("Hey");
    }, 1000);

    // 2. Cleanup function: Jab component unmount hoga to interval stop ho jayega
    return () => {
      clearInterval(timerId);
      console.log("Timer stopped!");
    };
  }, [show]);

  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        color: "black",
        display: "flex",
        flexDirection: "column", // Button aur Time ko vertical arrange karne ke liye
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {/* onClick use kiya aur state toggle (true/false) karne ka logic lagaya */}
      <button
        onClick={() => setShow(!show)}
        style={{
          padding: "8px 16px",
          backgroundColor: "greenyellow",
          color: "black",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        {show ? "Hide Time" : "Show Time"}
      </button>

      {/* Conditional Rendering: Jab show = true hoga tabhi time dikhega */}
      {show && <h1>Time: {time}</h1>}
    </div>
  );
};

export default Timer;
