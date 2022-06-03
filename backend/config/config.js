/* eslint-disable no-undef */
const nodeServer = {
	host: process.env.nodeServer_host || HOST,
	port: process.env.PORT || process.env.nodeServer_port
};

const mongoDb = {
	uri: process.env.mongoDb_uriLocalhost || process.env.mongoDb_uriCloud,
	dbName: process.env.mongoDb_databaseName,
	collTransactions: process.env.mongoDb_collectionTransactions,
};

module.exports = {
	node: nodeServer,
	mongo: mongoDb,
};