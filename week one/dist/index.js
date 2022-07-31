"use strict";
/*
    1- use command tsc --int to create tsc config file

    2- in ts config file => root dir => the path in which i put ts files in
    ./src

    3- in ts config file => out dir => the path in which typeScipt generate     javaScipt code ./dist
    
    4- in ts config file => noimplectAny => will make you use any type and didn't rutun error
    
    5- in ts config file => src map => using for debuging and testing
    
*/
// first function using typescript
function calculate(numOne, numTwo) {
    return numOne + numTwo;
}
// console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
// console.log(calculate(+true, +true)); // 2
