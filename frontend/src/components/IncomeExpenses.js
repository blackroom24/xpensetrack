import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { currencyformatIN } from '../util';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div className="inc-info">
        <h4>Income</h4>
        <p className="money plus">₹{currencyformatIN(income)}</p>
      </div>
      <div className="exp-info">
        <h4>Expense</h4>
        <p className="money minus">₹{currencyformatIN(expense)}</p>
      </div>
    </div>
  );
};
