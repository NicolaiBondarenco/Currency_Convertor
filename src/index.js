import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/Components/App/App'
import { ThemeChange } from './Components/Context/ContextTheme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeChange>
      <App />
    </ThemeChange>
  </React.StrictMode>,
)
