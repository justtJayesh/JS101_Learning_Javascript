// Problem 2 : Given an array of string count the overall total number of characters


let str = ["Masai", "School", "Chunnu"];
let sum = 0;

for(let i=0; i<str.length; i++){
   sum += str[i].length
}

console.log(sum);