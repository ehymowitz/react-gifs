import React, { Component } from 'react';

class Searchbar extends Component {
  handleUpdate = (event) => {
    this.props.function(event.target.value);
  }

  render() {
    return(
      <input
       type="text"
       className="form-control form-search"
       onChange={this.handleUpdate}
       />
    );
  }
}

export default Searchbar;
