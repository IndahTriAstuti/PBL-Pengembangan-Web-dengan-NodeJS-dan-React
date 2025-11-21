// encapsulation pake_underscore atau #
class Car{
    constructor(brand){
        this._carName = brand;
    }
}

// instantiate
var mobil1 = new Car("Toyota");
console.log(mobil1._carName);