import ComponA from './Components/CompB';
import './App.css';

function App() {

  let num=100;
  return (
    <div className="App">
      <h1>Components and props</h1>
      <ComponA name="AKib Momin" age={10} count={num}/>
    </div>
  );
}

export default App;
