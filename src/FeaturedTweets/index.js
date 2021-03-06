import React, { Component } from 'react';
import faker from 'faker';
import { drop, range, take } from 'lodash';
import Heading from './heading';
import Column from './column';
import './featured-tweets.css';

const genName = () => 
  faker.random.number(1) ?
    faker.company.companyName() :
    `${faker.name.firstName()} ${faker.name.lastName()}`

class FeaturedTweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: range(60).map((id) => ({
        id,
        image: faker.image.image(),
        name: genName(),
        category: faker.random.word(),
        verified: faker.random.boolean(),
        username: faker.internet.userName(),
        posted: faker.date.recent(),
        retweets: faker.random.number(1000),
        favorites: faker.random.number(1000),
        content: faker.lorem.sentence(),
        userAvatar: faker.image.avatar(),
      }))
    }
  }

  render() {
    const { tweets } = this.state;
    const total = tweets.length;

    return (
      <div id="featured-tweets-container">
        <Heading title="Featured Tweets"/>
        <div className="columns">
          <Column tweets={take(tweets, total / 3)} />
          <Column tweets={take(drop(tweets, total / 3), total / 3)} />
          <Column tweets={drop(tweets, total * 2 / 3)} />
        </div>
      </div>
    )
  }
}

export default FeaturedTweets;
