// Write a custom function that has the same behavior of inbuilt String Substring Function.


function mySubstring(start,end){
    let bag = "";
    if(end == undefined){
        for(let i=start; i<str.length; i++){
            bag += str[i];
        }
    }else{
        for(let i=start; i<end; i++){
            bag += str[i];
        }
    }
    
    return bag;
}


const str = "mozilla";
console.log(mySubstring(3,5));
