
// tsc --outfile namespaces-modules.js circumferenceMath.ts rectangleMath.ts namespaces-modules.ts
// this command is used to compile differents inputs files and split it into a newFile, avoiding the multiple 
// script tag in the html file

// typescript has its own way to import namespaces.

/// <reference path="circumferenceMath.ts"/>
/// <reference path="rectangleMath.ts"/>
// tsc namespaces-modules.ts --outfile namespaces-modules.js
// this command is when using the references way

import CircleMath =  MyMath.Circle;

console.log(MyMath.calculateRectangle(23,423));
console.log(CircleMath.calculateCircumference(33));