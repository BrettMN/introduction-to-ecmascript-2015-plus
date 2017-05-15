function MyThing() {
    var self = this;
    self.counter = 0;

    setInterval(function () {
        self.counter++;
        console.log('This thing\'s counter has increased to ' + self.counter);
    }, 1000)
}

var myThing = new MyThing();
