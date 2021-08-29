import React, { createContext, useReducer } from 'react';
import { API_URL } from '../util';
import actionTypes from './actionTypes';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  loading: true,
  error: null,
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getAllTransactions() {
    try {
      const response = await axios.get(API_URL);
      const transactionList = response.data.transactionList;
      dispatch({
        type: actionTypes.GET_TRANSACTIONS,
        payload: transactionList,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.TRANSACTION_ERROR,
        payload: error,
      });
    }
  }
  async function addTransaction(transaction) {
    try {
      const response = await axios.post(API_URL, transaction);
      const data = response.data.transaction;
      dispatch({
        type: actionTypes.ADD_TRANSACTION,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.TRANSACTION_ERROR,
        payload: error,
      });
    }
  }
  async function deleteTransaction(id) {
    try {
      await axios.delete(`${API_URL}/${id}`);
      dispatch({
        type: actionTypes.DELETE_TRANSACTION,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.TRANSACTION_ERROR,
        payload: error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        getAllTransactions,
        deleteTransaction,
        addTransaction,
        loading: state.loading,
        error: state.error,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
