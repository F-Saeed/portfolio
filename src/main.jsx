import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/styles/Global.style';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
