import React from 'react';
import logo from './logo.svg';
import './banner.css';

const Banner = () => (
  <div id="banner">
    <a id="logo" href="/"><img src={logo} alt="Logo" /></a>
    <h1 className="heading">
      What’s Happening?
    </h1>
    <div className="header-buttons">
      <a id="sign-up" href="signup" className="button">Sign up</a>
      <a id="log-in" href="login" className="button">Log in</a>
    </div>
  </div>
);

export default Banner;