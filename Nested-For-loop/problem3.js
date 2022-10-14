// Problem 3: Print a box patterns using *


for(let farm = 1; farm <= 10; farm++){
    
    let bag = "";
    
    if(farm == 1 || farm == 10){
        for(let i = 1; i <= 10; i++){
            bag += "*" + "";
        }
    }else {
        for(let seed = 1; seed<=10; seed++){
            if(seed == 1 || seed == 10){
                bag += "*" + "";    
            }else{
                bag += " ";
            }  
        }  
    }
    
    console.log(bag);    
}



