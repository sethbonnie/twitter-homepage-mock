import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import FeaturedTweets from './FeaturedTweets';
import Moments from './Moments';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFooter: true,
    };
  }

  handleOnWheel({ deltaY }) {
    this.setState({
      showFooter: deltaY > 0,
    });
  }

  render() {
    const { showFooter } = this.state;
    return (
      <div onWheel={this.handleOnWheel.bind(this)} className="App">
        <Header />
        <FeaturedTweets />
        <Moments />
        <Footer show={showFooter}/>
      </div>
    );
  }
}

export default App;
