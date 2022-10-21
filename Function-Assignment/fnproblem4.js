// Problem 4
// Write code to calculate the average of an array.
// If there are no items in the array it should return 0


    
function avg_array(array) {
    let sum = 0;
    for(let i=0; i<array.length; i++){
        if(array[i].length != 0){
            sum += array[i];
        }else{
            return 0;
        }
        
    }
    let average = sum/array.length;
    return average;
}



let n = [1,2,3,4,5,6];
console.log(avg_array(n));
