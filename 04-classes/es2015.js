class Car {
    constructor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }
}

var myCar = new Car('white');

console.log('Look at myCar color');
console.log(myCar.getColor());

class SportsCar extends Car {

    constructor(color, oilLevel) {
        super(color);
        this.oilLevel = oilLevel;
    }
    checkOil() {
        return `oil is at ${this.oilLevel}%`;
    }
}

var mySportsCar = new SportsCar('red', 100);

console.log('Look at mySportsCar color');
console.log(mySportsCar.getColor());
console.log('Check mySportsCar\' oil');
console.log(mySportsCar.checkOil());