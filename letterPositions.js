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
const letterPositions = function(letters) {
  const results = {};
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== " ") {
      if (results[letters[i]] === undefined) {
        results[letters[i]] = [];
      }
      results[letters[i]].push(i);
    }
  }
  return results;
};
assertEqual(eqArrays(letterPositions("lighthouse in the house")), true);
console.log(letterPositions("lighthouse in the house"));