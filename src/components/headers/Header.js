import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Profile from './Profile'; 
import usersData from '../data/users.json'; 

const Header = ({ userCode, setCode }) => {
  const [selectedCategory, setSelectedCategory] = useState('Deposits');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [localCode, setLocalCode] = useState(''); 
  const categories = {
    Deposits: ['Мои вклады', 'Расчетные', 'Накопительные', 'Валютные'],
    Loans: ['Мои кредиты', 'Ипотечные', 'Потребительские', 'Автокредиты'],
    Transaction: ['Переводы и платежи', 'Оплата счетов и услуг', 'Пополнение счета'],
  };

  const handleBarClick = (category) => {
    setSelectedCategory(category);
  };

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
    <>
      <div className='header_link'>
      <div className='Bank_Name_logo'>
        <img src="/BankLogo.png" alt="BankLogo" className="BankLogo" />
        <a className="BankName">ПРОГРЕСС БАНК</a>
      </div>

        <button className="Profile" onClick={openProfile}>
          {currentUser ? (
            <img src={currentUser.photo ? `/${currentUser.photo}` : '/NoProfile.jpg'} alt="Profile" className="ProfilePhoto" />

          ) : (
            <img src="/NoProfile.jpg" alt="NoProfile" className="NoProfile" />
          )}
        </button>
      </div>

      <div className="link-container">
      <button className='link' onClick={() => handleBarClick('Deposits')}>
        <Link to="/Deposits">Deposits</Link>
        {selectedCategory === 'Deposits' && <div className='ButBor'></div>}
      </button>
      <button className='link' onClick={() => handleBarClick('Loans')}>
        <Link to="/Loans">Loans</Link>
        {selectedCategory === 'Loans' && <div className='ButBor'></div>}
      </button>
      <button className='link' onClick={() => handleBarClick('Transaction')}>
        <Link to="/Transaction">Transaction</Link>
        {selectedCategory === 'Transaction' && <div className='ButBor'></div>}
      </button>
    </div>

      <div className="button-container">
        {categories[selectedCategory].map((text, index) => (
          <button key={index} className="bar-button" onClick={() => handleBarClick(text)}>
            {text}
          </button>
        ))}
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
      <Outlet />
    </>
  );
};

export default Header;




