import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Play from './pages/Play'
import Game from './pages/Game'

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

import { MyhookProvider } from './context/myfirsthook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyhookProvider>
      <RouterProvider router={router} />
    </MyhookProvider>
  </React.StrictMode>
)
