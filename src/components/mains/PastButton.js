import React from 'react';
import loanData from '../data/info.json';

const PastButton = ({ loanType, code }) => {
  const handleClick = () => {
    const selectedLoan = loanData.Loans[loanType];
    const currentDate = new Date().toLocaleString();
    const newData = {
      code: code,
      description: selectedLoan.Description,
      date: currentDate,
    };

    fetch('http://localhost:3000/api/addData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData), 
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data added successfully:', data);
      })
      .catch((error) => {
        console.error('Error adding data:', error);
      });
  };

  return (
    <button  className="Past" onClick={handleClick}>Подать заявку</button>
  );
};

export default PastButton;

