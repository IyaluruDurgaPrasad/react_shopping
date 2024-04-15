import logo from './logo.svg';
import './App.css';
import Application1 from './Application1';

import Sample from './example/Sample';
import Second  from './props/Second';
import First from './props/First';
import Third from './props/Third';

import Dest from './props/Dest';

import State from './example/State';
import {useState,useEffect} from 'react'

import Event from './events/Event';

import Mainpage from './shopping/pages/Mainpage';

var object={
  name:'Durga prasad',
  city:'Hyderabad',
  state:'Telangana'
}

var carmodel={
  car:"Maruti",
  model:"Swift",
  year:2020

}

function App() {

  const[city,setCity]=useState('1')

  useEffect(()=>{
    if (city =='1'){
      setCity('Kandikayapalli')
    }
    else
    {
      setCity('Chennai')
    }
  },[])

  const[condition,setCondition]=useState(false)



  
  
  return (
    <div className="App">
      <header className="App-header">
        <Mainpage/>
      </header>
    </div>
  );
}

export default App;
