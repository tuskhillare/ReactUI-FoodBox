import React from 'react';
import logo from './logo.png';
import './styles.css';

const Logo = () => (
  <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo' />
      <span>
        <h3><b>FoOdBoX</b></h3>
      </span>
    </div>
    <p>
      <i><h6><b>MoSt TrUsTeD & DeLiCiOuS</b></h6></i>
    </p>
  </div>
);

export default Logo;
