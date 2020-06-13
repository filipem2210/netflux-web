import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated, loading, handleSignIn, handleSignUp, handleSignOut,
  } = useAuth();

  return (
    <Context.Provider value={{ loading, authenticated, handleSignIn, handleSignUp, handleSignOut }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
