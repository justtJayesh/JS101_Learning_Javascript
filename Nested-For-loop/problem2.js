// Problem 2: Print Prime Numbers from 1 to given limit


for(let j = 1; j <= 10; j++){

    let prime = 0;
    
    for(let i=1;i<=10;i++){
        j%i==0 ? prime++ : "";
    }
    
    prime == 2 ? console.log(j + " is prime") : console.log(j + " is not prime");
    
}





