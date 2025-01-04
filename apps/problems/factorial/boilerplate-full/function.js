##USER_CODE_HERE##

const input = require('fs').readFileSync('/dev/problems/find-factorial/tests/inputs/##INPUT_FILE_INDEX##.txt', 'utf8').trim().split('\n').join(' ').split(' ');
const num = parseInt(input.shift());
const result = factorial(num);
console.log(result);
    