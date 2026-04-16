// let  arr = [1, 2, 3, 4, 5];
// forEach
// arr.forEach(function (element) {
//     console.log(element);
// });
// Arrow Funcction for above
// arr.forEach((element) => {
//   console.log(element);
// });
// forEach for objects
let arr = [
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

arr.forEach((student) => {
    console.log(student.marks)
});