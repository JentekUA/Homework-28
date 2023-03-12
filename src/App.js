import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  let [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <p>{count}</p>

      <Button onClick={increase}>Increase</Button>
      <Button onClick={decrease}>Decrease</Button>
    </div>
  );
}

export default App;
