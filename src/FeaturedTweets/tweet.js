import React from 'react';
import { upperFirst } from 'lodash';
import './tweet.css';

const UserInfo = ({avatar, name, username, verified}) => (
  <div className="card-user-info">
    <div className="user-avatar">
      <img src={avatar} />
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
  </div>
)

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
          avatar={props.userAvatar}
          verified={props.verified}
        />
        <div className="tweet-body">
          {props.content}
        </div>
      </div>
    </div>
  </div>
)

export default Tweet;
