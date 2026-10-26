let age:number = 20
let type:boolean = true
let c:string ="test data"
let num: number=25
//num ="twentyfive" type conversion is not possible in typescript
num =21

//function with parameter
function add(a:number,b:number){
    console.log(a+b)
}
add(20,30)

//

function sub(x:number,y:number):number{
    return x-y
}
console.log(sub(30,30))


function displayDetails(price:number, brand:string):void{
    console.log(price + "," +brand)
}
displayDetails(20000,"hp")

//Arry 

let mark:number[]= [20,30,50,60]
mark.push(70)
//mark.push("hi")  // type cannot be changed  in typescript 
console.log(mark)


//object

let user:{name:string, age:number, City:string}={
name: "Nimitha ",
age: 30,
City:"Thodupuzha"
}

console.log(user)