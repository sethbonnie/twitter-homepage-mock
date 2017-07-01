import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import FeaturedTweets from './FeaturedTweets';
import Moments from './Moments';
import Footer from './Footer';

import 'mdi/css/materialdesignicons.css';

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
      expandHeader: this.appNode.scrollTop < 30
    });
  }

  render() {
    const { showFooter, expandHeader } = this.state;
    return (
      <div className="App"
          ref={(app) => { this.appNode = app; }} 
          onWheel={this.handleOnWheel.bind(this)} >
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
