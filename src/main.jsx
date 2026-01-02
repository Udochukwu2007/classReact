// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import Story from './Story'


import ReactDOM from 'react-dom/client';
import App2 from './App2';
import { BrowserRouter } from 'react-router-dom';
import "./ston.css"
import Header2 from './Header2';




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Header2/>
  <App2/>
  </BrowserRouter>
);