// Exercise 1 - How was your TypeScript Class?
console.log('first excercise');
class Car {
     name: string = "";
     acceleration: number = 0;

    constructor(name: string){
        this.name = name;
    }

    honk(){
        console.log('toooooooooot!');
    }

    accelerate(speed: number){
        this.acceleration =  this.acceleration + speed;
    }
}

let newCar = new Car("BMW");
newCar.honk();
console.log(newCar.acceleration);
newCar.accelerate(20);
console.log(newCar.acceleration);
 
// Exercise 2 - Two objects, based on each other ...
console.log('second excercise');

class BaseObject{
    width = 0;
    heigh = 0;
}

class Rectangle extends BaseObject{
    calSize(){
        return this.heigh * this.width;
    }
}

const rectangle = new Rectangle();
rectangle.width = 9;
rectangle.heigh = 20;
console.log(rectangle.calSize());
 
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
console.log('third excercise');

class PersonClass {
    private _firstName: string = "";

    get firstName(){
        return this._firstName;
    }

    set firstName(value: string){
        if(value.length > 3){
            this._firstName = value;
        }else{
            this._firstName = "";
        }
    }
}

const newPerson = new PersonClass();
console.log(newPerson.firstName);
newPerson.firstName = "billi ramirez";
console.log(newPerson.firstName);
