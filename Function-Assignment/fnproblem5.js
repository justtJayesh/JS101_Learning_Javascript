// Problem 5: 
// Write a function to convert a character to lower case.
// Use this function to convert a given word to lower case.
// Use that function to convert an array of strings to array of lower case strings.

function changecase(character) {
    let upper = "QWERTYUIOPASDFGHJKLZXCVBNM"
    let lower = "qwertyuiopasdfghjklzxcvbnm";
    let char_lower = "";
    
    for(let i=0; i<character.length; i++){
        for(let j=0; j<lower.length; j++){
            if(character[i] == upper[j]){
                char_lower += lower[j];
            }else if(character[i] == lower[j]){
                char_lower += upper[j];
            }
        }
    }
    
    return char_lower;
}

function array_to_string(array) {
    let str = "";
    for(let i=0; i<array.length; i++){
        str += array[i];
    }
    return str;
}


console.log("Sample input 1\n");
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
let arr = ["MA", "SA", "I", "SCH", "OOL"]
console.log("Original Input: ",arr);
let string = array_to_string(arr);
console.log("Array converted to Arrya of String: ",string);
console.log("Case change: ",changecase(string));

console.log("\n");

console.log("Sample input 2\n")
// Sample Output ["ma", "sa", "i", "sch", "ool"]
let arr2 = ["ma", "sa", "i", "sch", "ool"];
console.log("Original Input: ",arr2);
let string2 = array_to_string(arr2);
console.log("Array converted to Arrya of String: ",string2);
console.log("Case change: ",changecase(string2));