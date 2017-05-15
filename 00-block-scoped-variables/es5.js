
var publicMessage = 'message';

(function (input) {

    var somethingIDontWanToShare = 'secret ' + input;

    console.log('Inside the "block scope"');
    console.log(somethingIDontWanToShare);
})(publicMessage);

console.log('Outside the "block scope"');
console.log(publicMessage);
console.log(somethingIDontWanToShare);