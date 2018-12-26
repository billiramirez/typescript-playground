// classes
console.log('classes');

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
console.log('inheritance');

class Max extends Person {
    // name = "Billi";
    constructor(username: string){
        super("Alex", username);
        this.age = 34;
    }
}

const max = new Max("anaaa");
console.log(max);


// getters and setters => GET && SET
console.log('getters and setters');

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
console.log(plant.species); //=> this is how we GET the value in the class
plant.species = "Green Plant"; //=> this is how we SET the value in the class
console.log(plant.species);


// plant.species("sssss");
// console.log(plant.species);


// Statics properties and methods
// without instance it the class we can use a value or methods from a class, writing static before the declaration 
console.log('Statics properties and methods');

class Helpers{
    static PI: number = 3.14;

    static calcCircumference(diameter:number): number{
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(3));

// Abstract classes
console.log('Abstract classes');

abstract class Project{
    projectName: string = "default";
    budget: number = 13;

    abstract changeName(name: string): void;

    calcBudget(){
        return this.budget * 2;
    }

}

class ItProject extends Project{
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ItProject();
console.log(newProject);
newProject.changeName("super it project");
console.log(newProject);
