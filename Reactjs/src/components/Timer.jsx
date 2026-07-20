import React from "react";
import { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "100%",
      }}
    >
      <h1>Time: {time}</h1>
    </div>
  );
};

export default Timer;
