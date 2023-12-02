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

const translateNumbers = (array) => {
  const returnedStrings = [];
  for (let item of array) {
    item = item.replace(/one/g, 'o1e');
    item = item.replace(/two/g, 't2o');
    item = item.replace(/three/g, 'th3ee');
    item = item.replace(/four/g, 'fo4r');
    item = item.replace(/five/g, 'f5ve');
    item = item.replace(/six/g, 's6x');
    item = item.replace(/seven/g, 'se7en');
    item = item.replace(/eight/g, 'ei8ht');
    item = item.replace(/nine/g, 'ni9e');
    returnedStrings.push(item);
  }
  return returnedStrings;
};
console.log(extractNumbers(translateNumbers(trimmedInput)));
//55343
