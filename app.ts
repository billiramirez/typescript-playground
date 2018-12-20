// string 
let myName = 'Max';
// myName = 12;

// number
let myAge = 24;
// myAge = '22';

// boolean
let hasHobbies = true;

// assing types
let myRealAge: number;
myRealAge = 34;
// myRealAge = '22';


// array
let hobbies: any[] =  ["hola", "como"];
hobbies = [100];  //this is possible cause we defined to be any kind of array

// tuples
let address: [string, number] = ["superstreet", 32];
// here we are specifying the format and the types.


// enums

enum Color {
    green,
    red,
    blue
}

let myColor: Color = Color.green;
// console.log(myColor);

// any 
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3};
console.log(car);

// functions

function returnMyName(): string{
    return myName;
}
console.log(returnMyName);

// void
function sayHello() : void{
    console.log('hello billi');
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

console.log(multiply(2, 4));


