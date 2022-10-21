// Problem 3: Use the same function to print Non-Primes from 2 to a given limit.

function nonPrimenumbers(limit){
    for(let i=2; i<=limit; i++){
        let count = 0;
        for(let j=1; j<=i; j++){
            if(i%j==0){
                count++;
            }
        }
        count > 2 ? console.log(i,"is not prime") : "";
    } 
}

nonPrimenumbers(10)