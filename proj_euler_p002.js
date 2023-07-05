const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter the desired number to generate Fibonacci numbers up to: ', (input) => {
  console.log('+', input);
  var max_number = parseInt(input);
  var sum = 0;
  var a = 0;
  var b = 1;

  for (; b <= max_number;) {
    b += a
    a = b - a
    console.log('a:', a, '| b:', b)
    if (b % 2 === 0) {
      console.log('b is even');
      sum += b
    }
  }
  console.log(sum)
  rl.close();
});
