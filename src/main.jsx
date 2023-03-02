import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Public from './routers/Public'
import { AuthProvider } from './context/Auth.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <Public />
    </AuthProvider>
  </BrowserRouter>,
)
