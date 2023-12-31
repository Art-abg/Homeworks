// Write a Car constructor that initializes model and milesPerGallon from arguments.
// All instances built with Car:
// should initialize with an tank at 0
// should initialize with an odometer at 0
// Give cars the ability to get fueled with a .fill(gallons) method. Add the gallons to tank. -
// STRETCH: Give cars ability to .drive(distance). The distance driven:
// Should cause the odometer to go up.
// Should cause the the tank to go down taking milesPerGallon into account.
// STRETCH: A car which runs out of fuel while driving can't drive any more distance:
// The drive method should return a string "I ran out of fuel at x miles!" x being odometer.

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};

Car.prototype.drive = function (distance) {
  if (this.tank * this.milesPerGallon >= distance) {
    this.odometer += distance;
    this.tank -= distance / this.milesPerGallon;
  } else {
    this.odometer += distance * (this.tank / (distance / this.milesPerGallon));
    this.tank = 0;
    let kilometerOdometer = this.odometer * 1.60934;
    return `I ran out of fuel at ${this.odometer} miles or ${kilometerOdometer} kilometers!`;
  }
};

const mercedes = new Car("Mercedes C-Class", 42);
mercedes.fill(15);
console.log(mercedes.tank);
mercedes.drive(100);
console.log(mercedes.odometer);
console.log(mercedes.tank);
console.log(mercedes.drive(600));
console.log(mercedes.tank);
