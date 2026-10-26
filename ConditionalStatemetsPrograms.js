//Posititve/Negative Number

let number = -12
if (number >= 0) {
    console.log("Positive Number")
}
else {
    console.log("Negative Number")
}

//Even/Odd

let num = 10
if (num % 2 === 0) {
    console.log("Even Number")
}
else {
    console.log("odd Number")
}

//Largest Among three no.

let a = 30
let b = 20
let c = 10
if (a > b && a > c) {
    console.log("a is greater")
}
else if (b > c && b > a) {
    console.log("b is greater")
}
else {
    console.log("c is grater")
}

//Calculator

a = 10
b = 20
let Operator = "-"
switch (Operator) {
    case "+":
        console.log(a + b)
        break
    case "-":
        console.log(a - b)
        break
    case "*":
        console.log(a * b)
        break
    case "/":
        console.log(a / b)
        break
    case "%":
        console.log(a % b)
        break
    default:
        console.log("Invalid operator")
}

//Leap year or not
let year = 2016
if (year % 400 === 0 || (year / 4 === 0 && year % 100 !== 0)) {
    console.log("Leap Year")
}
else {
    console.log("Leap Year")
}

//prime number 2,3,5,7,11,13

let no = 200
if (no <= 1) {
    console.log("Not a prime number")
}
else if (no % 2 == 0 && no > 2) {
    console.log("Not a prime number")
}
else {
    console.log("Is a prime number")
}

