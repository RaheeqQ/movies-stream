import React from 'react';

function MovieCard({ title, year, imageUrl, style }) {
  return (
    <div className="movie-card" style={style}>
      <div className="movie-image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="overlay">
          <span className="movie-title">{title}</span>
          <br />
          <span className="movie-year">{year}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
