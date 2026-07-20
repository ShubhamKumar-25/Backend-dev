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
    <>
      <h1>Rohan Gupta</h1>
      <h1>Counter:{count}</h1>
      <button onClick={increment}>Increases {count}</button>
      <button onClick={decrement}>Decreases{count}</button>
    </>
  );
};

export default Counters;
