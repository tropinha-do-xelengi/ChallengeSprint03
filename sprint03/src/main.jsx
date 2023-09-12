import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Erro404 from './routes/Erro404.jsx';
import Home from './routes/Home.jsx';
import Vistorias from './routes/Vistoria';

const router = createBrowserRouter([
  { path: '/', element: <App/>,
    errorElement: <Erro404/>,
    children: [
      { path: '/', element: <Home />},
      { path: '/vistoria', element: <Vistorias />},
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

