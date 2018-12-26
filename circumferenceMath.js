"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.1416;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
