import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// This is what inserts our react pages into our <div> on index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') 
);
