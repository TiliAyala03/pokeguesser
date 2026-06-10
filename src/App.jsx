import { useState, useEffect } from 'react'
import './App.css'

import Header from './components/Header/Header'
import ThreeWayHolder from './components/ThreeWayHolder/ThreeWayHolder';

function App() 
{

  const [mode, setMode] = useState('Daily');
  const [attempts, setAttempts] = useState([]);   //ATTEMPTS FOR DAILY MODE, WITH POKEMON ATTEMPTED

  return(
    <div>

      <title>PokéGuesser</title>
      <Header mode={mode} setMode={setMode}/>
      <ThreeWayHolder mode={mode} attempts={attempts} setAttempts={setAttempts}/>

    </div>
    

  );

}

export default App
