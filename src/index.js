import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles/global.styled';
import {theme} from './GlobalStyles/Theme.styled'
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles}/>
          <App />
      </ThemeProvider>
  </React.StrictMode>
);
