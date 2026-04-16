// These properties can be used to set only one value
let btns = document.querySelectorAll("button");

// btn.onclick = function () {
//     // console.log("button was clicked");
//     alert("button was clicked");
// };

// Multiple Buttons

for (btn of btns) {
  btn.onclick = sayHello; //sayHello () ke baad ye paranthesis nahi lgane q ki fuction yahi pr execute ho jyega
  btn.onclick = sayName;
//   HERE IT WILL ONLU PRINT sayName FUNCTION BECAUSE
// IT CANNOT MAKE 2 CHANGES 

  //   btn.onmouseenter = function () {
  //     console.log("YOU ENTERED A BUTTON");
  //   };
  console.dir(btn);
}

function sayHello() {
  alert("Hello");
}
function sayName() {
  alert("Sejuu");
}
