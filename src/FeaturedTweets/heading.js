import React from 'react';

const Heading = ({title = ''}) => (
  <div className="heading">
    <hr className="heading-line" />
    <div className="heading-text-container">
      <span className="heading-text">{title}</span>
    </div>
  </div>
)

export default Heading;
