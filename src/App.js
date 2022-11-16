import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [counter,updatecounter] = useState(0);
  const increament=()=>{
    updatecounter(counter+1);
  }
  const decreament=()=>{
    updatecounter(counter-1);
  }
  return (
    <div className="App">
      <button onClick={increament}>increament</button>
       <button onClick={decreament}>decreament</button>
       <h2>{counter}</h2>
    </div>
  );
}

export default App;
