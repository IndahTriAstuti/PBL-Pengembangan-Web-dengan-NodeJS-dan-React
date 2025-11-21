class Car {
    constructor(brand) {
        this.brand = brand;
    }
    info() {
        console.log(`This is a car of brand: ${this.brand}.`);
    }
}

module.exports = Car;
