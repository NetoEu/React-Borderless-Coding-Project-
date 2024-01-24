import React from 'react';
import './App.css';

import { Outlet } from 'react-router-dom';

import { useContext } from 'react';
import { MyhookContext } from './context/myfirsthook';


function App() {

  const {Result, player1, player2, score, imgResult, selectedOptionForMachine, playerWin, setPlayerWin, setScore} = useContext(MyhookContext);

  return (
    <div><Outlet /></div>
  )
}

export default App;
