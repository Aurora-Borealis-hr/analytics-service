const chai = require('chai');
const expect = chai.expect();
const should = chai.should();

const app = require('../server.js');

// describe('GET /status', () => {
//   it('respond with 200 status code', (done) => {
//     requestAnimationFrame(app)
//       .get('/status')
//       .expect(200, done);
//   });
// });

let x = 'abc';

describe('test test', () => {
  it('test?', () => {
    expect(x).to.be.a('string');
  });
});

// after('closer server connection after tests', () => {
//   app.close();
// });