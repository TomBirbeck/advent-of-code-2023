import { readFileSync } from 'node:fs';

const input = readFileSync('day1.txt', { encoding: 'utf-8' });

const trimmedInput = input.replace(/\r/g, '').trim().split('\n');

const extractNumbers = (input) => {
  let total = 0;
  for (let line of input) {
    const seperatedChars = line.split('');
    const lineNumbers = [];
    for (let char of seperatedChars) {
      if (!isNaN(+char)) {
        lineNumbers.push(+char);
      }
    }
    total =
      total +
      parseInt(`${lineNumbers[0]}` + `${lineNumbers[lineNumbers.length - 1]}`);
  }
  return total;
};

// extractNumbers(trimmedInput);
// console.log(extractNumbers(trimmedInput));
//54239

const tests = [
  'two1nine',
  'eightwothree',
  'abcone2threexyz',
  'xtwone3four',
  '4nineeightseven2',
  'zoneight234',
  '7pqrstsixteen',
];

const translateNumbers = (array) => {
  const returnedStrings = [];
  for (let item of array) {
    const originalString = item;
    item.replace(/one/g, '1');
    item.replace(/two/g, '2');
    item.replace(/three/g, '3');
    item.replace(/four/g, '4');
    item.replace(/five/g, '5');
    item.replace(/six/g, '6');
    item.replace(/seven/g, '7');
    item.replace(/eight/g, '8');
    item.replace(/nine/g, '9');
    returnedStrings.push([item]);
  }
  return returnedStrings;
};
const replaced = tests[0].replace(/two/g, '2');
console.log(translateNumbers(tests));
// translateNumbers(tests);
