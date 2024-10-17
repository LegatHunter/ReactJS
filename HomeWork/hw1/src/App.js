import './App.css';
import {useState} from "react";

function App() {
const [count, setCount] = useState(0);

const counterP = () => setCount(count + 1);
const counterM = () => setCount(count - 1);

  return (
    <div className="testCounter">
      <h1>Счетчик</h1>
      <span>{count}</span>
      <button type="button" onClick={counterP}>
        +1
      </button>
      <button type="button" onClick={counterM}>
        -1
      </button>
    </div>
  )
}

export default App;
