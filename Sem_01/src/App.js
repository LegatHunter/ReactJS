import './App.css';
import Greeting from './Components/Greeting';
import SecondComp from './Components/SecondComp';
import CurrentTime from './Components/CurrentTime';
import EventCard from './Components/EventCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Это главная страница</h1>
        <Greeting />
        <SecondComp />
        <CurrentTime />
        <EventCard title="Событие 1" date="2024-01-01" location="Москва" boo={true}/>
        <EventCard title="Событие 2" date="2024-01-02" location="Петербург" boo={false}/>
      </header>
    </div>
  );
}

export default App;
