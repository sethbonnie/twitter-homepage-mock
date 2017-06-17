import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import FeaturedTweets from './FeaturedTweets';
import Moments from './Moments';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FeaturedTweets />
        <Moments />
        <Footer />
      </div>
    );
  }
}

export default App;
