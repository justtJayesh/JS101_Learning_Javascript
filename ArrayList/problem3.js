// Problem 3 : Given an array of numbers find the average of all the even numbers.

let numbers = [12, 15, 8, 22, 19, 27, 30, 26, 49];
let sum = 0;
let count = 0;

for(let i = 0; i <= numbers.length-1; i++){
    if(numbers[i]%2==0){
        sum += numbers[i];
        count++;
    }
}

console.log(sum/count);