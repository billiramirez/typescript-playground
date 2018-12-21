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
// the rest and spread operator
console.log('Rest and spread');
console.log('spread...');
var numbers = [23, 434, 34, -2];
console.log(Math.max(23, 45, 53, 5));
console.log(Math.max.apply(Math, numbers));
console.log('rest...');
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 4, 5));
