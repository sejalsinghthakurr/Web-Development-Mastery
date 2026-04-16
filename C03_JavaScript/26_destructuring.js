let names = ["sejal", "riya", "carry", "bilu", "gopi", "tarzen" , "Jassi" ];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

// Destructuring
// let [winner, runnerup, secondRunnerup] = names;

// Destructuring & Rest 
// let [winner, runnerup, ...otherCandidates] = names;

// Destructuring for Objects
const student = {
    name : "Karan",
    age  : 16,
    class: 11,
    subjects: ["Hindi", "English", "Maths", "Science", "Social Science"],
    username: "karankarmu",
    password: "sojakaran"
};
let {username: user, password, city: place ="pune"} = student;