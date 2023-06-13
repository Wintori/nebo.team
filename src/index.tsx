import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
if (!root) throw new Error('Failed to find the root element');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
