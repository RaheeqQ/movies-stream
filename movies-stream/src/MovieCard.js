import React from 'react';

function MovieCard({ title, year, imageUrl }) {
  return (
    <div className="movie-card">
      <div className="movie-image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="overlay">
          <span className="movie-title">{title}</span>
          <br></br>
          <span className="movie-year">{year}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
