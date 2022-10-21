
let products = ["Macbook", "iPhone 14", "AirPods", "iPad"];
let price = [180000, 80000, 25000, 55000];
let data = [];

for(let i=0; i<4; i++){
    let detail = {};
    detail["name"] = products[i];
    detail["price"] = price[i];
    data.push(detail)
}

console.log(data);