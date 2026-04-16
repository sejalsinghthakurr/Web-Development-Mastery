// Every 
let arr = [2, 4, 6, 8, 9];
let every = arr.every((el) => {
  return el % 2 == 0; //This will return false bcoz it has one odd number(9)
});

// Some
let some = arr.some((el) => {
  return el % 2==0; //This will return true bcoz it has one even number
});
