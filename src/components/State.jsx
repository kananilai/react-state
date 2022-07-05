import React, { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);
  console.log("再描写");
  console.log(`外側 ${count}`);
  const increment = () => {
    setCount((count) => count + 1);
    console.log(`increment ${count}`);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  return (
    <div>
      <h1>Count</h1>
      <h2>カウント：{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
