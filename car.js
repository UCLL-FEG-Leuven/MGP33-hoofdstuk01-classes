class Car { // de naam begint met een hoofdletter (= conventie)
    static #lastId = 0;

    #id;  // De hashtag (#) geeft aan dat dit ‘private’ attributen zijn
    #brand;
    #color;
    #fuelType;
    #gear;
    #speed;

    constructor(brand, color, fuelType) { // slechts één constructor mogelijk. Bemerk het gebruik van this.
      this.#id = Car.#lastId++;

      this.#brand = brand; 
      this.#color = color; 
      this.#fuelType = fuelType; 
      this.#gear = 0; 
      this.#speed = 0;
    }

    get id() { return this.#id; }
    get brand() { return this.#brand; }
    get gear() { return this.#gear; } 

    start() { // method van een Car object. De naam begint met een kleine letter (= conventie)
        console.log(`${this.#brand} with ID ${this.id} started.`);
    }  

    stop() {
        console.log(`${this.#brand} with ID ${this.id} stopped.`);
    } 

    move(pedalPosition) { // ter info: pedalPosition is een percentage (dus number tussen 0 en 100).
        console.log(`Speed pedal position of ${this.#brand} with ID ${this.id} is ${pedalPosition}%.`);
    } 

    brake(pedalPosition) {
        console.log(`Brake pedal position of ${this.#brand} with ID ${this.id} is ${pedalPosition}%.`);
    }

    gearUp() {        
        this.#gear++;
        console.log(`Gear up. Gear position of ${this.#brand} with ID ${this.id} is now ${this.gear}.`);
    }

    gearDown() {
        this.#gear--;
        console.log(`Gear down. Gear position of ${this.#brand} with ID ${this.id} is ${this.gear}.`);
    }    
  }