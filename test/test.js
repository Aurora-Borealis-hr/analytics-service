const chai = require('chai');
const expect = chai.expect();
const should = chai.should();

const app = require('../server.js');

describe('sample test', () => {
  const assert = (isTrue) => {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  }

  it('this sample test passes', () => {
    assert(true);
  })
});