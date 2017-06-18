import React from 'react';
import { upperFirst } from 'lodash';

const Tweet = (props) => (
  <div className="tweet">
    <div className="tweet-category">
      <a href={`/categories/${props.category}`}>
        {upperFirst(props.category)}
      </a>
      <span className="angle">&rsaquo;</span>
    </div>
  </div>
)

export default Tweet;
