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