import React, { Component } from 'react';
import faker from 'faker';
import { drop, range, take, sample } from 'lodash';
import Heading from './heading';
import Column from './column';
import './featured-tweets.css';

const randomInt = (max) => Math.round(Math.random() * max);

const randomBool = () => Boolean(randomInt(1));

const genName = () => 
  randomInt(1) ?
    faker.company.companyName() :
    `${faker.name.firstName()} ${faker.name.lastName()}`

const avatars = [
  'https://parade.com/wp-content/uploads/2021/08/albert-einstein-quotes.jpg',
  'https://pbs.twimg.com/profile_images/879355674957926400/VSGZHGib_400x400.jpg',
  'https://www.thefamouspeople.com/profiles/images/henri-poincare-3.jpg',
  'https://i1.wp.com/www.cherrychapman.com/wp-content/uploads/2019/11/th-1.jpeg?fit=338%2C396&ssl=1',
  'https://m.media-amazon.com/images/M/MV5BZmU5OGE0ZmUtZjdmYi00NDE2LWI2NzYtMzAwYzJiY2IwMDJlXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg',
  'https://cdn.britannica.com/w:400,h:300,c:crop/78/23678-050-1DCF79A2/Auguste-Comte-Tony-Toullion-Bibliotheque-Nationale-Paris.jpg',
  'https://www.azquotes.com/public/pictures/authors/5b/83/5b83eea35cf5550675a976ecae99a87c/5475aadeae20e_sofia_kovalevskaya.jpg',
];

const images = [
  'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/247851/pexels-photo-247851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];

class FeaturedTweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: range(60).map((id) => ({
        id,
        image: sample(images),
        name: genName(),
        category: faker.random.word(),
        verified: randomBool(),
        username: faker.internet.userName(),
        posted: faker.date.recent(),
        retweets: randomInt(1000),
        favorites: randomInt(1000),
        content: faker.lorem.sentence(),
        userAvatar: sample(avatars),
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
