// Map 
// Makes new array
let num = [1, 2, 3, 4, 5];

let double = num.map((el) => {
    return el * el;
});

// Marks into CGPA code 

let students = [
  {
    name: "shreya",
    marks: 98.4,
    },
  { name: "riya", 
    marks: 75.9 
    },
  { name: "suresh", 
    marks: 83.2 
    },
];
let cgpa = students.map((el) => {
    return el.marks /10;
});

// Filter 
let nums = [1, 2, 4, 3, 6, 5, 8, 7, 9, 10, 12, 13, 14, 15, 19, 20];
let even = nums.filter ((el) => {
  return el % 2 == 0;
});