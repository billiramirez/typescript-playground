// Simple generic

function echo(data: any){
    return data;
}

console.log(echo("billi"));
console.log(echo(24));
console.log(echo({name: "billi", age: 24}));


// Better generics

function betterEcho<T>(data: T){
    return data;
}

console.log(betterEcho("billi").length);
console.log(betterEcho<number>(24));
console.log(betterEcho({name: "billi", age: 24}));


// Built-in Generics

const testResult: Array<number> = [1.94, 2.33];

testResult.push(-2.33);
// testResult.push("sss"); this will throw an error

