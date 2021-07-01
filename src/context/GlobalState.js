import React, { createContext, useReducer } from 'react';
import actionTypes from './actionTypes';
import AppReducer from './AppReducer';
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 200 },
    { id: 3, text: 'Book', amount: -40 },
    { id: 4, text: 'Camera', amount: -100 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: actionTypes.DELETE_TRANSACTION,
      payload: id,
    });
  }
  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
