import React, { useState, useEffect } from 'react';
import transactionData from '../data/datatransaction.json';
import TransactionChart from './TransactionChart';

const Transaction = (props) => {
  const [transactions, setTransactions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortType, setSortType] = useState('date');

  useEffect(() => {
    const userTransactions = transactionData[props.code] || [];
    setTransactions(userTransactions);
  }, [props.code]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (type) => {
    setSortType(type);
  };

  const sortTransactions = (type) => {
    switch (type) {
      case 'date':
        return transactions.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'amount':
        return transactions.slice().sort((a, b) => b.amount - a.amount);
      case 'name':
        return transactions.slice().sort((a, b) => a.operationName.localeCompare(b.operationName));
      default:
        return transactions;
    }
  };
  if (!props.code || props.code.trim() === '') {
    return (   
      <div className='TransactCont'> 
      <p>У вас нет операций</p>;
      </div>
      )
  }
  const filteredTransactions = selectedCategory === 'all'
    ? sortTransactions(sortType)
    : sortTransactions(sortType).filter(transaction => transaction.category === selectedCategory);

  return (   
    <div className='TransactCont'>
       <div className= 'TransactionChart'>      
      <TransactionChart transactions={transactions} />
      </div>
      <div className= 'TransF'>
      <div className='TransBut'>
        <button onClick={() => handleCategoryChange('all')}>Все</button>
        <button onClick={() => handleCategoryChange('пополнение')}>Пополнение</button>
        <button onClick={() => handleCategoryChange('оплата')}>Оплата</button>
      </div>

      <div>
        <label htmlFor="sort">Сортировка: </label>
        <select id="sort" onChange={(e) => handleSortChange(e.target.value)}>
          <option value="date">По дате&#x25BC;</option>
          <option value="amount">По сумме&#x25BC;</option>
          <option value="name">По наименованию операции&#x25BC;</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Наименование операции</th>
            <th>Дата</th>
            <th>Время</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.operationName}</td>
              <td>{transaction.date}</td>
              <td>{transaction.time}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Transaction;
