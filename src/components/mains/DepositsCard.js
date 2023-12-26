import React, { useState, useEffect } from 'react';
import depositData from '../data/info.json';
import PastButton from './PastButton';

const DepositsCard = ({ depositType, code }) => {
  const [selectedDeposit, setSelectedDeposit] = useState(null);

  useEffect(() => {
    const selected = depositData.Deposits[depositType];
    setSelectedDeposit(selected);
  }, [depositType]);

  return (
    <div>
      {selectedDeposit && (
        <div className='depositecard-container'>
          <img src={selectedDeposit.LogoURL} alt="Logo" />
          <div className='containerText'>
          <h2>{selectedDeposit.Description}</h2>
          <p>Процентные ставки: <span style={{ fontWeight: 'bold' }}>{selectedDeposit.InterestRate}</span></p>
          <p>Сроки вкладов: <span style={{ fontWeight: 'bold' }}>{selectedDeposit.DepositTerms}</span></p>
          <p>Минимальная сумма вклада: <span style={{ fontWeight: 'bold' }}>{selectedDeposit.MinimumDepositAmount}</span></p>
          <p>Возможность пополнения и частичного снятия: <span style={{ fontWeight: 'bold' }}>{selectedDeposit.DepositReplenishmentAndPartialWithdrawal}</span></p>
          <p>Условия начисления процентов: <span style={{ fontWeight: 'bold' }}>{selectedDeposit.InterestAccrualConditions}</span></p>          
          <PastButton depositType={depositType} code={code} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DepositsCard;
