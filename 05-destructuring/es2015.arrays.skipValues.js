var myArray = [1, 2, 3, 4, 5, 6];

var [possition0, possition1, , possition3, ...rest] = myArray;

console.log('value possition0');
console.log(possition0);

console.log('value possition1');
console.log(possition1);

console.log('value possition3');
console.log(possition3);

console.log('All the rest');
console.log(rest);