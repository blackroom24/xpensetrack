const Transaction = require('../models/Transaction');

/**
 * @access public
 * @route GET /api/transactions
 * @desc Retrieval of transaction list
 */

const getAllTransactions = async (req, res) => {
  try {
    const transactionList = await Transaction.find();
    return res.status(200).json({ transactionList });
  } catch (error) {
    console.log(error.message);
    return res
      .status(404)
      .json({ message: 'List not found', error: error.message });
  }
};
/**
 * @access public
 * @route POST /api/transactions
 * @desc creating new transaction
 */

const addTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    return res
      .status(201)
      .json({ message: 'Transaction Created', transaction });
  } catch (error) {
    console.log(error.message);
    if (error.name === 'ValidationError') {
      return res
        .status(400)
        .json({ message: 'Invalid data', error: error.message });
    } else {
      return res.status(500).json({
        message: 'Failed in data entry due to server error',
        error: error.message,
      });
    }
  }
};

/**
 * @access public
 * @route DEL /api/transactions/:id
 * @desc deleting transaction by id
 */
const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(
      req.params.id,
      req.body,
    );
    return res
      .status(200)
      .json({ message: 'Transaction Deleted', transaction });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ message: 'Server Error', error: error.message });
  }
};

module.exports = {
  getAllTransactions,
  addTransaction,
  deleteTransaction,
};
