let honda = new Car("Honda", "Groen", 145); // Het ‘new’ keyword maakt een object aan van class
honda.start();
honda.gearUp();
honda.acceleratorPedalPosition = 0.5;
honda.move();
honda.gearUp();
honda.move();

let audi = new Car("Audi", "Grijs", 220);
audi.move();

let vw = new AutomaticCar("Volkswagen", "Wit", 180);
vw.start();
vw.gearMode = "D";
vw.acceleratorPedalPosition = 0.2;
vw.move();
vw.acceleratorPedalPosition = 0.5;
vw.move();
vw.acceleratorPedalPosition = 1; // “pedal to the metal” 
vw.move();