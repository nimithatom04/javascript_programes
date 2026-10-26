function displayResult(result){
    console.log(result)
}

function calculate(a,b,callback){
    let sum=a+b
    callback(sum )
}
calculate(2,3,displayResult)

function substraction(a,b,c){
    let sub= a-b
    c(sub)
}
substraction(5,3,displayResult)