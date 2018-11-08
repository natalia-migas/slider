import React, { Component } from 'react';
import images from '../images';

class Arrows extends Component {
  state = {
    currImg: 0
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.currPic !== this.state.currImg) {
      this.setState({ currImg: nextProps.currPic });
    }
  }

  prevSlide = () => {
    const { currImg } = this.state;
    if (currImg > 0) {
      this.setState({
        currImg: currImg - 1
      });
      this.props.moveSlide(currImg - 1);
    } else {
      this.setState({
        currImg: images.length - 1
      });
      this.props.moveSlide(images.length - 1);
    }
  };

  nextSlide = () => {
    const { currImg } = this.state;
    if (currImg < images.length - 1) {
      this.setState({
        currImg: currImg + 1
      });
      this.props.moveSlide(currImg + 1);
    } else {
      this.setState({
        currImg: 0
      });
      this.props.moveSlide(0);
    }
  };
  render() {
    return (
      <div className="btns">
        <button type="button" className="btn prev" onClick={this.prevSlide}>
          &#60;
        </button>
        <button type="button" className="btn next" onClick={this.nextSlide}>
          &#62;
        </button>
      </div>
    );
  }
}

export default Arrows;
