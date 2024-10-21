import './App.css';
import Greeting from './Components/Greeting';
import Counter from './Components/Counter';
import MessageList from './Components/MessageList';
import message from './Components/Message';
import ThemeSwitcher from './Components/ThemeSwitcher';
import TextDisplayForm from './Components/TextDisplayForm';

function App() {
  return (
    <div className="App">
      <Greeting fname="Никита"/>
      <Counter />
      <MessageList messages={message}/>
      <ThemeSwitcher />
      <TextDisplayForm />
    </div>
  );
}

export default App;
