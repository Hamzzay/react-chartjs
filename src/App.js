import './App.css';
import DailyTemperature from './components/DailyTemperature';
import Precipitation from './components/Precipitation';

function App() {
  return (
    <div className="App">
      <DailyTemperature/>
      <Precipitation/>
    </div>
  );
}

export default App;
