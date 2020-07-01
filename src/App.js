import React , {useState} from 'react';
import {Values} from './values.js';
import './App.css';

function App() {

  let [count, setCount]=useState(0)
  let [IsMorning , setMorning]=useState(false)

 

  return (
    <div className={`box ${IsMorning ? 'dayLight': ''}`}>
      <h1>Time ={IsMorning ?'Morning':'Night' }</h1>


      <Values counter={count}/>

  
  <br/>
  <button onClick={
    ()=>setCount(++count)}>
    Update counter
  </button>
  <br/>

  <button onClick={()=>setMorning(!IsMorning)} >updated Day </button>
      
    </div>
  );
}

export default App;
