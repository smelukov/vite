import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { Initializer } from '@some/library';

console.log(Initializer.create());

//@ts-ignore
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <h1>MF HOST Demo</h1>
    <App />
  </React.StrictMode>
);
