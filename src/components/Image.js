import React, { Component } from 'react';
import images from '../images';

class Image extends Component {
  render() {
    const { currPic } = this.props;
    return (
      <div className="imgs-wrapper">
        <div className="img-wrapper">
          <img
            src={images[currPic].url}
            alt="slider img"
            key={images[currPic].id}
          />
        </div>
      </div>
    );
  }
}

export default Image;
