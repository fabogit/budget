/* eslint-disable no-undef */
const app = require('../server');
const supertest = require('supertest');

const request = supertest(app);

it('Testing to see if Jest works', () => {
	expect(1).toBe(1);
});

it('Testing GET /test', async () => {
	expect.assertions(2);
	try {
		const response = await request.get('/test');
		expect(response.status).toEqual(200);
		expect(response.body.message).toBe('Connected');
	} catch (err) {
		console.log(err);
	}
});