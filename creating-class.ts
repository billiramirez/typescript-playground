class Person {
    name: string;
    private type: string;
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


