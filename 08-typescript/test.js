var whatIsCool = function (word) { return (word + " is cool!"); };
var MyCoolClass = (function () {
    function MyCoolClass() {
        this.isCool = true;
        this.isPurple = 'maybe';
    }
    return MyCoolClass;
}());
var coolPhrase = whatIsCool('TypeScript');
console.log(coolPhrase);
