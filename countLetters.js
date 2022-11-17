const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letters) {
  let results = {};
  for (let letter of letters) {
    if (letter !== " ") {
      if (results[letter] === undefined) {
        results[letter] = 0;
      }
      results[letter] += 1;
    }
  }
  return results;
};
console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house").e, 3);