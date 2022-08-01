/*
    1- use command tsc --int to create tsc config file

    2- in ts config file => root dir => the path in which i put ts files in    
    ./src

    3- in ts config file => out dir => the path in which typeScipt generate     javaScipt code ./dist
    
    4- in ts config file => noimplectAny => will make you use any type and didn't rutun error    
    
    5- in ts config file => src map => using for debuging and testing
    
*/

/* 
// first function using typescript
assignment two
function calculate(numOne:number,numTwo:number):number {
  return numOne + numTwo;
}

console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2 

*/

/*  
// assignment three
function printInfo(valueOne:number|string, valueTwo:number|string):string {
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
*/

/* // assignment four
let arr: (number | boolean[] | (string | (string | number)[])[])[];
arr=[1,2,[true,false],['a',['b',4]]]
 */

// assignment 8
// Using The Function => Do Not Edit
function printInConsole(...rest:number[]|string[]|boolean[]){
  for(let i=0;i<rest.length;i++){
    console.log(`The Value Is ${rest[i]} And Type Is ${typeof(rest[i])} `)
  }
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
