/* Basic Program
// function log(message) {
//     console.log(message);
// }
// var message="Hello World"
// log(message)
*/
/* Understanding the Compile Type part

function doSomething() {
    for(let i=0;i<5;i++) {
        console.log(i);
    }
    console.log('Finally', i);
}
doSomething()
*/
/* Variables in TS */
/*
var names:string = "John";
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2
console.log("name"+names)
console.log("first score: "+score1)
console.log("second score: "+score2)
console.log("sum of the scores: "+sum)
*/
//let count=5
//count='a'
//let a:number;
//a=1;
//a=true
//a='a';
/* Type Scripts Enums*/
/*
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[]=[1,2,3];

const ColorRed=0;
const ColorGreen=1;
const ColorBlue=2

enum Color { Red=0, Green=1, Blue=2, Purple=3 }
let backgroundColor=Color.Red
*/
/* Type Assertions */
/*
let message;
message='abc'
let endsWithC=(<string>message).endsWith('c')
interface String {
    endsWith(searchString: string, endPosition?: number): boolean;
};

*/
//--------------------------------------------------------------------------------------
/*Functions in TS */
//function defined 
/*
function greet():string { //the function returns a string
    return "Hello World"
 }
 
 function caller() {
    var msg = greet() //function greet() invoked
    console.log(msg)
 }
 
 //invoke function
 caller()
 */
/* Parameterized Function with return type */
/*
 function addNum(x:number, y:number): number {
     return x+y;
 }
 var x=addNum(10,25)
 console.log(x);
 */
/* Function with Void */
/*
function logOne(message: string | number): void {
    console.log(message);
    
}
logOne(25)
*/
//--------------------------------------------------------------------
