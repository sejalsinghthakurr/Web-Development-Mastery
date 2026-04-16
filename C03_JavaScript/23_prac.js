// Multiple of 10 
let arr = [40, 30, 10, 80, 90, 150, 120];
let res = arr.every((el) => {
  return el % 10 == 0;
});

// Min number in Array
let nums = [ 47, 2, 3, 65, 32, 21, 8];
let min = nums.reduce((min, el) => {
    if(min > el){
        return el;
    } else{
        return min;
    };
});
