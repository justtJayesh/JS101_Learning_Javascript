// Problem 3
// Write a function isOdd which returns a boolean value based on the number is odd or not.
// Use this function to print the odd numbers from 0 to a given limit(included).


function isOdd(number) {
    if(number%2!=0){
        return true;
    }else{
        return false;
    }
}

let number = 10;
for(let i=0; i<=number; i++){
    if(isOdd(i)){
        console.log(i,"is Odd.");
    }
}