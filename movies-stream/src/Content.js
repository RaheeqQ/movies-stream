import React from 'react';
import MovieCard from './MovieCard';
import squidGameImage from './imgs/SG.jpeg';
import duneImage from './imgs/dune.jpeg';
import sharkImage from './imgs/Shark.png';
import riverdaleImage from './imgs/riverdale.jpeg';
import tallGirlImage from './imgs/Tall_Girl.jpeg';
import playButton from './imgs/play-button.png'
import './css-files/Content.css'
function Content() {
  return (
    <div className="main-content">
      <div className="movie-section">
        <MovieCard style={{ width: '390px', height: '200px' }} title="Squid Game " year="2021" imageUrl={squidGameImage} />
        <MovieCard style={{ width: '300px', height: '200px' }} title="Dune " year="2021" imageUrl={duneImage} />
      </div>

      <h2 className='paraSpan' style={{paddingLeft:'20px'}}>Continue watching <span className='three-movies'>(3 Movies Remaining)</span> <span><button className='see-more'>see more</button></span></h2>
      <div className="movie-section">
        <MovieCard style={{ width: '300px', height: '200px' }} title=" " year="" imageUrl={sharkImage} />
        <div className='Shrek-riverdale'>
          <p className='movie-name'>Shrek 3 2022 <span className='play-button'><img src={playButton} alt="" /></span></p>
        </div>
        <MovieCard style={{ width: '300px', height: '200px' }} title=" " year="" imageUrl={riverdaleImage} />
        <div className='Shrek-riverdale'>
          <p className='movie-name'>Riverdale 2 2019 <span className='play-button2'><img src={playButton} alt="" /></span></p>
        </div>
        <MovieCard style={{ width: '300px', height: '250px' }} title="" year="" imageUrl={tallGirlImage}/>
      </div>
    </div>
  );
}

export default Content;
