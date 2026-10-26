//typescript

class Employee {

name: string
id:string 
salary:number 
constructor (name:string,Id:string,salary:number){
this.name=name
this.id= Id
this.salary= salary 
}

getDetails(){
return this.name
}
}
const obj1 = new Employee("Nimitha", "ABC",5000)
console.log(obj1.getDetails())