import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Play from './pages/Play';
import Game from './pages/Game';


function App() {
  return (
  <Routes>
    <Route path="/" element={<Play />} />
    <Route path="/games" element={<Game />} />
  </Routes>
  )
}

export default App;
