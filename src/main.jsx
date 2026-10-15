import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root')
const app = (
  <React.StrictMode>
    <BrowserRouter basename="/lightpro">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Built pages arrive pre-rendered, so attach to that markup; `npm run dev` starts empty.
if (root.firstElementChild) ReactDOM.hydrateRoot(root, app)
else ReactDOM.createRoot(root).render(app)
