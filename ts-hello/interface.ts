interface PersonInterface {
    id:number
    name:string
    register(): string
}
class Persons implements PersonInterface {
    public id:number
    name:string

constructor(id:number, name:string) {
    this.id=id
    this.name=name
}
   // console.log(123);
   register() {
       return `${this.name} is now registered` 
   }
}
const shez=new Persons(1, 'Shaikh')
const shaz=new Persons(2, 'Shahazad')

// Subclass
class Employee extends Persons {
    position:string

    constructor(id:number, name:string, position:string) {
        super(id, name)
        this.position=position
    }
}
const emp=new Employee(3,'shawn', 'Developer')
console.log(emp);
console.log(emp.register());






