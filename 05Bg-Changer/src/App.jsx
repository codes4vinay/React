import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="h-screen flex flex-col justify-end items-center"
      style={{ backgroundColor: color }}
    >
      <div className="mb-10 bg-white rounded-xl p-4 flex gap-3 shadow-lg">
        <button
          onClick={() => setColor("red")}
          className="px-4 py-2 bg-red-500 text-white rounded-xl"
        >
          Red
        </button>

        <button
          onClick={() => setColor("blue")}
          className="px-4 py-2 bg-blue-500 text-white rounded-xl"
        >
          Blue
        </button>

        <button
          onClick={() => setColor("green")}
          className="px-4 py-2 bg-green-500 text-white rounded-xl"
        >
          Green
        </button>

        <button
          onClick={() => setColor("yellow")}
          className="px-4 py-2 bg-yellow-400 text-black rounded-xl"
        >
          Yellow
        </button>

        <button
          onClick={() => setColor("purple")}
          className="px-4 py-2 bg-purple-500 text-white rounded-xl"
        >
          Purple
        </button>
      </div>
    </div>
  );
}

export default App;
