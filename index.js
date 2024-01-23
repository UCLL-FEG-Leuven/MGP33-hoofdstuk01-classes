const aantalAutosSpan = document.getElementById("aantalAutos");
let cars = [];

setInterval(() => {
    for (let i = 0; i < 100000; i++) {
        cars.push(new Car("Honda", "Groen", 145));
        aantalAutosSpan.innerText = cars.length;
    }
}, 10);

// Alternatief maar zwaar belastend voor browser:
// while (true) {
//   cars.push(new Car("Honda", "Groen", 145));
// }