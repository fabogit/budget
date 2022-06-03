const db = require('../data/database');
const { mongo } = require('../config/config');

/** Transaction Class */
class Transaction {
	/**
  * constructor description
  * @param	{!Date} transactionData.date - Transaction Date.
	* @param	{!number} transactionData.amount - Transaction amount absolute number.
	* @param	{!boolean} transactionData.isIncoming - Boolean, true if transaction amount is positive, false if true if transaction amount is negative.
	* @param	{!string} transactionData.origin - Frome where the transaction is coming.
	* @param	{!string} transactionData.destination - Where the transaction is going.
	*	@param	{?string}	transactionData.notes - Additional informations on the transaction.
	* @param	{?string[]} transactionData.categories - List of categories (['Phone', 'Rent', 'Job Salary', 'Gift']).
	* @param	{?string} transactionData.id - MongoDb _id, used to update/delete existing transactions.
	*/
	constructor(transactionData) {
		this.date = transactionData.date;
		this.amount = transactionData.amount;
		this.isIncoming = transactionData.isIncoming;
		this.origin = transactionData.origin;
		this.destination = transactionData.destination;
		this.notes = transactionData.notes;
		this.categories = transactionData.categories;
		// if exist already
		if (transactionData._id) {
			this.id = transactionData._id.toString();
		}
	}

	static async findAll() {
		const transactions = await db.getDb()
			.collection(mongo.collTransactions)
			.find()
			.toArray();
		return transactions;
	}

	async findTransaction() {

		await db.getDb()
			.collection(mongo.collTransactions)
			.findOne({

			});
	}

	async addTransaction() {
		const transaction = {
			date: this.date,
			amount: this.amount,
			isIncoming: this.isIncoming,
			origin: this.origin,
			destination: this.destination,
			notes: this.notes,
			categories: this.categories
		};
		await db.getDb()
			.collection(mongo.collTransactions)
			.insertOne(transaction);
	}
}

module.exports = Transaction;