import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '@design-system/theme';
import { ApiProvider } from '@api-client/index';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApiProvider>
          <App />
        </ApiProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);