// Problem 4: Print the average of even numbers from 1 to 100 (both included)

let i = 1;
let even = 0;
let total_number_even = 0;
while (i<=100){
    if(i%2==0){
        even+=i;
        total_number_even++;
    }
    i++;
}
console.log(average = even/total_number_even);
