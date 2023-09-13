//Write an Airplane object that initializes name.
//Give airplanes the ability to .takeOff() and .land():
//If a plane takes off, its isFlying property is set to true.
//If a plane lands, its isFlying property is set to false.

function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}

Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};

Airplane.prototype.land = function () {
  this.isFlying = false;
};

const plane = new Airplane("Boeing 747");

console.log(plane.name);
plane.takeOff();
console.log(plane.isFlying);
plane.land();
console.log(plane.isFlying);
