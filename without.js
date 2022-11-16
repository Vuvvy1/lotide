/*
const args = process.argv.slice(2);

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
assertEqual(eqArrays([args[0]], [args[1]]), true);
*/
const without = function(source, itemsToRemove) {
  let results = [];
  for (let i of source) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (i === itemsToRemove[x]) {break;}
      if (i !== itemsToRemove[x] && x + 1 === itemsToRemove.length) {
        results.push(i);
      }
    }
  }
  return results;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]