const tail = require('../tail');
const assert = require('chai').assert;
const deepEqual = require('chai').deepEqual;

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });
});
