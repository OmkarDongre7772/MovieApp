import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import {MovieProvider} from './contexts/MovieContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </StrictMode>,
)
