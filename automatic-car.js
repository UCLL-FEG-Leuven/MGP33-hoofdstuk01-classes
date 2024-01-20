class AutomaticCar extends Car { // overerven gebeurt via het ‘extends’ keyword
    #gearMode; // ter info: mogelijke waarden zijn Park, Reverse, Neutral, Drive, ...
    constructor(brand, color, fuelType) {
      super(brand, color, fuelType); // verplicht: super roept de constructor van parent class Car aan.
      this.#gearMode = "Park";
    }
    get gearMode() { // Properties beginnen ook met een kleine letter (= conventie)
        return this.#gearMode; 
    } 
    set gearMode(newGearMode) { // Een ‘property setter’ voor schrijftoegang.
        this.#gearMode = newGearMode; 
        console.log(`Gear mode of automatic ${this.brand} with ID ${this.id} has been set to ${this.#gearMode}.`);
    } 
    move(pedalPosition) {     
        // Berekenen van de gear ...
        console.log(`Calculating recommended gear position of automatic ${this.brand} with ID ${this.id}...`);
        super.move(pedalPosition);
    } 
  } 