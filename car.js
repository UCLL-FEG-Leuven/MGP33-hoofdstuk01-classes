const MAX_ACCELERATION_IN_METERS_SEC = 27.8;

class Car { // een class naam begint steeds met een hoofdletter (= conventie)
    static #lastId = 0; // static geeft aan dat dit een class field is  en dus geen object field

    #id;  // De hashtag (#) geeft aan dat dit private object fields zijn
    #brand;
    #color;
    #maxSpeed;

    #started;
    #gear;
    #acceleratorPedalPosition;
    #brakePedalPosition;

    #accelaration;
    #speed;
    #position;

    // slechts één constructor mogelijk. Bemerk het gebruik van this.
    constructor(brand, color, maxSpeed) { 
      this.#id = Car.#lastId++;
      this.#brand = brand; 
      this.#color = color; 
      this.#maxSpeed = maxSpeed; 

      this.#started = false; 
      this.#gear = 0; 
      this.#acceleratorPedalPosition = 0; // ter info: position is een waarde tussen 0 en 1
      this.#brakePedalPosition = 0; // ter info: position is een waarde tussen 0 en 1

      this.#accelaration = 0;
      this.#speed = 0;
      this.#position = 0;
    }

    // Properties beginnen ook met een kleine letter (= conventie)
    get id() { return this.#id; }
    get brand() { return this.#brand; }
    get started() { return this.#started; } 
    get gear() { return this.#gear; } 
    get acceleratorPedalPosition() { return this.#acceleratorPedalPosition; }
    set acceleratorPedalPosition(newValue) {
        if (newValue < 0 || newValue > 1) 
            throw "Gelieve een waarde (kommagetal) in het interval [0,1] te kiezen (1 = volledig ingedrukt)";
        this.#acceleratorPedalPosition = newValue;
    }
    get brakePedalPosition() { return this.#brakePedalPosition; }
    set brakePedalPosition(newValue) {
        if (newValue < 0 || newValue > 1) 
            throw "Gelieve een waarde (kommagetal) in het interval [0,1] te kiezen (1 = volledig ingedrukt)";
        this.#brakePedalPosition = newValue;
    }

    // method van een Car object. De naam begint met een kleine letter (= conventie)
    start() { 
        this.#started = true;
        console.log(`${this.#brand} with ID ${this.id} started.`);
    }  

    stop() {
        this.#started = stop;
        console.log(`${this.#brand} with ID ${this.id} stopped.`);
    } 

    move(pedalPosition) { 
        console.log(`Speed pedal position of ${this.#brand} with ID ${this.id} is ${pedalPosition}%.`);
    } 

    gearUp() {        
        this.#gear++;
        console.log(`Gear up. Gear position of ${this.#brand} with ID ${this.id} is now ${this.gear}.`);
    }

    gearDown() {
        this.#gear--;
        console.log(`Gear down. Gear position of ${this.#brand} with ID ${this.id} is ${this.gear}.`);
    }

    move(timeSpanInSec) {
        if (this.#started) {
            // Versnelling (acceleration) is afhankelijk van pedaalposities. Als rempedaal harder wordt ingedrukt dan is de versnelling negatief (= vertraging)
            let versnelling = MAX_ACCELERATION_IN_METERS_SEC * (this.#acceleratorPedalPosition - this.#brakePedalPosition);

            // Berekenen van nieuwe snelheid op basis van de versnelling of vertraging
            this.#speed = Math.min(this.#maxSpeed * (this.#gear * 5.0), this.#speed + versnelling * timeSpanInSec);

            this.#position = this.#position * this.#speed * timeSpanInSec;
        } else {
            // Als de auto gestopt wordt tijdens het rijden: direct gestopt.
            this.#accelaration = 0;
            this.#speed = 0;
        }

        let li = document.getElementById(this.#id);
        if (!li) {
            document.getElementById('cars').innerHTML += `<li id="${this.#id}"></li>`;
            li = document.getElementById(this.#id);
        } 
        li.innerHTML = `${this.#brand} with ID ${this.#id} is on position ${this.#position}`;
    }
  }