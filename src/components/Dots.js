import React, { Component } from 'react';
import images from '../images';

class Dots extends Component {
  state = {
    currDot: 0,
    qnt: images
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ currDot: nextProps.currPic });
  }

  onClick = (i, e) => {
    e.preventDefault();
    this.setState({
      currDot: i
    });
    this.props.setSlide(i);
  };

  render() {
    const dots = this.state.qnt.map((dot, i) => {
      return (
        <button
          key={i}
          className={`dot ${i === this.state.currDot ? 'active' : ''}`}
          onClick={this.onClick.bind(this, i)}
        />
      );
    });
    return <div className="dots">{dots}</div>;
  }
}

export default Dots;
