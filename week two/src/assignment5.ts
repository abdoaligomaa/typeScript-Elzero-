type custom ="Yes"|"No"|"Error"
function isHeOld(age: number | string) : custom | number {
//   return age > 40;
if(typeof age==="string"){
    return "Error"
  }else if(age >40 )return "Yes"
  else return "No"
}

// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"