//JSON.parse(data)
let jsonResponce = 
    '{"fact": "Approximately 40,000 people are bitten by cats in the U.S. annually.","length": 68}';

// console.log(jsonResponce);  //if we write (jsonResponce.fact) it will throw error
let validResponce = JSON.parse(jsonResponce);
// console.log(validResponce);
// console.log(validResponce.fact); //Now we can access its key-value pair

//JSON.stringify(JSON)
let student = {
    name: "Sejal",
    marks: 98,
};
console.log(JSON.stringify(student));
