import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Play from './pages/play.jsx'
import Game from './pages/game.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Play /> },
      { path: "/games", element: <Game />},
    ],
  },
]);

import { myHookProvider } from './context/myfirsthook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <myHookProvider>
      <RouterProvider router={router} />
    </myHookProvider>
  </React.StrictMode>
)
