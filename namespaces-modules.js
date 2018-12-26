var MyMath;
(function (MyMath) {
    var PI = 3.1416;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
// tsc --outfile namespaces-modules.js circumferenceMath.ts rectangleMath.ts namespaces-modules.ts
// this command is used to compile differents inputs files and split it into a newFile, avoiding the multiple 
// script tag in the html file
// typescript has its own way to import namespaces.
/// <reference path="circumferenceMath.ts"/>
/// <reference path="rectangleMath.ts"/>
console.log(MyMath.calculateCircumference(33));
console.log(MyMath.calculateRectangle(23, 423));
