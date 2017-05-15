function Car(color) {
    this.color = color;
}
Car.prototype.getColor = function () {
    return this.color;
}

var myCar = new Car('white');

console.log('Look at myCar color');
console.log(myCar.getColor());

function Jalopy(color, oilLevel) {
    Car.call(this, color);
    this.oilLevel = oilLevel;
}

Jalopy.prototype = Object.create(Car.prototype);

Jalopy.prototype.constructor = Jalopy;

Jalopy.prototype.checkOil = function () {
    this.oilLevel = (Math.random() * this.oilLevel) + 1;
    return 'oil is at ' + this.oilLevel.toFixed(2) + '%';
}

var myJalopy = new Jalopy('rust', 100);


console.log('Look at myJalopy color');
console.log(myJalopy.getColor());

console.log('Check myJalopy\' oil');
console.log(myJalopy.checkOil());