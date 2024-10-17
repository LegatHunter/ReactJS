import "./App.css";
import Counter from "./components/Counter.js";
import InputText from "./components/TextInput.js";
import ToDo from "./components/ToDo.js";
import Timer from "./components/Timer.js";

function App() {
  return (
    <div className="App">
      <Counter />
      <InputText />
      <ToDo />
      <Timer />
    </div>
  );
}

export default App;
