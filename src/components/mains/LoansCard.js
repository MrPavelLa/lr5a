import React, { useState, useEffect } from 'react';
import PastButton from './PastButton';
import loanData from '../data/info.json';

const LoansCard = ({ loanType, code }) => {
  const [selectedLoan, setSelectedLoan] = useState(null);

  useEffect(() => {
    const selected = loanData.Loans[loanType];
    setSelectedLoan(selected);
  }, [loanType]);

  return (
    <div>
      {selectedLoan && (
        <div className='loancard-container'>          
          <img src={selectedLoan.LogoURL} alt="Logo" />
          <div className='containerText'>
          <h2>{selectedLoan.Description}</h2>
          <p>Процентная ставка: <span style={{ fontWeight: 'bold' }}>{selectedLoan.InterestRate}</span></p>
          <p>Срок кредитования: <span style={{ fontWeight: 'bold' }}>{selectedLoan.LoanTerms}</span></p>
          <p>Минимальная сумма кредита: <span style={{ fontWeight: 'bold' }}>{selectedLoan.MinimumLoanAmount}</span></p>
          <p>Максимальная сумма кредита: <span style={{ fontWeight: 'bold' }}>{selectedLoan.MaximumLoanAmount}</span></p>
          <PastButton loanType={loanType} code={code} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoansCard;
