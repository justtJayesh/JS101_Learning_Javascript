// Problem 2
// Write code to find the absolute difference of two numbers



function difference(num1, num2) {
    let diff = num1 - num2;
    return diff;
}

function absolutevalue(value) {
    if(value < 0){
       value = (-1) * value;  
    }  
    return value;
}


// Sample Input-1,12,4
let a = 1; b = 12; c = 4;
let n1 = difference(a, b);
let n2 = difference(n1, c);
console.log(absolutevalue(n2));

// Sample Output-1, 8
let d = 1; e = 8;
let f = difference(d,e);
console.log(absolutevalue(f));

// Sample Output-2, 4, 18
let g = 24; i = 18;
let j = difference(g,i);
console.log(absolutevalue(j));

// Sample Output-2, 14
let x = 2; y = 14;
let z = difference(x, y);
console.log(absolutevalue(z));
