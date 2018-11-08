import React, { Component } from 'react';
import Image from './Image';
import Dots from './Dots';
import Arrows from './Arrows';

class Slider extends Component {
  state = {
    currPic: 0
  };

  moveSlide = currImg => {
    this.setState({
      currPic: currImg
    });
  };

  setSlide = currDot => {
    this.setState({
      currPic: currDot
    });
  };

  render() {
    const { currPic } = this.state;
    return (
      <React.Fragment>
        <Image currPic={currPic} />
        <Arrows currPic={currPic} moveSlide={this.moveSlide} />
        <Dots currPic={currPic} setSlide={this.setSlide} />
      </React.Fragment>
    );
  }
}

export default Slider;
