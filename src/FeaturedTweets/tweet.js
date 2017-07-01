import React from 'react';
import moment from 'moment';
import { upperFirst } from 'lodash';
import './tweet.css';

const relativeTime = {
    future: "in %s",
    past:   "%s",
    s:  "%ds",
    m:  "%dm",
    mm: "%dm",
    h:  "%dh",
    hh: "%dh",
    d:  "%dd",
    dd: "%dd",
    M:  "%dmon",
    MM: "%dmon",
    y:  "%dy",
    yy: "%dy"
};

const UserInfo = ({avatar, name, username, verified, posted}) => (
  <div className="card-user-info">
    <div className="user-avatar">
      <img src={avatar} alt="avatar" />
    </div>
    <div className="user-info">
      <div className="user-info-name">
        <span>{name} </span>
        {verified && <span className="mdi mdi-check-circle verified" />}
      </div>
      <div className="user-info-username">
        @{username}
      </div>
    </div>
    <div className="posted">
      {moment.updateLocale('en', {relativeTime}), moment(posted).fromNow()}
    </div>
  </div>
);

const TweetFooter = ({favorites, retweets}) => (
  <div className="tweet-footer">
    <div className="footer-item">
      <span className="mdi mdi-comment-outline" />
    </div>
    <div className="footer-item">
      <span className="mdi mdi-twitter-retweet" />
      {retweets && <span className="number"> {retweets}</span>}
    </div>
    <div className="footer-item">
      <span className="mdi mdi-heart-outline" />
      {favorites && <span className="number"> {favorites}</span>}
    </div>
  </div>
);

const Tweet = (props) => (
  <div className="tweet">
    <div className="tweet-category">
      <a href={`/categories/${props.category}`}>
        {upperFirst(props.category)}
      </a>
      <span className="angle">&rsaquo;</span>
    </div>
    <div className="card">
      <div className="card-image">
        <img src={props.image} />
      </div>
      <div className="card-content">
        <UserInfo
          username={props.username}
          name={props.name}
          posted={props.posted}
          avatar={props.userAvatar}
          verified={props.verified}
        />
        <div className="tweet-body">
          {props.content}
        </div>
        <TweetFooter
          retweets={props.retweets}
          favorites={props.favorites}
        />
      </div>
    </div>
  </div>
)

export default Tweet;
