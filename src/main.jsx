import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import ToggleProvider from './Context/toogleContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className=''>
      <ToggleProvider>
      <RouterProvider router={router} >
     <App />
     </RouterProvider>
      </ToggleProvider>
    
     </div>
     
   
    
  </React.StrictMode>,
)
