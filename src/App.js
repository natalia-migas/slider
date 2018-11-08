import React, { Component } from 'react';
import Slider from './components/Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Simple slider with pretty pics</h1>
        <div className="slider">
          <Slider />
        </div>
      </div>
    );
  }
}

export default App;
