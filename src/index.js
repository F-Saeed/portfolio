import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Reset } from './components/styles/Reset.style';
import {
  PoppinsSemiBold,
  PoppinsRegular,
  PoppinsMedium,
} from './components/fonts/fonts';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <PoppinsSemiBold />
    <PoppinsRegular />
    <PoppinsMedium />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
