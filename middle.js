const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) return false;
  }
  return true;
};
const middle = function(arr) {
  const noMiddle = [];
  const middleFound = arr[(arr.length - 1) / 2];
  const twoMiddleFound = arr[arr.length / 2] + arr[(arr.length / 2) + 1];
  if (arr.length % 2 === 0 && arr.length >= 2) {
    return twoMiddleFound;
  }
  if (arr.length % 2 !== 0 && arr.length >= 2) {
    return middleFound;
  } else return noMiddle;
};
assertEqual(eqArrays(middle([1]), []), true);
assertEqual(eqArrays(middle([1, 2]), []), true);
assertEqual(eqArrays(middle([1, 2, 3]), [2]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7]), [4]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]), true);