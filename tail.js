const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  output = [];
  for (let i = 1; i < arr.length; i++) {
    output += arr[i];
  }
  return output;
};
console.log(tail([1,2,3]));
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse" + "Labs"]); // => will always fail!
assertEqual(result.length, 2);
console.log(result[0] + result[1]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!