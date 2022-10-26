// Write a custom function that has the same behavior of inbuilt Array Slice Function.

let arr = ["ant", "bison", "camel", "duck", "elephant"];
let narr = []
let start = 2;
let end;

if(end == undefined){
    for(let i=start; i<arr.length; i++){
        narr.push(arr[i]);
    }
}else if(start < 0){
    for(let i=start; i<arr.length; i--){
        narr.push(arr[i]);
    }
}else{
    for(let i=start; i<end; i++){
        narr.push(arr[i]);
    }
}

console.log(narr);