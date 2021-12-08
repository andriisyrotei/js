// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car (model, producer, year, maxSpeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`We drive ${this.maxSpeed} kmH`);
//     };
//     this.info = function () {
//         console.log(`Model: ${this.model}, Producer: ${this.producer}, Issue year: ${this.year}, Max Speed: ${this.maxSpeed}, Engine: ${this.engine}`);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//     this.changeYear = function (newYear) {
//         this.year = newYear;
//     };
//     this.newDriver = function (driver) {
//         this.driver = driver;
//     }
//
// }
//
// let cars = new Car('Ferrari Modena', 'Ferrari Motors', 1995, 320, 6.2)
// console.log(cars);
// cars.drive();
// cars.info();
// cars.increaseMaxSpeed(40)
// cars.drive();
// cars.changeYear(2002);
// cars.info();
// cars.newDriver('Michael Scumacher')
// console.log(cars);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    drive () {
        console.log(`We drive ${this.maxSpeed} kmH`)
    }
    info() {
        document.write(`Model: ${this.model}, Producer: ${this.producer}, Year: ${this.year}, Max Speed: ${this.maxSpeed}, Engine: ${this.engine}`)
    }
    increaseMAxSpeed (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear(newYear) {
        this.year = newYear;
    }
    newDriver (driver) {
        this.driver = driver;
    }
}


let cars = new Car('Aston Martin', 'Aston Martins Motors', 1958, 300, 5.8)
cars.drive();
cars.info();
cars.increaseMAxSpeed(30);
cars.drive();
cars.changeYear(1966);
cars.info();
cars.newDriver('Fernando Alonso');
console.log(cars);