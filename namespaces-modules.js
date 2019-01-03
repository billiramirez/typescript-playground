"use strict";
// tsc --outfile namespaces-modules.js circumferenceMath.ts rectangleMath.ts namespaces-modules.ts
// this command is used to compile differents inputs files and split it into a newFile, avoiding the multiple 
// script tag in the html file
Object.defineProperty(exports, "__esModule", { value: true });
// typescript has its own way to import namespaces.
/// <reference path="circumferenceMath.ts"/>
/// <reference path="rectangleMath.ts"/>
// tsc namespaces-modules.ts --outfile namespaces-modules.js
// this command is when using the references way
console.log('NAMESPACES...');
var CircleMath = MyMath.Circle;
console.log(MyMath.calculateRectangle(23, 423));
console.log(CircleMath.calculateCircumference(33));
// MODULES
console.log('MODULES...');
var circle_1 = require("./Math/circle");
console.log('PI from Math/Circle', circle_1.PI);
console.log('calCircumference', circle_1.calCircumference);
