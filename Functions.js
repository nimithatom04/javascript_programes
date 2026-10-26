function add() {
    let a = 2
    let b = 5
    let c = a + b
    console.log(c)
}
add()

//Print Details

function printMyDetails() {
    let firstName = "Nimitha"
    let lastName = "Tom"
    let age = 30
    let city = "Thodupuzha"
    let qualification = "Masters"
    console.log("First Name : " + firstName)
    console.log("Last Name : " + lastName)
    console.log("Age : " + age)
    console.log("City : " + city)
    console.log("Qualification : " + qualification)
}
printMyDetails()

//functions with parameters

function substraction(a, b) {
    let result = a - b
    console.log(result)
}
substraction(10,5)
substraction(100,200)

//function with return type

function multiplication(a,b,c){
    let ans=a*b*c
    return ans
}
console.log(multiplication(2,3,6))

let star=multiplication(1,10,100)
console.log(star)

//Anonymous funcion - store a function to a variable. Have no name
const anonymousFunction =function(){
    console.log("Hello from anonymous function")
}
anonymousFunction()


//Arrow function - normal function short method
//()=>

const display=function(a,b){
    return(a+b)
}
console.log(display(2,5))

const arrowFun=(x,y)=>{return(x*y)}
console.log(arrowFun(4,5))