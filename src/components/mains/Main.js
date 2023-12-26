import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Deposits from './Deposits';
import Loans from './Loans';
import Transaction from './Transaction';
const Main = ({ code }) => {

  return (    
    <Routes>      
      <Route path="Deposits" element={<Deposits code={code} />} />
      <Route path="Loans" element={<Loans code={code} />} />
      <Route path="Transaction" element={<Transaction code={code} />} />     
    </Routes>
  );
};

export default Main;
