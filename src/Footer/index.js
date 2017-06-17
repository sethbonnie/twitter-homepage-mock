import React from 'react';
import classnames from 'classnames';
import './footer.css';

const Footer = ({show}) => (
  <div id="footer" className={classnames({hide: !show})}>
    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">Help Center</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Status</a></li>
      <li><a href="#">Jobs</a></li>
      <li><a href="#">Terms</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Cookies</a></li>
      <li><a href="#">Ads Info</a></li>
      <li><a href="#">Brand</a></li>
      <li><a href="#">Apps</a></li>
      <li><a href="#">Advertise</a></li>
      <li><a href="#">Businesses</a></li>
      <li><a href="#">Developers</a></li>
      <li><a href="#">Directory</a></li>
      <li><a href="#">Settings</a></li>
      <li>&copy; 2017 Twitter</li>
    </ul>
  </div>
);

export default Footer;