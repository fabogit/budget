/* eslint-disable no-undef */
const nodeServer = {
	host: process.env.nodeServer_host || HOST,
	port: process.env.PORT || process.env.nodeServer_port,
	enviroment: process.env.NODE_ENV || 'development'
};

const mongoDb = {
	uri: nodeServer.enviroment === 'production' ? process.env.mongoDb_uriCloud : process.env.mongoDb_uriLocalhost,
	dbName: process.env.mongoDb_databaseName,
	collTransactions: process.env.mongoDb_collectionTransactions,
};

module.exports = {
	node: nodeServer,
	mongo: mongoDb,
};