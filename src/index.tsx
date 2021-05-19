import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import env from './config/dotenv'; // eslint-disable-line
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
