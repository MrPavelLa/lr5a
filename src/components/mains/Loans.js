import React from 'react';
import LoansCard from './LoansCard';
import LoansInfoCard from './LoansInfoCard';

const Loans = (props) => {
  const loanTypes = ['Mortgage', 'Consumer', 'Auto'];

  return (
    <div>
      <LoansInfoCard loanNumber={props.code} />
      {loanTypes.map((type, index) => (
        <LoansCard key={index} loanType={type} code={props.code} />
      ))}
    </div>
  );
};

export default Loans;
