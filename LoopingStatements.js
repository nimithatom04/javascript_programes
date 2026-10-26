/* Forloop
for(initialize;condition;updation){
code
} */

// print 1 to 5

for (let i = 1; i <= 5; i++) //i++ 1st print the value of i and then i+1
{                            // ++i print i+1 value 1st
    console.log(i)
}

for (let i = 1; i <= 10; i++) {
    console.log("Welcome")
}
console.log("*****************************")
for (let i = 5; i >= -5; i--) {
    console.log(i)
}

/*Whileloop-if we dont know number of iterations we use whileloop
1st condition check, if it is true then only it runs
initiialze:
while(condition){
i++
}  */

let count = 0
while (count < 3) {

    console.log(count)
    count++
}
console.log("*****************************")

let password = "12345"
let enteredPassword = "56789"
while (enteredPassword !== password) {
    console.log("Enter Valid Password")
    enteredPassword = "12345"
    console.log("LoggedIn successfully")

}

/* do while - 1st gives an output, 
do{
}while(condition)
    */
let k = 10
do {
    console.log(k)
    k++
}
while (k < 5)

let j = 1
while (j <= 10) {
    if (j >= 3) {
        break
    }
    console.log(j)
    j++
}


//Factorial

let number = 1
for (let i = 1; i <= 5; i++) {
     number = number * i
}
console.log("The factorial of 5 is: "+number);

//reverse a number
let number1=12345
let reverse =0
while(number1>0)
{
    let digit=number1%10
    reverse=reverse*10+digit
    number1=Math.floor(number1/10)
}
console.log("The revers of the number is: " +reverse)

