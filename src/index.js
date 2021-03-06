import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { CartProvider } from 'react-use-cart';

ReactDOM.render(
  <React.StrictMode>
    <Router><CartProvider><App /></CartProvider></Router>
  </React.StrictMode>,
  document.getElementById('root')
);
