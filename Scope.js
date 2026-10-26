//Global scope
//var is accessable outside and inside is  block (if/loop) scope
if (true) {
    var x = "I am var"
    console.log(x)
}
console.log(x)

//Var is only accessable inside the function(), outside not
function testVar() {
    var y = "I am var Inside function()"
    console.log(y)
}
//console.log(y)
testVar()

//let and const scope inside the block and outside the block
if (true) {
    let a = "I am let inside the block"
    const b = " I am const inside the block"
    console.log(a)
    console.log(b)
}
//console.log(a)
//console.log(b)


var username = "Nimitha" // Global Scope

function scopeTest() { // Function Scope starts

    console.log(username) // Global Scope
    var userAge = 30 // Function Scope

    console.log(userAge) // Function Scope

    if (true) { // Block Scope starts

        let userCity = "Thodupuzha" // Block Scope
        var userRole = "Manager" // Function Scope
        const userCountry = "India" // Block Scope

        console.log(username) // Global Scope
        console.log(userAge) // Function Scope
        console.log(userCity) // Block Scope
        console.log(userRole) // Function Scope
        console.log(userCountry) // Block Scope

    } // Block Scope ends

    console.log(userRole) // Function Scope (Accessible because var is function-scoped)

} // Function Scope ends

scopeTest() // Function Call

console.log(username) // Global Scope (Accessible outside the function)

// console.log(userAge) // Error: Function Scope
// console.log(userCity) // Error: Block Scope
// console.log(userRole) // Error: Function Scope
// console.log(userCountry) // Error: Block Scope