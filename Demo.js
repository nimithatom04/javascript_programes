"use strict";
let age = 20;
let type = true;
let c = "test data";
let num = 25;
//num ="twentyfive" type conversion is not possible in typescript
num = 21;
//function with parameter
function add(a, b) {
    console.log(a + b);
}
add(20, 30);
//
function sub(x, y) {
    return x - y;
}
console.log(sub(30, 30));
function displayDetails(price, brand) {
    console.log(price + "," + brand);
}
displayDetails(20000, "hp");
//Arry 
let mark = [20, 30, 50, 60];
mark.push(70);
//mark.push("hi")  // type cannot be changed  in typescript 
console.log(mark);
//object
let user = {
    name: "Nimitha ",
    age: 30,
    City: "Thodupuzha"
};
console.log(user);
