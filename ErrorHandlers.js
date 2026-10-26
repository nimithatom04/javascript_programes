
try{
let a=10
let b=4
if(b===0){
    throw new Error("A number cannot be divided by 0")
}
let result=a/b
console.log(result)
}

catch(error)

{
console.log(error.message)
}
finally{
    console.log("Execution Stopped")
}