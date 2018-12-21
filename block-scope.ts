// LET AND CONST
console.log('LET AND CONST');

let variable = "Test";
console.log(variable);
variable = "another value";
console.log(variable);

const maxLevel = 100;
console.log(maxLevel);
// maxLevel = 'ee'  won't work

// block scope
function reset(){
    let variable = null;
    console.log(variable);
}

reset();
console.log(variable);


// Arrow Functions
console.log('Arrow Functions');

const multiplyNumbers = (nu1: number, nu2:number) =>  nu1 * nu2;
console.log(multiplyNumbers(3,2));

//default parameters

const coundown = (start: number = 24) : void =>{
    console.log(start);
    while(start > 0){
        start--;
    }
    console.log(start);
}

// the rest and spread operator
console.log('Rest and spread');
console.log('spread...');
const numbers = [23,434 ,34, -2];
console.log(Math.max(23, 45, 53, 5));
console.log(Math.max(...numbers));

console.log('rest...');
function makeArray(...args: number[]){
    return args;
}
console.log(makeArray(1, 4, 5));

