const assert = require('chai').assert;
const tail = require('../tail');



describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse, 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("should return ['4', '5', '6'] for ['1', '4', '5', '6']", () => {
    assert.deepEqual(tail(['1', '4', '5', '6']), ['4', '5', '6']); 
  });


});