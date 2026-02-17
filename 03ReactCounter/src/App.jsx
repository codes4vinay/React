import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);  //Use of hooks to update the UI

  const addValue = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1); //ideally it should be 8, but it will be 6 becz the react fiber takes all three setCounter as same work and execute only once to solve this we will use callback function becz they will require prev state
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
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
