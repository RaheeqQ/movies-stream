import React from 'react';
import profilePicture from './imgs/profile.jpeg';
import iconApplication from './imgs/application1.png';
import location from './imgs/compass3.png';
import save from './imgs/save.png';
import bell from './imgs/bell.png';
import play from './imgs/play-button.png';
import settings from './imgs/settings.png';
import './App.css';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-pic">
        <img className='profilePicture' src={profilePicture} alt="Profile" />
      </div>
      <div className="icon">
        <button className="iconBtn"><img src={iconApplication} alt="app" /></button>
      </div>
      <div className="icon">
      <button className="iconBtn"><img src={location} alt="location" /></button>
      </div>
      <div className="icon">
      <button className="iconBtn"><img src={save} alt="save" /></button>
      </div>
      <div className="icon">
      <button className="iconBtn"><img src={bell} alt="bell" /></button>
      </div>
      <div className="icon">
      <button className="iconBtn"><img src={play} alt="play" /></button>
      </div>
      <div className="icon">
      <button className="iconBtn"><img src={settings} alt="setting" /></button>
      </div>
    </div>
  );
}

export default Sidebar;
