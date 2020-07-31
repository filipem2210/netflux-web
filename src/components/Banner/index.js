import React, { useState, useEffect } from 'react';
import {
  IoIosPlay as Play,
  IoMdInformationCircleOutline as Info,
  IoMdVolumeOff as VolumeMuted,
  IoMdVolumeHigh as Volume
} from 'react-icons/io';

import api from '../../services/api';
import requests from '../../services/requests';

import { Main } from './styles';

const base_url_img = process.env.REACT_APP_API_URL + "/static/images/movies";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerMuted, setTrailerMuted] = useState(true);

  function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(requests.fetchNetflixOriginals);
      const randomNumber = randomInt(0, data.length);
      const randomMovie = data[randomNumber];
      setMovie(randomMovie);
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  function handleVolume() {
    setTrailerMuted(prvState => !prvState);
    const trailer = document.getElementById('trailer');
    if (trailerMuted) {
      trailer.muted = false;
    } else {
      trailer.muted = true;
    }
  }

  return (
    <Main
      style={{
        backgroundImage: `url(${movie?.backdrop_path && base_url_img + movie.backdrop_path})`,
      }}
    >
      {movie.id === 15 &&
        <>
          <video loop autoPlay muted id="trailer" className="active">
            <source
              src={require('../../assets/money_heist.mp4')}
              type="video/mp4"
            />
          Your browser does not support the video tag.
          </video>
          <button className="volumeButton" onClick={() => { handleVolume() }}>
            {trailerMuted ? (
              <VolumeMuted color="#fff" size={20} />
            ) : (
                <Volume color="#fff" size={20} />
              )
            }
          </button>
        </>
      }
      <div className='banner_contents'>
        <h1 className="banner_title">
          {movie?.title}
        </h1>
        <h2 className="banner_description">
          {truncate(movie?.description, 150)}
        </h2>
        <div className="banner_buttons">
          <button className="banner_button banner_button_play">
            <Play size={24} />&nbsp;Play
          </button>
          <button className="banner_button banner_button_more_info">
            <Info size={24} />&nbsp;More Info
          </button>
        </div>
      </div>
      <div className="banner_fadeBottom" />
    </Main>
  )
}
