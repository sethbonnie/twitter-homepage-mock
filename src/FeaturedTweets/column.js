import React from 'react';
import Tweet from './tweet';

const Column = ({tweets}) => (
  <div className="column">
    {tweets.map((tweet) => <Tweet key={tweet.id} {...tweet} />)}
  </div>
)

export default Column;
