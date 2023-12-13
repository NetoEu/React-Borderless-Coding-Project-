import React from 'react';
import './App.css';

import { Outlet } from 'react-router-dom';

import Play from './pages/Play';
import Game from './pages/Game';

import { useContext } from 'react';
import { MyhookContext } from './context/myfirsthook';



function App() {

  const { msg } = useContext(MyhookContext);

  return (
    <div><Outlet /></div>
  )
}

export default App;
