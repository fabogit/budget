const app = require('./server');

const { node, mongo } = require('./config/config');

try {
	// connect db & run server
	// await db.connectToDb(mongo.uri);
	const nodePort = node.port;
	const nodeHost = node.host;
	const server = app.listen(nodePort, nodeHost, () => {
		console.log(
			` NodeJS  →  @${nodeHost}:${server.address().port}`
		);
	});
} catch (error) {
	console.log(` ERROR →  ${error}`);
}