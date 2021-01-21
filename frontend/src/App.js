import React, { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <h1>reactJS Button</h1>
      {counter == 3 ? (
        <div>
          <h2>hello!</h2>
        </div>
      ) : null}
      <button
        variant="success"
        size="lg"
        onClick={() => setCounter((prevState) => prevState + 1)}
      >
        Click me!
      </button>
    </>
  );
}

export default App;
