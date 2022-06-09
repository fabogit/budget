const Transaction = require('../models/transaction.model');

function simpleResponse(req, res) {
	res.status(200).send({message: 'Connected'});
}

async function getAllTransactions(req, res, next){
	try {
		let allTransactions = await Transaction.findAll();
		res.status(200).send(allTransactions);
	} catch (error) {
		next(error);
	}
}

async function createNewTransaction(req, res, next) {
	const transaction = new Transaction({...req.body});
	try {
		await transaction.addTransaction();
		res.status(201).send({message: 'Transaction created'});
		return;
	} catch (error) {
		next(error);
		return;
	}
	//res.redirect('/transactions');
}

module.exports = {
	simpleResponse: simpleResponse,
	getAllTransactions: getAllTransactions,
	createNewTransaction: createNewTransaction
};