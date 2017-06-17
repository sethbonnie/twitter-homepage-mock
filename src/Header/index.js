import React from 'react';
import classnames from 'classnames';
import Banner from './banner';
import './header.css';

const Header = ({ expand }) => (
  <div id="header-placeholder"
    className={classnames({expand})}>
    <div id="header">
      <Banner />
      <div id="menu" />
    </div>
  </div>
);

export default Header;