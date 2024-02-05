let honda = new Car("Honda", "Groen", 145); // Het ‘new’ keyword maakt een object aan van class
honda.start();
honda.gearUp();
honda.acceleratorPedalPosition = 0.5;

let audi = new Car("Audi", "Grijs", 220);

let vw = new AutomaticCar("Volkswagen", "Wit", 180);
vw.start();
vw.gearMode = "D";
vw.acceleratorPedalPosition = 1;

let cars = [honda, audi, vw];
let carsList = document.getElementById("cars");
setInterval(() => {
    cars.forEach((car) => {
        // Eerst berekenen wat de nieuwe positie is op basis van de versnelling.
        car.move(0.033); // 0.033 seconden = 33 msec (+/- 30 keer per seconde)

        // Dan de nieuwe positie ook effectief tonen
        car.renderOnPage(carsList);
    });
}, 33);