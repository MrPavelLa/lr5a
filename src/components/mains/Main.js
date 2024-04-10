import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Equipment from './Equipment';
import CreateBlock from './CreateBlock';
import Journal from './Journal';
const Main = ({ code }) => {

  return (  
    <Routes>      
      <Route path="Equipment" element={<Equipment code={code} />} />
      <Route path="CreateBlock" element={<CreateBlock code={code} />} />
      <Route path="Journal" element={<Journal code={code} />} />     
    </Routes>
  );
};

export default Main;
