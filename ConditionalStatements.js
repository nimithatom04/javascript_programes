/* 
if(condition){
code tobe excute
} */

let age = 55
if (age > 20) {
    console.log("you are eligible")
}
else {
    console.log("you are not eligible")
}

/* if(conditon1){
}
else if(conditon2){
}  
.
.
else{
} */


if (age < 12) {
    console.log("You are not eligible, you are too young, ")
}

else if (age > 50) {
    console.log("You are not eligible, above 50 years old")
}

else {
    console.log("You are eligible")
}

/*
switch(exprn)
{
case1:
case2:
.
.
.
case n:

default:
}
*/

let day = 10
switch (day) {
    case 1:
        console.log("Today is Monday")
        break
    case 2:
        console.log("Today is Tuesday")
        break
    case 3:
        console.log("Today is Wednesday")
        break
    case 4:
        console.log("Today is Thursday")
        break
    case 5:
        console.log("Today is Friday")
        break
    case 6:
        console.log("Today is Saturday")
        break
    case 7:
        console.log("Today is Sunday")
        break

    default:
        console.log("Invalid Day")

}

let letter1 = "u"
switch (letter1) {
    case "a":
        console.log("The letter is vowel")
        break
    case "e":
        console.log("The letter is vowel")
        break
    case "i":
        console.log("The letter is vowel")
        break
    case "o":
        console.log("The letter is vowel")
        break
    case "u":
        console.log("The letter is vowel")
        break
    default:
        console.log("Not a vowel")
}

let letter2 = "e"
switch (letter2) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("The letter is vowel")
        break
    default:
        console.log("Not a vowel")

}


/*Ternary Operator - if else short method
condition ? valueIfTrue : valueIfFalse */

let mark = 5
const result = (mark >= 18) ? "pass" : "failed"
console.log(result)