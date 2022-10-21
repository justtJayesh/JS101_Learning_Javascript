// User age filter.
// Given a list of user data with name and age, create a list of key-value pairs from the input.
// From the generated data, print the users whose age is more than 30.

let names = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let age = [32, 30, 26, 28, 44];
let details = [];

for(let i=0; i<names.length; i++){
    let data = {};
    data["name"] = names[i];
    data["age"] = age[i];
    details.push(data);
}

let bag = ""

for(let i=0; i<details.length; i++){
    (details[i].age) > 30 ? bag += details[i].name + " " : "";
}

console.log(bag);