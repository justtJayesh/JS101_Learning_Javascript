// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function

function myLastindexof(find){
    
    for(let i = arr.length-1; i>=0; i--){
        if(find == arr[i]){
            console.log(i);
            break;
        }
    }
}


let arr = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(myLastindexof("Penguin"));