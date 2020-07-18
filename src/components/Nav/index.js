import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../contexts/authContext';

import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.png';

import './styles.css';

export default function Nav() {
  const { handleSignOut } = useContext(Context);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, [])

  return (
    <div className={`nav ${show && "nav_black"}`} >
      <img
        className="nav_logo"
        src={logo}
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src={avatar}
        alt="Avatar"
        onClick={handleSignOut}
        style={{ cursor: 'pointer' }}
      />
    </ div>
  );
}
