const expect = require('expect');
const request = require('supertest');

const { app } = require('./../app');

describe('Root URL', () => {
	it('should return 200', done => {
		request(app)
			.get('/')
			.expect(200)
			.end(done);
	});
});
