import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold">Count: {count}</h2>
      <div className="flex space-x-4">
        {/* {count === 0 && (
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            -
          </button>
        )} */}
        <button
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          -
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          +
        </button>
      </div>
      <button
        onClick={() => setCount(0)}
        className="px-4 py-2 bg-black text-white rounded-lg"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
