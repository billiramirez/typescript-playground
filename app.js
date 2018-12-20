"use strict";
// string 
var myName = 'Max';
// myName = 12;
// number
var myAge = 24;
// myAge = '22';
// boolean
var hasHobbies = true;
// assing types
var myRealAge;
myRealAge = 34;
// myRealAge = '22';
// array
var hobbies = ["hola", "como"];
hobbies = [100]; //this is possible cause we defined to be any kind of array
// tuples
var address = ["superstreet", 32];
// here we are specifying the format and the types.
// enums
var Color;
(function (Color) {
    Color[Color["green"] = 0] = "green";
    Color[Color["red"] = 1] = "red";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var myColor = Color.green;
// console.log(myColor);
// any 
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName);
// void
function sayHello() {
    console.log('hello billi');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 4));
