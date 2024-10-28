// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { getUser, getUsers } from './state.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App functions={{key_getUser: getUser, key_getUsers: getUsers}} />
  </BrowserRouter>,
)
