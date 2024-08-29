import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const subtractValue = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="bg-[#313131] text-white w-full h-screen flex flex-col gap-2 justify-center items-center">
      <button className="bg-[#1b1b1b] px-4 py-2 rounded-lg" onClick={addValue}>
        Add
      </button>
      <button
        className="bg-[#1b1b1b] px-4 py-2 rounded-lg"
        onClick={subtractValue}
      >
        Subtract
      </button>
      <p className="bg-[#1b1b1b] px-4 py-2 rounded-lg">{count}</p>
    </div>
  );
}

export default App;
