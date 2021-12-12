class Person {
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
const brad=new Person(1, 'Shaikh')
const mike=new Person(2, 'Shahazad')

console.log(brad.register());


console.log(brad.id, mike);




