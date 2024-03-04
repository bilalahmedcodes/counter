import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function addCount() {
    setCount((c) => c + step);
  }

  function subCount() {
    setCount((c) => c - step);
  }

  function addStep() {
    setStep((s) => s + 1);
  }

  function subStep() {
    setStep((s) => s - 1);
  }

  return (
    <div>
      <button onClick={addStep}>Add Step</button>
      <span>Step: {step}</span> <button onClick={subStep}>Sub Step</button>
      <br />
      <button onClick={addCount}>Add Count</button>
      <span>Count: {count}</span> <button onClick={subCount}>Sub Count</button>
    </div>
  );
}
