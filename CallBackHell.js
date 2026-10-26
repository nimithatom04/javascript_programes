/*function displaydata(cb1) {
    console.log("First Function Executed")
    cb1()
}

function callBackFunctionone(cb2) {
    console.log("Callback Function Executed")
    cb2()
}

function ednFunction() {
    console.log("Function Execution Stopped")
}

displaydata(function () {
    callBackFunctionone(function () {
        ednFunction()
    })
}) */



const displaydata = () => {
    return new Promise((resolve, reject) => {
        console.log("First Function Executed")
        resolve()
    })
}

const callBackFunctionone = () => {
    return new Promise((resolve, reject) => {
        console.log("CallBackFunction one Executed")
        let pass = false
        if (pass) {
            resolve("completed")
        } else {
            reject("Not completed")
        }
    })
}

const ednFunction = () => {
    return new Promise((resolve, reject) => {
        console.log("Function Execution stopped")
        resolve()
    })
}

displaydata().then(() => callBackFunctionone())
    .then(() => ednFunction())
    .then(() => { console.log("All function executed successfully") })
    .catch((error) => { console.error("The error message is : " + error) })



const fruits = () => {
    return new Promise((resolve)=>{
        resolve("Hello async await function")
    })
}

const paper = async ()=>{
    console.log("Function start")
   const result =  await fruits()
   console.log(result)
   console.log("Function stop")
}
paper()  