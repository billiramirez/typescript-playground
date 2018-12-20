"use strict";
// LET AND CONST
console.log('LET AND CONST');
var variable = "Test";
console.log(variable);
variable = "another value";
console.log(variable);
var maxLevel = 100;
console.log(maxLevel);
// maxLevel = 'ee'  won't work
// block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow Functions
console.log('Arrow Functions');
var multiplyNumbers = function (nu1, nu2) { return nu1 * nu2; };
console.log(multiplyNumbers(3, 2));
//default parameters
var coundown = function (start) {
    if (start === void 0) { start = 24; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log(start);
};
