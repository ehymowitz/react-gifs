import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectedGif) {
      this.props.selectedGif(this.props.id);
    }
  }
  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src= {src} alt="a gif" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
