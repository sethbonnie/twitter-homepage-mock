import React from 'react';
import classnames from 'classnames';
import './footer.css';

const Footer = ({show}) => (
  <div id="footer" className={classnames({hide: !show})}>
    <ul>
      <li><a href="/about">About</a></li>
      <li><a href="/help">Help Center</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="//status.twitter.com">Status</a></li>
      <li><a href="/careers">Jobs</a></li>
      <li><a href="/terms">Terms</a></li>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/privacy#cookies">Cookies</a></li>
      <li><a href="/ads">Ads Info</a></li>
      <li><a href="/brands">Brand</a></li>
      <li><a href="/apps">Apps</a></li>
      <li><a href="/ads/signup">Advertise</a></li>
      <li><a href="/business">Businesses</a></li>
      <li><a href="//develop.twitter.com">Developers</a></li>
      <li><a href="/dir">Directory</a></li>
      <li><a href="/settings">Settings</a></li>
      <li>&copy; 2017 Twitter</li>
    </ul>
  </div>
);

export default Footer;