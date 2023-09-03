import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ROTAS
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Vistoria from './routes/Vistoria.jsx'
import Error from './routes/Erro404.jsx'

  const router =  createBrowserRouter([ 
    {
      path: "/", 
      element: <App/>, 
      errorElement: <Error/>,
      children:[

      { 
        path: "/", 
        element: <Home/>   },

        {      
          path: "/vistoria", 
          element: <  Vistoria/>   }
    ]
  }
  ])

// ROTAS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)