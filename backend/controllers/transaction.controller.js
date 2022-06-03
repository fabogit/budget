function simpleResponse(req, res) {
	res.status(200).send({message: 'Connected'});
}

module.exports = {
	simpleResponse: simpleResponse
};