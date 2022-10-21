// Problem 1: Create a function to check if a number is Prime or Not

function checkPrime(num){
    let count = 0;
    for(let i=1; i<=num; i++){
        num%i==0 ? count++ : "";
    }
    count == 2 ? console.log(num,"is Prime.") : console.log(num, "is not Prime");
}

checkPrime(24)
