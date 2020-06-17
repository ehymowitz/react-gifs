import React from 'react';
import Gif from './gif'

const GifList = ({ gifs, selectedGif }) => {
  return(
    <div className="gif-list">
      {gifs.map(gif => <Gif id={gif.id} key={gif.id} selectedGif={selectedGif} ></Gif>)}
    </div>
  );
};

export default GifList;
