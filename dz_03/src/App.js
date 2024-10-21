import './App.css';
import TemperatureConverter from './Components/TemperatureConverter';
import TodoList from './Components/TodoList';
function App() {
  return (
    <div className="App" style={{margin: '0 auto', maxWidth: 1000}}>
      <TemperatureConverter />
      <TodoList />
    </div>
  );
}

export default App;
