
import './App.css';
import CoundownTimer from './Components/Countdown/Countdown';
import StopWatch from './StopWatchtime/Stopwatch';



function App() {
  return (
    <div className="App">
      <CoundownTimer
      countdownstampMs={1659983662000}/>
      <StopWatch/>
     
    </div>
  );
}

export default App;
