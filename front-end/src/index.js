import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import ProviderRegister from './context/registro/ProviderRegister';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <ProviderRegister>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProviderRegister>
  </HashRouter>
);
