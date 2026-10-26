import { FruitsInheritance } from "./FruitsInheritance.js"

class AppleInheritance extends FruitsInheritance {
    constructor(color, taste, variety) {
        //this.color = color
        //this.taste = taste
        super(color, taste)
        this.variety = variety
    }
    isSweet() {
        console.log("Apple Function")
        console.log(this.color)
        console.log(this.taste)
        console.log(this.variety)
    }

}
const myApple = new AppleInheritance("Black", "Sweet", "HoneyCrisp")
myApple.isSweet()
myApple.isRipe()
const myFruits = new FruitsInheritance("Red", "Delicious")
myFruits.isRipe()
//myFruits.isSweet() cannot inherit properties from child class to parent class