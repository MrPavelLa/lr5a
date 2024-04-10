import React, { useState } from 'react';
import Profile from './Profile';
import usersData from '../data/users.json';
import '../../styles/Header.css';

const Header = ({ userCode, setCode }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [localCode, setLocalCode] = useState('');

  const openProfile = () => {
    setIsProfileOpen(true);
  };

  const handleCodeChange = (newCode) => {
    setLocalCode(newCode);
    setCode(newCode);
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  const authorizeUser = (code, password) => {
    const user = usersData.users.find((u) => u.code === code && u.password === password);
    setCurrentUser(user);
    closeProfile();
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };
  
  return (
    <div className='Header'>
      <div className='header_link'>
        <div className='Org_Name_logo'>
          <img src="/OrgLogo.png" alt="OrgLogo" className="OrgLogo" />
          <a className="OrgName">ТехноМехПлюс</a>
        </div>

        <button className="Profile" onClick={openProfile}>
          {currentUser ? (
            <img src={currentUser.photo ? `/${currentUser.photo}` : '/NoProfile.jpg'} alt="Profile" className="ProfilePhoto" />

          ) : (
            <img src="/NoProfile.jpg" alt="NoProfile" className="NoProfile" />
          )}
        </button>
      </div>
      {isProfileOpen && (
        <Profile
          currentUser={currentUser}
          authorizeUser={authorizeUser}
          logoutUser={logoutUser}
          closeProfile={closeProfile}
          onCodeChange={handleCodeChange}
        />
      )}
    </div>
  );
};

export default Header;