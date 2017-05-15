var test2 = (function () {
    function test2() {
        this.hello = 'hello';
    }
    test2.prototype.say = function () {
        return this.hello;
    };
    return test2;
}());
