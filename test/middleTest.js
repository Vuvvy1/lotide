const middle = require('../middle');
const assert = require('chai').assert;
const deepEqual = require('chai').deepEqual;

describe("#middle", () => {
  it("[1] returns []", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("[1, 2] returns []", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("[1, 2, 3, 4, 5, 6, 7] returns [4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); 
  });
  it("[1, 2, 3, 4, 5, 6, 7, 8] returns [4, 5] ", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); 
  });
});

//const assert = require('chai').assert;
// console.log(middle([1]))
// assertEqual(eqArrays(middle([1]), []), true);
// console.log(middle([1, 2]))
// assertEqual(eqArrays(middle([1, 2]), []), true);
// assertEqual(eqArrays(middle([1, 2, 3]), [2]), true);
// console.log(middle([1, 2, 3, 4, 5, 6, 7]))
// console.log(eqArrays(middle([1, 2, 3, 4, 5, 6, 7]), [4]))
// assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7]), [4]), true);

// assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]), true);
