##USER_CODE_HERE##

const input = require('fs').readFileSync('/dev/problems/largest-element/tests/inputs/##INPUT_FILE_INDEX##.txt', 'utf8').trim().split('\n').join(' ').split(' ');
const size_nums = parseInt(input.shift());
const nums = input.splice(0, size_nums).map(Number);
const result = largestElement(nums);
console.log(result);
    