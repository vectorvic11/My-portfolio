import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/pages/App.jsx'
import { applyThemeToDOM } from './theme.js'

// Initialize theme
applyThemeToDOM()

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`

setupCounter(document.querySelector('#counter'))
