
const tail = function(arr) {
  output = [];
  for (let i = 1; i < arr.length; i++) {
    output += arr[i];
  }
  return output;
};
module.exports = tail;