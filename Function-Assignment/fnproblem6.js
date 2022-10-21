// Problem 6
// Given a string swap the case and print the output.


function swaplowercase(str) {
    
    let lower = "qwertyuiopasdfghjklzxcvbnm";
    let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let swap_case = "";
    
    for(let i=0; i<str.length; i++){
        for(let j=0; j<lower.length; j++){
            if(str[i] == upper[j]){
                swap_case += lower[j];
            }
        }
    }
    
    return swap_case;
}
function swapuppercase(str) {
    let lower = "qwertyuiopasdfghjklzxcvbnm";
    let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let swap_case = "";
    
    for(let i=0; i<str.length; i++){
        for(let j=0; j<lower.length; j++){
            if(str[i] == lower[j]){
                swap_case += upper[j];
            }
        }
    }
    
    return swap_case;
}
function upper(string) {
    
    let isIt = false;
    let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
    
    for(let i=0; i<string.length; i++){
        for(let j=0; j<upper.length; j++){
            if(string[i] == upper[j]){
                isIt = true;
            }
        }
    }
    
    return isIt;
}
function lower(string) {
    
    let isIt = false;
    let lower = "qwertyuiopasdfghjklzxcvbnm";
    
    for(let i=0; i<string.length; i++){
        for(let j=0; j<lower.length; j++){
            if(string[i] == lower[j]){
                isIt = true;
            }
        }
    }
    
    return isIt;
}



// Sample Input - Test
let word = "Test";
let new_word = "";

for(let i=0; i<word.length; i++){
    if(upper(word[i])){
        new_word += swaplowercase(word[i]);
    }else if(lower(word[i])){
        new_word += swapuppercase(word[i]);
    }
}

console.log(new_word);