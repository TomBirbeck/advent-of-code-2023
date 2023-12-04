import { readFileSync } from 'node:fs';

const input = readFileSync('day4.txt', { encoding: 'utf-8' });

const trimmedInput = input.replace(/\r/g, '').trim().split('\n');

const calculateTotalTicketScore = (ticketArray) => {
  let winningsTotal = 0;

  for (let ticket of ticketArray) {
    const seperateWinnersAndNumbers = ticket.split('|');
    const splitWinners = seperateWinnersAndNumbers[0].split(':');
    const winnersSplit = splitWinners[1]
      .split(' ')
      .filter((item) => item !== '');
    const numberSplit = seperateWinnersAndNumbers[1]
      .split(' ')
      .filter((item) => item !== '');
    const ticketTotal = calculateWinnings(winnersSplit, numberSplit);
    winningsTotal += ticketTotal;
  }
  return winningsTotal;
};

const calculateWinnings = (winners, numberSet) => {
  let total = 0;
  for (let i = 0; i < numberSet.length; i++) {
    if (winners.includes(numberSet[i])) {
      if (total === 0) {
        total = 1;
      } else {
        total = total * 2;
      }
    }
  }
  return total;
};

console.log(calculateTotalTicketScore(trimmedInput));
//20829
