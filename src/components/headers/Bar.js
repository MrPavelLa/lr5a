import React from 'react';

const Bar = ({ buttonTexts }) => {
  return (
    <div className="bar">
      {buttonTexts.map((text, index) => (
        <button key={index} className="bar-button">
          {text}
        </button>
      ))}
    </div>
  );
};

export default Bar;
