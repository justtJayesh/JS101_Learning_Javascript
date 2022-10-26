 // Write a custom function that has the same behavior of inbuilt Array Includes Function

function myInclude(input){
    let flag = false;

    if((typeof input) == "string" || (typeof input == "number")){
        for(let i=0; i<arr.length; i++){
            if(input == arr[i]){
                flag = true;
                break;
            }else{
                flag = false;
            }
        }
        return flag;
    }
}



let arr = [1,2,3,4,5];
console.log(myInclude(1));