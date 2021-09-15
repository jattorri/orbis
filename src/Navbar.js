import React, { useState } from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { DiJqueryLogo } from 'react-icons/di';
import { AiOutlineMenu } from 'react-icons/ai';
import Modal from './Modal';

const Navbar = () => {
  const [openModal, setopenModal] = useState(false);

  return (
    <nav
      className='navbar'
      data-aos='zoom-in'
      data-aos-delay='50'
      data-aos-duration='2000'
    >
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
      <div></div>
      <div className='navbar-toggle' onClick={() => setopenModal(!openModal)}>
        <AiOutlineMenu />
        <div className={openModal ? 'modal-show' : 'modal-hide'}>
          <Modal />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
