// Problem 1: Given an array find the unique items in the array.

let people_attending = ["Jayesh","Manthan","Ankit","Bhushan","Ashwin","Ankit", "Darshal","Manthan"];

let unique_attendies = {};

for(let i=0; i<people_attending.length; i++){
    unique_attendies[people_attending[i]] = 1;   
}
console.log(unique_attendies);