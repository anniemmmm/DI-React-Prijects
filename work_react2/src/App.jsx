import { useState } from 'react'
import './App.css'
      
function App(){
  const[temperatureVal, setTemperatureVal]=useState(0);
  const[temperatureColor,setTempColor]=useState("blue");
  const minusTemperature=()=>{
    const newTemp=temperatureVal-1;
    if(newTemp<0){
      setTempColor('blue')
    } 
  };
  const plusTemperature=()=>{
    const newTemp=temperatureVal+1;
    if(newTemp>0&&newTemp<15){
      setTempColor('green')
    }
    if(newTemp>15&&newTemp<30){
      setTempColor('yellow')
    }
    if(newTemp>30){
      setTempColor('red')
    }
    setTemperatureVal(newTemp);
  };
  return(
    <div className="container">
      <div className="card">
        <div className={`temperature ${temperatureColor}`}>{temperatureVal}°C</div>
        <div className="control-container">
          <button className="controlPlus" onClick={()=>plusTemperature()}>+</button>
          <button className="controlMinus" onClick={()=>minusTemperature()}>-</button>
        </div>
      </div>
    </div>
  );
}
export default App;