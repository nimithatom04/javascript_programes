//Arithematic operators +,-,*,/,%,**
console.log("Arithematic operators")
let a= 10
let b=2
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

//Assignment Operators =,+=,-=,*=
console.log("Assignment Operators")
let x=10
//x=x+5
x+=5 //puls assignment operator
console.log(x)
x-=5
console.log(x) //the x is upadted on each step
x*=5
console.log(x)
x/=5
console.log(x)

//  ==,===,!=,!==,>,<,>=,<= compare two valus and return boolean as result
console.log("Comparison operators")

let c=20
let d=10
console.log(c==d) 
let e="10"
console.log(d==e) //checks only value is correct loose equalit
console.log(d===e) //checks type and value are same strict equality
console.log(d!=e) //only checks value Simple not equal operator
console.log(d!==e) //checks both the value and type  strict not equal operator
console.log(c>d)//Greaterthan operator
console.log(c<d)//Lessthan operator
console.log(d>=e) // only check the valuse not the type
console.log(d<=e)

// &&,||,! MutipleConditional at a time check combined and get the output as boolean
console.log("Conditional operators")
let age=22
let hasLicence=true
let canDrive=(age>=18) && hasLicence//logical AND
console.log("Can i drive? "+canDrive) //concat operator string puls value

let age2=16
let hasLicence2=false
let canDrive2=(age2>=18 || hasLicence) //OR operator
console.log("Can i drive?" ,canDrive2) //concat ","

console.log(!hasLicence2) //NOT operator gives the oppsite valuse of the boolean value
