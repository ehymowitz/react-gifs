import React, { Component } from 'react';
import giphy from 'giphy-api';

import Gif from './gif'
import Searchbar from './Searchbar'
import GifList from './GifList'

const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gif: [],
      selectedGif: ""
    };
  }

  search = () => {

  }
}

export default App;
