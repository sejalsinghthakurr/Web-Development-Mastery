let sum = 47;  //Global Scope
function calSum(a, b){
    let sum = a + b; //Function scope
    console.log(sum);
}
// Block scope
for(let i=0; i<=6; i++){
    console.log(i);
}
// Lexical scope (Nested)
function outerFunc(){

}
// calSum(4, 7);
 