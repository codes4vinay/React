import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter == 0) return;
    setCounter(counter - 1);
  };

  return (
    <>
      <h2>Count is : {counter}</h2>
      <button onClick={addValue}>Add value : {counter}</button>
      <button onClick={removeValue}>Remove value : {counter}</button>
    </>
  );
}

export default App;
