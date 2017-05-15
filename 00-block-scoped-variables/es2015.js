
let publicMessage = 'message';

{
    let somethingIDontWanToShare = `secret ${publicMessage}`;

    console.log('Inside the "block scope"');
    console.log(somethingIDontWanToShare);
}

console.log('Outside the block scope');
console.log(publicMessage);
console.log(somethingIDontWanToShare);