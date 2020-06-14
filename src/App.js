import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import { AuthProvider } from './contexts/authContext';

import GlobalStyle from './globalStyles';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
