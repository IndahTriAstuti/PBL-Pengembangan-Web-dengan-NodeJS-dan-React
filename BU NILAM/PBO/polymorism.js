//override
class Vehicle {
    sound() {
        console.log("This vehicle makes a sound");
    }
}

//child 1
class Car extends Vehicle {
    sound() {
        console.log("The car goes vroom vroom");
    }
}

//child 2
class Motorcycle extends Vehicle {
    sound() {
        console.log("The motorcycle goes brap brap");
    }       
}

//instantiate
let myVehicle = new Vehicle();
myVehicle.sound(); // This vehicle makes a sound

let myCar = new Car();
myCar.sound(); // The car goes vroom vroom

let myMotorcycle = new Motorcycle();
myMotorcycle.sound(); // The motorcycle goes brap brap

