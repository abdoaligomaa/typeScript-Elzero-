"use strict";
function yesOrNo(val) {
    if (typeof val === "string") {
        return "Error";
    }
    else if (val > 10)
        return "True";
    else
        return "False";
}
// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
