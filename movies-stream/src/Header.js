import React from 'react';
import filter from './imgs/Settings-adjust.png'
function Header() {
  return (
    <div className="header">
      <span className='paraSpan'>Discover your favourites</span>
      <input type="text" placeholder="Search here..." className="search-bar" />
      <button className="filter-btn"><img className="filter-img" src={filter} alt='Filter'></img></button>
    </div>
  );
}

export default Header;