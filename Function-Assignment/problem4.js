// Problem 4: Write a function to check if the char is a small case or not.

function checklowerornot(char) {

    let lower = "qwertyuiopaasdfghjklzxcvbnm";
    let smallcase = false;
    
    for(let i=0; i<lower.length; i++){
        if(char == lower[i]){
            smallcase = true;
            break;
        }
    }
    return smallcase;
}

let character = checklowerornot("x");

character == true ? console.log("It is a small case character.") 
    : console.log("It is not a small case character.");

