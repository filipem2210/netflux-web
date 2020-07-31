import React, {
  useEffect,
  useState,
  useContext,
  useCallback,
  useMemo
} from 'react';
import { Link } from 'react-router-dom';
import { IoMdSearch, IoMdClose } from 'react-icons/io';
import { FiGift } from 'react-icons/fi';
import { FaBell } from 'react-icons/fa';

import Row from '../Row';

import api from '../../services/api';

import { Context } from '../../contexts/authContext';

import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.png';

import { Main, Results } from './styles';

const filter = (movies, query) => {
  return movies.filter(movie => movie.title.toLowerCase().includes(query))
};

const MoviesList = ({ movies, query }) => {
  const filtered = useMemo(() => filter(movies, query), [movies, query]);
  if (query.length >= 2) {
    return <Row
      title="Results"
      isLargeRow
      filteredMovies={filtered.length > 0 ? filtered : movies}
    />;
  }
  return null;
}

export default function Nav() {
  const { handleSignOut } = useContext(Context);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [magnifier, setMagnifier] = useState(true);

  const getMovies = useCallback(async () => {
    const { data } = await api.get("/movies");
    setMovies(data);
  }, []);

  const handleSearch = () => {
    const searchInput = document.getElementById('search');
    if (active) {
      setActive(false);
      setMagnifier(true);
      setQuery('');
      searchInput.value = "";
    } else {
      getMovies();
      setMagnifier(false);
      setActive(true);
      searchInput.focus();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <>
      <Main className={`${show && "nav_black"}`} >
        <div className="logo_btns">
          <Link to='/browse'>
            <img
              src={logo}
              alt="Netflix Logo"
            />
          </Link>
          <Link to='/browse' className="active">Home</Link>
          <Link to='/browse'>Series</Link>
          <Link to='/browse'>Films</Link>
          <Link to='/browse'>Latest</Link>
          <Link to='/browse'>My List</Link>
        </div>
        <div className="actions">
          <input
            type="text"
            id="search"
            onChange={(event) => { setQuery(event.target.value) }}
            className={`search ${active && "active"}`}
            placeholder="Titles, people, genres"
          />
          <button>
            {magnifier ?
              <IoMdSearch
                color="#fff"
                size={30}
                onClick={() => { handleSearch() }}
              />
              :
              <IoMdClose
                color="#fff"
                size={30}
                onClick={() => { handleSearch() }}
              />
            }
          </button>
          <button className="gift_btn">
            <FiGift color="#fff" size={24} />
          </button>
          <button className="notification_btn">
            <FaBell color="#fff" size={24} />
          </button>
          <img
            className="nav_avatar"
            src={avatar}
            alt="Avatar"
            onClick={handleSignOut}
          />
        </div>
      </Main>
      <Results className={`results ${query.length >= 2 && "active"}`}>
        <MoviesList movies={movies} query={query} />
      </Results>
    </>
  );
}
