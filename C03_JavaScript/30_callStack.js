function greet(){
    sayHello();
    console.log("Back in greet");
}

function sayHello(){
    console.log("Hello");
}
// greet();  //Basically it is calling a function in main 

// HERE IS EXACTLY WHAT HAPPENS IN CALL STACK:
// Empty Stack: The script starts.
// greet() is called: It is pushed onto the top of the stack.
// Inside greet(), sayHello() is called: It is pushed on top of greet().
// sayHello() executes: It prints "Hello!".
// sayHello() finishes: It is "popped" off the stack. Now greet() is back at the top.
// greet() continues: It prints "Back in greet".
// greet() finishes: It is "popped" off the stack.
// Empty Stack: The script is done.


// VISUALIZING THE CALL STACK \
function one(){
    return 1;
}
function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}
three();