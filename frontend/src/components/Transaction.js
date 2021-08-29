import React from 'react';
import { currencyformatIN } from '../util';

export const Transaction = ({ transaction, deleteTransaction }) => {
  const sign = transaction.amount > 0 ? '+' : '-';
  const liClass = transaction.amount > 0 ? 'plus' : 'minus';
  return (
    <li className={liClass}>
      {transaction.text}
      <span>
        {sign}₹{currencyformatIN(Math.abs(transaction.amount))}
      </span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="del-btn"
      >
        x
      </button>
    </li>
  );
};
