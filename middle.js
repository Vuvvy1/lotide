
const middle = function(arr) {
  const noMiddle = [];
  const middleFound = [arr[(arr.length - 1) / 2]];
  const twoMiddleFound = [arr[(arr.length / 2) - 1], arr[(arr.length / 2) ]];
  if (arr.length <= 2) {
    return noMiddle;
  }
  if (arr.length % 2 === 1) {
    return middleFound;
  }
  if (arr.length % 2 === 0) {
    return twoMiddleFound;
  }

};
// console.log(middle([1])) //[]), true);
// console.log(middle([1, 2])) //[]), true);
// console.log(middle([1, 2, 3])) //[2]), true);
// console.log(middle([1, 2, 3, 4, 5, 6, 7])) //[4]), true);
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])) //[4, 5]), true);

module.exports = middle;