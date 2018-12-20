// string 
let myName = 'Max';
// myName = 12;

// number
let myAge = 24;
// myAge = '22';

// boolean
let hasHobbies = true;

// assing types----------------------------------------------------------------------
let myRealAge: number;
myRealAge = 34;
// myRealAge = '22';


// array---------------------------------------------------------------------------
let hobbies: any[] =  ["hola", "como"];
hobbies = [100];  //this is possible cause we defined to be any kind of array

// tuples--------------------------------------------------------------------------------
let address: [string, number] = ["superstreet", 32];
// here we are specifying the format and the types.


// enums-------------------------------------------------------

enum Color {
    green,
    red,
    blue
}

let myColor: Color = Color.green;
// console.log(myColor);

// any -------------------------------------------------------
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3};
console.log(car);

// functions--------------------------------------------------

function returnMyName(): string{
    return myName;
}
console.log(returnMyName);

// void-----------------------------------------------------
function sayHello() : void{
    console.log('hello billi');
}

// argument types--------------------------------------------
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

// console.log(multiply(2, 's'));  => wrong
console.log(multiply(2, 4));

// function types----------------------------------------
let myMultiply: (val1: number, val2: number) => number;
// this is a function type, takin the multiply format.
myMultiply = multiply;
console.log(myMultiply(2, 3));


// objects
let userData: {name: string, age: number} = {
    name: "Billi",
    age: 34
};
// // userData =  {
//     a: 'he',
//     b: 23
// }  => wrong

// complex objects

let complex : {data: number[], output:(all: boolean) => number[]} ={
    data: [100, 3.99, 10],
    output: function(all: boolean): number[]{
        return this.data;
    }
};

// alias and complex objects
type Complex =  {data: number[], output:(all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function(all: boolean): number[]{
        return this.data;
    }
};

// union types

let myRalRealAge: string | number = 27;   //this could take more type
myRalRealAge = "32";
// myRalRealAge = true;  => wrong

// check types
let finalValue = "hola";
if(typeof finalValue == "string"){console.log('number');}

// never type

function neverReturn(): never{
    throw new Error('error');
}


// nullable values

let canBenNull: number | null = 12;
canBenNull = null;
