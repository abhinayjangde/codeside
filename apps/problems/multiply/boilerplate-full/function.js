##USER_CODE_HERE##

const input = require('fs').readFileSync('/dev/problems/multiply-sum/tests/inputs/##INPUT_FILE_INDEX##.txt', 'utf8').trim().split('\n').join(' ').split(' ');
const num1 = parseInt(input.shift());
  const num2 = parseInt(input.shift());
const result = multiply(num1, num2);
console.log(result);
    