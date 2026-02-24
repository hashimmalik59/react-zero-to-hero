import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter">
        <p>Counter: {count}</p>

        <div className="counter-buttons">
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            Increment
          </button>

          <button onClick={() => setCount(0)}>Reset</button>

          <button onClick={() => setCount((prevCount) => prevCount - 1)}>
            Decrement
          </button>
        </div>
      </div>
      <Number />
    </>
  );
};
