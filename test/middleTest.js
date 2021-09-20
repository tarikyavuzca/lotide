const assert = require('chai').assert;
const middle = require('../middle')



describe("#middle", () => {
  it("should return ['Lighthouse'] for ['Yo Yo', 'Lighthouse, 'Labs']", () => {
    assert.deepEqual(middle(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse']);
  });

  it("should return ['4'] for ['1', '2', '4', '5', '6']", () => {
    assert.deepEqual(middle(['1', '2', '4', '5', '6']), ['4']); 
  });


});