import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import api from '../../services/api';

import './styles.css';

const base_url_img = process.env.REACT_APP_API_URL + "/static/images/movies";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(fetchUrl);
      setMovies(data);
      return data;
    }
    fetchData();
  }, [fetchUrl, isLargeRow]);

  const opts = {
    height: "390",
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title, movie?.year)
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        });
    }
  }

  return (
    <section className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies?.map(movie =>
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={isLargeRow ? 'row_poster row_posterLarge' : 'row_poster'}
            src={base_url_img + (isLargeRow ? movie.poster_path : movie.backdrop_path || movie.poster_path)}
            alt={movie.title}
          />
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </section>
  )
}
