import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { DiJqueryLogo } from 'react-icons/di';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div>
        <p className='navbar-title'>
          <DiJqueryLogo />
          ORBIS.SA
        </p>
      </div>
      <div className='navbar-links-grid'>
        <button className='navbar-button'>Inicio</button>
        <button className='navbar-button'>Sobre nosotros</button>
        <button className='navbar-button'>Contacto</button>
      </div>
      <div className='navbar-icons-grid'>
        <a href='www.twitter.com' className='navbar-icon'>
          <FaBehance />
        </a>
        <a href='www.twitter.com' className='navbar-icon'>
          <FaFacebook />
        </a>
        <a href='www.twitter.com' className='navbar-icon'>
          <FaLinkedin />
        </a>
        <a href='www.twitter.com' className='navbar-icon'>
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
