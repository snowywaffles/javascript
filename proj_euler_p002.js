const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter the desired number to generate Fibonacci numbers up to: ', (input) => {
  console.log('+', input);
  var sum = parseInt(input);
  var a = 1;
  var b = 2;
  var storage = 0;

  if (b % 2 === 0) {
    console.log('b is even');
  }
  console.log(sum, a, b, storage)

  rl.close();
});
