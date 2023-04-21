import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles/global.styled';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={GlobalStyles}/>
      <App />
  </React.StrictMode>
);
