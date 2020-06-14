import React, { useState, useEffect, useContext } from 'react';

import api from '../../services/api';
import { Context } from '../../contexts/authContext';

export default function Users() {
  const { handleSignOut } = useContext(Context);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/movies');

      setMovies(data);
    })();
  }, []);

  return (
    <>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title} ({movie.description})</li>
        ))}
      </ul>

      <button type="button" onClick={handleSignOut}>Sair</button>
    </>
  );
}
