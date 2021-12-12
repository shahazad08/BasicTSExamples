function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}
let numArray=getArray<number>([1,2,3,4])
let strArray=getArray<string>(['Shaikh', 'Mohammed', 'Shahazad'])

strArray.push('Rahul')  
numArray.push(25)
console.log(strArray);
console.log(numArray);


