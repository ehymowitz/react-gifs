import React, { Component } from 'react';
import giphy from 'giphy-api';

import Gif from './gif'
import Searchbar from './searchbar'
import GifList from './gif_list'

const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      selectedGif: "a1QLZUUtCcgyA"
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState({
          gifs: result.data
        });
      }
    );
  }

  selectedGif = (id) => {
    this.setState({
      selectedGif: id
    })
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <Searchbar function={ this.search }></Searchbar>
          <div className="selected-gif">
            <Gif id={this.state.selectedGif}></Gif>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectedGif={this.selectedGif}></GifList>
        </div>
      </div>
    );
  }
}

export default App;
