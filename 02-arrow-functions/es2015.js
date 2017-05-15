function MyNewThing() {
    this.counter = 0;

    setInterval(() => {
        console.log(this);
        this.counter++;
        console.log('This new thing\'s counter has increased to ' + this.counter);
    }, 1000)
}

var myNewThing = new MyNewThing();
