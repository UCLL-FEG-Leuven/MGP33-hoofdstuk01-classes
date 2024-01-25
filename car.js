const MAX_ACCELERATION_IN_METERS_SEC = 27.8;

class Car {
    static #lastId = 0;

    #id;
    #brand;
    #color;
    #maxSpeed;
    #maxSpeedInMetersPerSecond;

    #started;
    #gear;
    #acceleratorPedalPosition;
    #brakePedalPosition;

    #accelaration;
    #speed;
    #position;

    constructor(brand, color, maxSpeed) { 
      this.#id = Car.#lastId++;
      this.#brand = brand; 
      this.#color = color; 
      this.#maxSpeed = maxSpeed;
      this.#maxSpeedInMetersPerSecond = (maxSpeed * 1000) / 3600; // we gaan hier al een éénmalige omzetting doen. Het rekent handiger in meters per seconde.

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
            throw "Gelieve een waarde (kommagetal) in het interval [0,1] te kiezen.";
        this.#acceleratorPedalPosition = newValue;
    }
    get brakePedalPosition() { return this.#brakePedalPosition; }
    set brakePedalPosition(newValue) {
        if (newValue < 0 || newValue > 1) 
            throw "Gelieve een waarde (kommagetal) in het interval [0,1] te kiezen.";
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
            // De huidige versnelling (acceleration) is afhankelijk van pedaalposities. 
            // Als het rempedaal harder wordt ingedrukt dan is de versnelling negatief (= vertraging)
            let versnelling = MAX_ACCELERATION_IN_METERS_SEC * (this.#acceleratorPedalPosition - this.#brakePedalPosition);

            // Berekenen van nieuwe snelheid op basis van de versnelling of vertraging
            // Er wordt van uitgegaan dat elke gear in 20% extra snelheid zal resulteren.
            // Zo zal bij het bereiken van gear 5 100% van de maxspeed kunnen bereikt worden.
            this.#speed = Math.min(this.#maxSpeedInMetersPerSecond * (this.#gear / 5.0), this.#speed + versnelling * timeSpanInSec);

            // De nieuwe positie: vorige positie + afstand die afgelegd werd over de timespan.
            this.#position = this.#position + this.#speed * timeSpanInSec;
        } else {
            // Als de auto gestopt wordt tijdens het rijden: dan komt die onmiddellijk tot stilstand.
            this.#accelaration = 0;
            this.#speed = 0;
        }

        // Elke auto is verantwoordelijk om 'zichzelf' te tonen op het scherm (als een <li>).
        // De allereerste keer datn move() wordt aangeroepen bestaat er nog geen <li> en zal de car dus eentje aanmaken.
        let li = document.getElementById(this.#id);
        if (!li) {
            document.getElementById('cars').innerHTML += `<li id="${this.#id}"></li>`;
            li = document.getElementById(this.#id);
        } 
        li.innerHTML = `${this.#brand} with ID ${this.#id} is on position ${this.#position} (speed: ${(this.#speed * 3600) / 1000})`;
    }
  }