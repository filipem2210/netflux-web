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
    }

    setLoading(false);
  }, []);

  async function handleSignIn() {
    const data = {
      email: "email@gmail.com",
      password: "123456"
    }

    const { data: { token } } = await api.post('/signin', data);

    if (token) {
      localStorage.setItem('token', token);
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }
    history.push('/browse');
  }

  async function handleSignUp() {
    const data = {
      email: "email12@gmail.com",
      password: "123456"
    }

    const { data: { token } } = await api.post('/signup', data);

    if (token) {
      localStorage.setItem('token', token);
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }
    history.push('/browse');
  }

  function handleSignOut() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/');
  }

  return { authenticated, loading, handleSignIn, handleSignUp, handleSignOut };
}
