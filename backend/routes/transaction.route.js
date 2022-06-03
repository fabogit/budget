const express = require('express');

const transactionController = require('../controllers/transaction.controller');

const router = express.Router();

router.get('/test', transactionController.simpleResponse);
router.get('/', transactionController.getAllTransactions);
router.post('/create', transactionController.createNewTransaction);

module.exports = router;