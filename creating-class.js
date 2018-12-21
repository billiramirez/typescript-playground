"use strict";
var Person = /** @class */ (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.age = 15;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("billi", "salmonelopan");
console.log(person.name, person.userName);
person.printAge();
person.setType("admin");
