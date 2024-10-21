import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TicketsApp from './TicketsApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TicketsApp />
  </StrictMode>,
)
