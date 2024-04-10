import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Ссылки</h3>
          <ul>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Поддержка</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Приложение</h3>
          <ul>
            <li><a href="#">Скачать для iOS</a></li>
            <li><a href="#">Скачать для Android</a></li>
          </ul>
        </div>
      </div>
      <div className="footerbottom"> 
        <div className="LeftText">
          <p>2024 ТехноМехПлюс. &#169;</p>                            
        </div>
      </div>
    </>
  );
};

export default Footer;
