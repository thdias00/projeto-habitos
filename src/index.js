import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Providers from './providers';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <Toaster />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
