// "use strict";

function Car(make, model, colour, doors) {
    this.make = make;
    this.model = model;
    this.colour = colour;
    this.doors = doors;
}

let car1 = new Car('Peugeot', 208, 'Silver', 5); // Creates a new object called car1 based on the Car object
console.log(car1.make);
console.log(car1.model);
console.log(car1.colour);
console.log(car1.doors);
console.log(car1);

let car2 = new Car('BMW', 'M5', 'Blue', 3); // Same thing, creates car2 object
console.log(car2.make);
console.log(car2.model);
console.log(car2.colour);
console.log(car2.doors);
console.log(car2);