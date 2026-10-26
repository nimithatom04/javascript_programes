let fruits = ["Apple", "Orange", "Banana", "Mango", "Grapes"]
console.log(fruits)
console.log(fruits[1])
console.log(fruits.length)
fruits.push("Grapes")
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.unshift("Grapes")
console.log(fruits)
fruits.shift()
console.log(fruits)

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}
console.log("Looping Arrys using for of")
for (let fruit of fruits) {
    console.log(fruit)
}
console.log(fruits.includes("grapes"))
console.log(fruits.indexOf("Mango"))
console.log(fruits)
let SlicedArry = fruits.slice(2, 5)
console.log(SlicedArry)

//splice(start,deletecount,newitem)
fruits.splice(0, 0, "kiwi")
console.log(fruits)

fruits.splice(1, 2, "pineApple")
console.log(fruits)

let Vegitables = ["Beans", "Carrot", "Beetroot"]
let newArry = fruits.concat(Vegitables)
console.log(newArry)

let n = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < n.length; i++) {
    //sum= sum+n[i]
    sum += n[i]
}
console.log(sum)

//reduce()
const SumArry = n.reduce((total, value) => total + value, 0)
console.log(SumArry)


let FilterArry = []
for (i = 0; i < n.length; i++) {
    if (n[i] % 2 == 0) {
        FilterArry.push(n[i])

    }
}
console.log(FilterArry)

//filter()
const ArryFilter = n.filter((value)=>value%2==0)
console.log(ArryFilter)

//map()

let MappedArry=n.map((value)=>value*2)
console.log(MappedArry)

let Arry= n.filter((value)=>value%2==0).map((value)=>value*5).reduce((sum,value)=>sum+value)
console.log(Arry)


