import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { Global } from '@emotion/react';
import { GlobalStyle } from './styles/theme/global.css';
import { ExchangeRatesProvider } from './contexts/ExchangeRates';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Global styles={GlobalStyle} />
    <ExchangeRatesProvider>
      <App />
    </ExchangeRatesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
