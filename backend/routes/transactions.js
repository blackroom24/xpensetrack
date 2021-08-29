const express = require('express');
const {
  getAllTransactions,
  addTransaction,
  deleteTransaction,
} = require('../controllers/transactions');

const router = express.Router();

router.route('/').get(getAllTransactions).post(addTransaction);
router.route('/:id').delete(deleteTransaction);

module.exports = router;
