var whatIsCool = word => `${word} is cool!`;

class MyCoolClass {
    isCool;
    isPurple;
    constructor() {
        this.isCool = true;
        this.isPurple = 'maybe';
    }

}

var coolPhrase = whatIsCool('TypeScript');

console.log(coolPhrase);