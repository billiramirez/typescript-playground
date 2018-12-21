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
// destructoring arrays
console.log('destructuring arrays...');
var myHobbies = ["singing", "playing the piano"];
var h1 = myHobbies[0], h2 = myHobbies[1];
console.log(h1, h2);
// destructoring objects
console.log('destructuring objects...');
var userPersonalData = { firstName: 'billi', age: 34 };
var firstName = userPersonalData.firstName, age = userPersonalData.age;
console.log(firstName, age);
// template literals
console.log('template literals...');
var mySupername = "Billi";
var greetings = "Hello " + mySupername + "\nI wanna make a request to the endpoint\n";
console.log(greetings);
