async  function greet() {
    // abc.abc(); //promise rejected abc not defined
    throw "404 page not found"; //It throws an error
    return "hello"; //promise fulfilled
}
greet()
.then((result) => {
    console.log("promise was fulfilled");
    console.log("result was: " + result);
})
.catch((err) => {
    console.log("promise was rejected with err: " + err);
})