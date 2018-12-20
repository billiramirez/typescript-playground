"use strict";
// string 
var myName = 'Max';
// myName = 12;
// number
var myAge = 24;
// myAge = '22';
// boolean
var hasHobbies = true;
// assing types----------------------------------------------------------------------
var myRealAge;
myRealAge = 34;
// myRealAge = '22';
// array---------------------------------------------------------------------------
var hobbies = ["hola", "como"];
hobbies = [100]; //this is possible cause we defined to be any kind of array
// tuples--------------------------------------------------------------------------------
var address = ["superstreet", 32];
// here we are specifying the format and the types.
// enums-------------------------------------------------------
var Color;
(function (Color) {
    Color[Color["green"] = 0] = "green";
    Color[Color["red"] = 1] = "red";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var myColor = Color.green;
// console.log(myColor);
// any -------------------------------------------------------
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions--------------------------------------------------
function returnMyName() {
    return myName;
}
console.log(returnMyName);
// void-----------------------------------------------------
function sayHello() {
    console.log('hello billi');
}
// argument types--------------------------------------------
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 's'));  => wrong
console.log(multiply(2, 4));
// function types----------------------------------------
var myMultiply;
// this is a function type, takin the multiply format.
myMultiply = multiply;
console.log(myMultiply(2, 3));
// objects
var userData = {
    name: "Billi",
    age: 34
};
// // userData =  {
//     a: 'he',
//     b: 23
// }  => wrong
// complex objects
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRalRealAge = 27; //this could take more type
myRalRealAge = "32";
// myRalRealAge = true;  => wrong
// check types
var finalValue = "hola";
if (typeof finalValue == "string") {
    console.log('number');
}
// never type
function neverReturn() {
    throw new Error('error');
}
// nullable values
var canBenNull = 12;
canBenNull = null;
