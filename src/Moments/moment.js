import React from 'react';
import { truncate, capitalize, upperFirst } from 'lodash';
import moment from 'moment';

const Moment = ({ title, category, posted, image }) =>
  <div className="moment moment-section">
    <div className="moment-content">
      <h5>{truncate(capitalize(title), { length: 35 })}</h5>
      <span className="category">{upperFirst(category)}</span>
      <span className="separator"> · </span>
      <span className="posted">{capitalize(moment(posted).fromNow())} </span>
    </div>
    <div className="moment-image">
      <img src={image} />
    </div>
  </div>;

export default Moment;
