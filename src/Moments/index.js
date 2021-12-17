import React, { Component } from 'react';
import faker from 'faker';
import { range } from 'lodash';
import Moment from './moment';
import SignupPrompt from './signup-prompt';
import './moments.css';

const images = [
  'https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1701193/pexels-photo-1701193.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/801625/pexels-photo-801625.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
];

class Moments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moments: range(3).map(i => ({
        id: i,
        title: faker.hacker.phrase(),
        category: faker.random.word(),
        image: images[i],
        posted: faker.date.recent()
      }))
    }
  }
  render() {
    const { moments } = this.state;
    return (
      <div id="moments-container">
        <h4 className="section-header">
          Moments <span>·</span> <a href="/moments">View All</a>
        </h4>
        <div id="moments">
          { moments.map(moment => <Moment key={moment.id} {...moment} />)}
          <SignupPrompt />
        </div>
      </div>
    )
  }
}

export default Moments;
