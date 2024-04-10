import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigate = () => {
  const [selectedCategory, setSelectedCategory] = useState('Equipment');

  const handleBarClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="link-container">
        <button
          className={`link ${selectedCategory === 'Equipment' && 'selected'}`}
          onClick={() => handleBarClick('Equipment')}
        >
          <Link to="/Equipment">Оборудование</Link>
        </button>
        <button
          className={`link ${selectedCategory === 'CreateBlock' && 'selected'}`}
          onClick={() => handleBarClick('CreateBlock')}
        >
          <Link to="/CreateBlock">Создать запись</Link>
        </button>
        <button
          className={`link ${selectedCategory === 'Journal' && 'selected'}`}
          onClick={() => handleBarClick('Journal')}
        >
          <Link to="/Journal">Журнал</Link>
        </button>
      </div>

      <Outlet />
    </>
  );
};

export default Navigate;
