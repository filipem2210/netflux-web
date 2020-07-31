import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import {
  FaChevronRight as Next,
  FaChevronLeft as Previous
} from 'react-icons/fa';
import {
  AiOutlineLike as Like,
  AiOutlineDislike as Dislike,
  AiOutlinePlus as MyList
} from 'react-icons/ai';
import {
  IoMdClose as Close,
  IoIosPlay as Play,
} from 'react-icons/io';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';

import api from '../../services/api';

import 'pure-react-carousel/dist/react-carousel.es.css';
import { MoviesSeries } from './styles';

const base_url_img = process.env.REACT_APP_API_URL + "/static/images/movies";

export default function Row({ title, fetchUrl, isLargeRow, filteredMovies }) {
  const [movies, setMovies] = useState([]);
  const [movieInfo, setMovieInfo] = useState('');
  const [trailerUrl, setTrailerUrl] = useState('');
  const [showMovieInfo, setShowMovieInfo] = useState(false);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  useEffect(() => {
    if (filteredMovies) {
      setMovies(filteredMovies);
    } else {
      async function fetchData() {
        const { data } = await api.get(fetchUrl);
        setMovies(data);
      }
      fetchData();
    }
  }, [fetchUrl, filteredMovies]);

  const youtubeOptions = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async movie => {
    setShowMovieInfo(true);
    setMovieInfo(movie);

    try {
      const url = await movieTrailer(movie?.title, movie?.year);
      const youtubeCode = new URLSearchParams(new URL(url).search).get('v');
      setTrailerUrl(youtubeCode);
    } catch (e) {
      setTrailerUrl('');
    }
  }

  return (
    <MoviesSeries>
      <h2>{title}</h2>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={isLargeRow ? 135 : 50}
        totalSlides={movies?.length}
        visibleSlides={7}
        touchEnabled={false}
        step={3}
      >
        <Slider>
          {movies?.map((movie, index) =>
            <Slide index={index} key={movie.id}>
              <img
                onClick={() => handleClick(movie)}
                className={isLargeRow ? 'row_poster row_posterLarge' : 'row_poster'}
                src={base_url_img + (isLargeRow ? movie?.poster_path : movie?.backdrop_path || movie?.poster_path)}
                alt={movie.title}
              />
            </Slide>
          )}
        </Slider>
        <ButtonBack>
          <Previous size={50} color={'#fff'} />
        </ButtonBack>
        <ButtonNext>
          <Next size={50} color={'#fff'} />
        </ButtonNext>
      </CarouselProvider>
      {showMovieInfo &&
        <div className="movieInfo">
          <button className="closeMovieInfoBtn">
            <Close
              size={33}
              color={"#fff"}
              onClick={() => setShowMovieInfo(false)}
            />
          </button>
          <div className="options">
            <button className="active">Overview</button>
            <button>Episodes</button>
            <button>Trailers & More</button>
            <button>More Like This</button>
            <button>Details</button>
          </div>
          <div className="movieDetails">
            <h1>{movieInfo?.title} ({movieInfo?.year})</h1>
            <p>{truncate(movieInfo?.description, 350)}</p>
            <div className="movieDetails_buttons">
              <button className="movieDetails_button movieDetails_button_play">
                <Play size={24} />&nbsp;Play
              </button>
              <button className="movieDetails_button movieDetails_button_my_list">
                <MyList size={24} />&nbsp;My List
              </button>
              <button className="like">
                <Like size={24} color={"#fff"} />
              </button>
              <button className="dislike">
                <Dislike size={24} color={"#fff"} />
              </button>
            </div>
          </div>
          <div
            className="trailer"
            style={{
              backgroundImage: `url(${base_url_img + movieInfo?.backdrop_path})`,
            }}>
            <div className="gradientBg" />
            {trailerUrl && <YouTube videoId={trailerUrl} opts={youtubeOptions} />}
          </div>
        </div>
      }
    </MoviesSeries>
  )
}
