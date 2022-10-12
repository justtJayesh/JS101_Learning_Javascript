
// print all the movies except Ghajni and Pushpa

let arr = ["Batman","RRR","Pushpa","Avengers", "Ghajni","Black Panther"];

for(let i=0;i <= arr.length-1;i++){
    if((arr[i] == "Pushpa") || (arr[i] == "Ghajni")){
        continue;
    }else{
        console.log(arr[i]);
    }
}