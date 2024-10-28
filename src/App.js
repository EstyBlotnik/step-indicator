
import './App.css';
import { Wizard } from './components/Wizard';
import { useState } from 'react';
// index.js או App.js
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[counter, setCounter]=useState(1);
  const totalSteps=20;
  return (
    <div className="App">
      <button className="btn btn-success" 
        disabled={counter <= 1}
        onClick={() => {
          if (counter > 1) {
            setCounter(counter - 1);
          }
        }}>prev</button>
      <button className="btn btn-success" 
        disabled={counter >= totalSteps}
        onClick={() => {
          if (counter < totalSteps) {
            setCounter(counter + 1);
          }
        }}>next</button>      
      <Wizard counter={counter} totalSteps={totalSteps}/>
      <div>QA:{counter}</div>
    </div>
  );
}

export default App;
