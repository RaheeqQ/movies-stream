import React from 'react';
import MovieCard from './MovieCard';
import squidGameImage from './imgs/SG.jpeg';
import duneImage from './imgs/dune.jpeg';
import sharkImage from './imgs/Shark.png';
import riverdaleImage from './imgs/riverdale.jpeg';
import tallGirlImage from './imgs/Tall_Girl.jpeg';
function Content() {
  return (
    <div className="main-content">
      <div className="movie-section">
        <MovieCard title="Squid Game " year="2021" imageUrl={squidGameImage} />
        <MovieCard title="Dune " year="2021" imageUrl={duneImage} />
      </div>

      <h2 className='paraSpan'>Continue watching</h2>
      <div className="movie-section">
        <MovieCard title="Shrek 3 " year="2022" imageUrl={sharkImage} />
        <MovieCard title="Riverdale 2 " year="2019" imageUrl={riverdaleImage} />
        <MovieCard title="" year="" imageUrl={tallGirlImage}/>
      </div>
    </div>
  );
}

export default Content;
