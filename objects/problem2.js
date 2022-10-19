// Problem 2: Given a string print, the number of times each character appears.

let str = "Masai";
let data = {};

for(let i=0; i<str.length; i++){
    if(data[str[i]] == undefined){
        data[str[i]] = 1;
    }else{
        data[str[i]]++;
    }
}
console.log(data)

