class AutomaticCar extends Car { // overerven gebeurt via het ‘extends’ keyword
    #gearMode; // ter info: mogelijke waarden zijn Park, Reverse, Neutral, Drive, ...
    constructor(brand, color, maxSpeed) {
      super(brand, color, maxSpeed); // verplicht: super roept de constructor van parent class Car aan.
      this.#gearMode = "P";
    }
    get gearMode() { // Properties beginnen ook met een kleine letter (= conventie)
        return this.#gearMode; 
    } 
    set gearMode(newValue) { // Een ‘property setter’ voor schrijftoegang.
        if (newValue !== "P"  && newValue !== "N"  && newValue !== "R"  && newValue !== "D")
            throw "Je moet kiezen voor P, N, R of D. ";

        this.#gearMode = newValue; 
        console.log(`Gear mode of automatic ${this.brand} with ID ${this.id} has been set to ${this.#gearMode}.`);
    } 
    move() {
        // Berekenen van de nieuwe gear position ...
        console.log(`Calculating recommended gear position of automatic ${this.brand} with ID ${this.id}...`);
        if (this.gear < 5) {
            this.gearUp();
        }        
        super.move(timeSpanInSec); // vergeet timeSpanInSec niet door te geven!
    } 
  } 