let honda = new Car("Honda", "Groen", 145); // Het ‘new’ keyword maakt een object aan van class
honda.start();
honda.gearUp();
honda.acceleratorPedalPosition = 0.5;

let audi = new Car("Audi", "Grijs", 220);

let vw = new AutomaticCar("Volkswagen", "Wit", 180);
vw.start();
vw.gearMode = "D";
vw.acceleratorPedalPosition = 1; // “pedal to the metal” 

let cars = [honda, audi, vw];
setInterval(() => {
    cars.forEach((car) => {
        car.move(0.033);
    });
}, 33);