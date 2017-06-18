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
      expandHeader: true,
    };
  }

  handleOnWheel({ deltaY }) {
    this.setState({
      showFooter: deltaY < 0,
      expandHeader: deltaY < 0
    });
  }

  render() {
    const { showFooter, expandHeader } = this.state;
    return (
      <div onWheel={this.handleOnWheel.bind(this)} className="App">
        <Header expand={ expandHeader } />
        <div className="App-body">
          <Moments />
          <FeaturedTweets />
        </div>
        <Footer show={ showFooter }/>
      </div>
    );
  }
}

export default App;
