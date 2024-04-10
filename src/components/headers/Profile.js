import React, { useState } from 'react';
import '../../styles/Profile.css';

const Profile = ({ currentUser, authorizeUser, logoutUser, closeProfile, onCodeChange}) => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthorize = () => {
    authorizeUser(code, password);
    setCode('');
    setPassword('');
    onCodeChange(code);
  };
  const handleLogout = () => {
    logoutUser();
    setCode('');    
    setPassword('');
    onCodeChange('');
  };

  return (
    <div className="profile-dropdown">
      {currentUser ? (
        <div className="user-info">          
          <p>{currentUser.firstName} {currentUser.lastName}</p>
          <p>{currentUser.workshop}</p>
          <button onClick={handleLogout}>Выйти</button>
        </div>
      ) : (
        <div className="login-form">
          <p>Ваш код:</p>
          <input type="text" placeholder="Код" value={code} onChange={(e) => setCode(e.target.value)} />
          <p>Ваш пароль:</p>
          <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleAuthorize}>Войти</button>
        </div>
      )}
      <button onClick={closeProfile}>Close</button>
    </div>
  );
};

export default Profile;
