// Problem 1. Write a custom function that has the same behavior of inbuilt Array Join

function join(arr) {
    let bag = "";
    for (let i = 0; i <= arr.length - 1; i++) {
        if (i == arr.length - 1) {
            bag = bag + arr[i];
        } else {
            bag = bag + arr[i] + "-";
        }
    }
    console.log(bag);

}
join(["mayur", "aniket", "rahul", "suresh"]);