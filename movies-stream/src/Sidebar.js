import React from 'react';
import profilePicture from './imgs/profile.jpeg';
import iconApplication from './imgs/application1.png';
import location from './imgs/compass.png';
import save from './imgs/save.png';
import bell from './imgs/bell.png';
import play from './imgs/play-button.png';
import settings from './imgs/settings.png';
import addUserIcon from './imgs/Plus.png'; 
import profile1 from './imgs/profile1.jpeg'; 
import profile2 from './imgs/profile2.jpeg'; 
import profile3 from './imgs/profile3.jpeg'; 
import toggleIcon from './imgs/toggle.png'; 
import logoutIcon from './imgs/Logout.png';
import  mode from './imgs/mode.png'
import './css-files/Sidebar.css';
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
      <div className="user-menu">
        <div className="user-profile">
          <img src={profile1} alt="User 1" className="profile-img" />
          <img src={profile2} alt="User 2" className="profile-img" />
          <img src={profile3} alt="User 3" className="profile-img" />
          <button className="add-user-btn">
            <img src={addUserIcon} alt="Add User" />
          </button>
        </div>
        <div className="menu-icons">
          <div>
            <img src={toggleIcon} alt="Toggle" className="toggle" />
            <img src={mode} alt="Toggle" className="mode" />
          </div>
          <img src={logoutIcon} alt="Logout" className="menu-icon" />
        </div>
    </div>
    </div>
  );
}

export default Sidebar;
