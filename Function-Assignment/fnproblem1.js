// Problem 1
// Write a function named addNumbers which takes two numbers as input and return their sum.
// Use the function to calculate the sum of given three numbers.

function addNumbers(num1, num2) {
    let add = num1 + num2;
    return add;
}

let a = 12; b = 5; c = 8;
let sum_of_two = addNumbers(a,b);
let total_sum = addNumbers(sum_of_two,c);

console.log(total_sum);