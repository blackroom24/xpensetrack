import actionTypes from './actionTypes';
const AppReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default AppReducer;
