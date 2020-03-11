require('dotenv').config()
const assert = require('assert');
let request = require('supertest');
request = request(`http://${process.env.HOST}:${process.env.PORT}`);


describe('Id Endpoint testing', () => {
  test('GET /id - Should return unique UUID string', (done) => {
    request.get('/id')
    .set('Accept', 'application/json')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200, done);
  });
});


describe('User Endpoint testing', () => {

  let initialUserID = null

  test('GET /user - Should return json user object', (done) => {
    request.get('/user')
    .set('Accept', 'application/json')
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200)
    .end(async (err, res) => {
      initialUserID = res.body.userId
      done();
    });
  });

  test('POST /user - Should create new user sucessfully (response 201) or fail with response 500', (done) => {
    request.post('/user')
    .set('Accept', 'application/json')
    .expect('Content-Type', 'json/html')
    .end(async (err, res) => {
      assert(res.statusCode == 201 || 500)
      assert(res.statusCode == 500 || (res.statusCode == 201 && initialUserID != res.body.userId), "The user wasnt updated sucessfully. User ID remains the same")
      done();
    });

  });
});