import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((initialCount) => initialCount + 1);
  };

  const handleDecrement = () => {
    setCount((initialCount) => initialCount - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h3>Count: {count}</h3>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
