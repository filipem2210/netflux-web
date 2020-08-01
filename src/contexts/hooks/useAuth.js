import { useState, useEffect } from 'react';

import api from '../../services/api';
import history from '../../services/history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      history.push('/browse');
    }

    setLoading(false);
  }, []);

  async function handleSignIn(data) {
    try {
      const { data: { token } } = await api.post('/signin', data);

      if (token) {
        localStorage.setItem('token', token);
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
      }

      return history.push('/browse');
    } catch (error) {
      const { response: { data } } = error;
      return data;
    }
  }

  async function handleSignUp(data) {
    try {
      const { data: { token } } = await api.post('/signup', data);

      if (token) {
        localStorage.setItem('token', token);
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
      }
      return history.push('/browse');
    } catch (error) {
      const { response: { data } } = error;
      return data;
    }
  }

  function handleSignOut() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/');
  }

  return { authenticated, loading, handleSignIn, handleSignUp, handleSignOut };
}
