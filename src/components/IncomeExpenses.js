import React from 'react';

export const IncomeExpenses = () => {
  return (
    <div className="inc-exp-container">
      <div className="inc-info">
        <h4>Income</h4>
        <p className="money plus">+0.00</p>
      </div>
      <div className="exp-info">
        <h4>Expense</h4>
        <p className="money minus">-$0.00</p>
      </div>
    </div>
  );
};
