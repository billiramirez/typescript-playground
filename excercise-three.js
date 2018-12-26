"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercise 1 - How was your TypeScript Class?
console.log('first excercise');
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = "";
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log('toooooooooot!');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var newCar = new Car("BMW");
newCar.honk();
console.log(newCar.acceleration);
newCar.accelerate(20);
console.log(newCar.acceleration);
// Exercise 2 - Two objects, based on each other ...
console.log('second excercise');
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.heigh = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calSize = function () {
        return this.heigh * this.width;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
rectangle.width = 9;
rectangle.heigh = 20;
console.log(rectangle.calSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
console.log('third excercise');
var PersonClass = /** @class */ (function () {
    function PersonClass() {
        this._firstName = "";
    }
    Object.defineProperty(PersonClass.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return PersonClass;
}());
var newPerson = new PersonClass();
console.log(newPerson.firstName);
newPerson.firstName = "billi ramirez";
console.log(newPerson.firstName);
