import actionTypes from './actionTypes';

const AppReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GET_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case actionTypes.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload,
        ),
      };
    case actionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case actionTypes.TRANSACTION_ERROR:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default AppReducer;
