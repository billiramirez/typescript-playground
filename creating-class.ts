class Person {
    name: string;
    private type: string = "";
    protected age: number = 15;
    
    constructor(name: string, public userName: string){
        this.name = name;
    }

    printAge(){
        console.log(this.age);
        this.setType("admin")

    }
    
    private setType(type:string){
        this.type = type;
        console.log(this.type);

    }
}

const person = new Person("billi", "salmonelopan");
console.log(person.name, person.userName);
person.printAge();
// person.setType("admin"); won't work cause is private


// inheritance

class Max extends Person {
    // name = "Billi";
    constructor(username: string){
        super("Alex", username);
        this.age = 34;
    }
}

const max = new Max("anaaa");
console.log(max);


// getters and setters

class Plant {
    private _species: string = "default";

    get species(){
        return this._species;
    }

    set species(value: string){
        if(value.length > 3 ){
            this._species =  value;
        }else{
            this._species =  "default";
        }
    }
}


let plant = new Plant();
console.log(plant.species);

// plant.species("AB");
// console.log(plant.species);


// plant.species("sssss");
// console.log(plant.species);


// Statics properties and methods

class Helpers{
    static PI: number = 3.14;

    static calcCircunference(diameter:number): number{
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircunference(3));
