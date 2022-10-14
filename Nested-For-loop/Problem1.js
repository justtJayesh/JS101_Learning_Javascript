// Problem 1: Print the Calendar date in the below format
// number of day = 31,30 & 28.
// number of month = 12.


let day;

for(let month=1;month<=12;month++){
    if(month==2){
        day = 28;
    }else if(month == 4 || month == 6 || month == 8){
        day = 30;
    }else{
        day = 31;
    }

    for(let i = 1; i<=day; i++){
        console.log(i+"-"+month);
    }
}