const express = require('express');

const {
  getAllTransactions,
  addTransaction,
  deleteTransaction,
} = require('../controllers/transactions');

const router = express.Router();

router.route('/').get(getAllTransactions).post(addTransaction);
router.delete('/:id', deleteTransaction);

module.exports = router;
