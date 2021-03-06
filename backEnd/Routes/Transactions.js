const express = require('express')
const router = express.Router();
const { 
    getTransactions,
    createTransaction,
    getTransaction,
    updateTransaction,
    deleteTransaction
} = require('../controllers/transaction')



router.route('/')
.get(getTransactions)
.post(createTransaction);

router.route('/:id')
.get(getTransaction)
.put(updateTransaction)
.delete(deleteTransaction)

module.exports = router;