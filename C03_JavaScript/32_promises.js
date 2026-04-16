function savetoDb(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("Success: Data was saved");
        } else{
            reject("Failure: Weak connection");
        }
    }); 
}

//This savetoDb function is basically a promise factory

savetoDb("apna college")  //req = promise object
    .then((result) => {
    console.log("Data 1 saved.");
    console.log(result);
    return savetoDb("sejal superstar");
})
.then((result) => {
    console.log("Data 2 saved.");
    console.log(result);
    return savetoDb("Sejal coder");  
})
.then((result) => {
    console.log("Data 3 saved");
    console.log(result);
    return savetoDb("sejal pretty");
})
.then((result) => {
    console.log("Data 4 saved.")
    console.log(result);
})
.catch((error) => {
    console.log("Promise was rejected");
    console.log(error);
});