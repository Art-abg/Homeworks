//Ex.16
// Given an array of cars with properties like make, model, and year, print out the car's details in a
// readable format for given care make.

const cars = [
    {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    },
    {
    make: "Honda",
    model: "Civic",
    year: 2023,
    },
    {
    make: "Ford",
    model: "Mustang",
    year: 2021,
    },
    {
    make: "Toyota",
    model: "Camry",
    year: 2023,
    },
    {
    make: "Chevrolet",
    model: "Silverado",
    year: 2022,
    },
    {
    make: "Toyota",
    model: "Rav4",
    year: 2023,
    },
   ];

   function carDetail(maker) {
    for (let car of cars) {
        if (car.make === maker) 
    {
        console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`);
    }
   }
   }

   carDetail('Toyota');