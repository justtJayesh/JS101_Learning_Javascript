// Problem 1 : Given a string count the number of words in that string

let sen = "My name is Tony Stark and I'm a Billionaire";
let count = 0;

for(let i=0; i <= sen.length-1; i++){
    if(sen[i]==" "){
        count++;
    }
}
if(sen.length != 0){
   console.log(count+1); 
}else{
    console.log(0);
}



