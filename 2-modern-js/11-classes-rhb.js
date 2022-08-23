

class Car {

    constructor(name){
        this.name = name;
    }

    toString(){
        return this.name;
    }

    greet(){
        console.log(`Hello ${this.name}`);
    }
}

class CompactCar extends Car{

    constructor(name,color){
        super(name),
        this.color = color;
    }

    greet(){
        console.log(`Hello ${this.name} with ${this.color} color!`);
    }
}

const my_car = new Car('min bil');
console.log(my_car.toString());



const my_compact_car = new CompactCar('my small car', 'red');
console.log(my_compact_car.toString());

my_car.greet();
my_compact_car.greet();

const special_car = new Car('special one');
special_car.greet();

special_car.greet = () => console.log('I am special!')

special_car.greet();