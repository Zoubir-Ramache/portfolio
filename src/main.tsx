import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import MyProvider from "./Context/FirstProvider"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyProvider>

    <App />
    </MyProvider>
  </React.StrictMode>,
)
