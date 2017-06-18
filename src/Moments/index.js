import React, { Component } from 'react';
import faker from 'faker';
import { range } from 'lodash';
import Moment from './moment';
import SignupPrompt from './signup-prompt';
import './moments.css';

class Moments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moments: range(3).map(i => ({
        title: faker.hacker.phrase(),
        category: faker.random.word(),
        image: faker.image.image(),
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
          { moments.map(moment => <Moment {...moment} />)}
          <SignupPrompt />
        </div>
      </div>
    )
  }
}

export default Moments;
