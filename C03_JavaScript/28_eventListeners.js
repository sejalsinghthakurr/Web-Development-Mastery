// let btns = document.querySelectorAll("button");

// for (btn of btns) {
// //   btn.addEventListener("click", sayHello);
//   btn.addEventListener("dblclick", sayName);

// }

// function sayHello() {
//     alert("Helloo");
// }
// function sayName() {
//     alert("Sejuu");
// }

// This for EventListeners
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor = "green";
}

btn.addEventListener("click", changeColor);

h1.addEventListener("click", changeColor);

h3.addEventListener("click", changeColor);