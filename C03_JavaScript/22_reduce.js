let nums = [1, 5, 8, 6, 4];
let finalVal = nums.reduce((res, el) => {
//   console.log(res);
  return res + el;
});
// console.log("Final Value is " + finalVal);

// Maxof an array using Reduce
let arr = [41, 65, 84, 99, 102, 5, 105];
let max = arr.reduce((max, el) => {
  if (el > max) {
    return el;
  } else {
    return max;
  }
});
console.log(max);
