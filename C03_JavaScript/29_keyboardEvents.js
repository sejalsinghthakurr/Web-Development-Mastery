// POINTER EVENT
// let btn = document.querySelector("button")
// btn.addEventListener("click", function(event){ // This event inside a funtion is a default event
//     console.log(event);
// })

// KEYBOARD EVENT
// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function(event){
//     console.log("Code: " + event.code); 
//     console.log("Key: " + event.key);
// });

//PREVENT EVENT
// EXTRACTING FORM DATA
let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(form); //Easy way of accessing the elements 

    let user = this.elements[0];
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);
   
   
    // let inp =  document.querySelector("input");
    // console.dir(inp.value);
});