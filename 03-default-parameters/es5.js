function multiply(a, b) {

  if (typeof b === 'undefined') {
    b = 1;
  }

  return a * b;
}

var answer = multiply(5, 9);

console.log('5 * 9');
console.log(answer);

var answer2 = multiply(7, undefined);

console.log('7 * undefined');
console.log(answer2);

var answer3 = multiply(3);

console.log('3 so lonely');
console.log(answer3);