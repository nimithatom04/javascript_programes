class Car {   //class

    constructor(colour, brand) {

        console.log("Default Constructor calling")
        this.colour = colour
        this.brand = brand
    }


    drive() {     //method
        console.log("Drive a car")
    }
    start() {
        console.log("car start")
    }
    display() {
        console.log(this.brand)
        console.log(this.colour)
    }
}
const carobj = new Car("Black", "Tata")  //new object creation (constructor is invoked when object is created)
carobj.drive()
carobj.start()
carobj.display()

const carobj1 = new Car("Red", "Maruti")
carobj1.display()


//Student Class program

class Student {

    constructor(name, mark, age) {
        this.name = name
        this.mark = mark
        this.age = age
    }
    display() {
        console.log("The Name of the Student is: " + this.name)
        console.log("Total Mark is: " + this.mark)
        console.log("Age is: " + this.age)
    }
}
const student2= new Student("Nikhitha", 40, 10)
student2.display()

