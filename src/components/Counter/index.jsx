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
    <div className="grid place-items-center h-screen w-screen">
      <div className="border border-black text-center p-10">
        <h1 className="text-blue-400 font-bold mb-4 text-lg">Counter</h1>

        <h3 className="mb-2">Count: {count}</h3>

        <div className="space-x-4">
          <button
            className="font-medium px-4 py-2 text-white bg-blue-400 hover:bg-blue-500 active:bg-blue-700 transition-colors duration-300"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            className="font-medium px-4 py-2 text-white bg-blue-400 hover:bg-blue-500 active:bg-blue-700 transition-colors duration-300"
            onClick={handleDecrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
