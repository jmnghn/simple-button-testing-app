import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <button
          data-testid="minus-button"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </button>
        <button
          data-testid="plus-button"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
        <div>
          <button
            data-testid="on/off-button"
            style={{ backgroundColor: "blue" }}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
