// function greet(){
//     console.log("Hello")
// };
function poem(){
    console.log("I'm a SuperHero Yeah! Yeah! Yeah!")
    console.log("I can do anything Yeah! Yeah! Yeah!")
}
function rollDice() {
   let random =  Math.floor(Math.random() * 6) + 1;
   console.log(random);
};

// Functions with Arguments
// function sum(a, b ){
//     console.log(a+b);
// }
// Average
function avg(a, b, c){
    let avg = (a + b + c)/3;
    console.log(avg);

}

// Hight Order Function
function multipleGreet(func, n){
    for(let i=1; i<=n; i++){
        func();
    }
}
let greet = function(){
    console.log("Namaste");
}  

// CALLING FUNCTIONS 
// greet();
// poem();
// rollDice();
// sum(7, 2);
// sum(475, 325);
// sum(47, 65);
// avg(47, 36, 69)
multipleGreet(function(){console.log("Hello!")}, 5);

