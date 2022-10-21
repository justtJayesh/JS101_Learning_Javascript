// Problem 5: Write a function to replace spaces in a given string with - .

function replacespace(str) {
    let new_str = "";
    for(let i=0; i<str.length; i++){
        if(str[i] == " "){
            new_str += "-";
        }else{
            new_str += str[i];
        }
    }
    
    console.log(new_str);    
}

replacespace("I am Inevitable")