import { readFileSync } from 'node:fs';

const input = readFileSync('day2.txt', { encoding: 'utf-8' });

const trimmedInput = input.replace(/\r/g, '').trim().split('\n');

// console.log(trimmedInput)

const invalidGame = (r,g,b,game) => {
    let invalid = false;
    const red = new RegExp(/red/g)
    const green = new RegExp(/green/g)
    const blue = new RegExp(/blue/g)
    const splitGame = game[0].split(';')
    for (let k = 0; k < splitGame.length; k++){
        const split = game[k].split(',')
        for (let i = 0; i < split.length; i++){
            if (split[i].match(red)){
                const string = split[i].split(' ')
                for (let j = 0; j < string.length; j++){
                    if (!isNaN(+string[j])){
                        if (r >= +string[j]){
                            invalid = false
                        } else {
                            return true
                        }
                    }
                }
            }
            if (split[i].match(green)){
                const string = split[i].split(' ')
                for (let j = 0; j < string.length; j++){
                    if (!isNaN(+string[j])){
                        if (g >= +string[j]){
                            invalid = false
                        } else {
                            return true
                        }
                    }
                }
            }
            if (split[i].match(blue)){
                const string = split[i].split(' ') 
                for (let j = 0; j < string.length; j++){
                    if (!isNaN(+string[j])){
                        if (b >= +string[j]){
                            invalid = false
                        } else {
                            return true
                        }
                    }
                }
            }
        }
        return invalid
    }
}

const checkGames = (gamesArray) => {
    const validGames = []
 for (let i = 0; i < gamesArray.length; i++){
    const splitArray = gamesArray[i].split(':')
    const name = splitArray.slice(0,1)
    const cubes = splitArray.slice(1)
    if (!invalidGame(12,13,14,cubes)){
        for (let char of name[0].split(' ')) {
            if (!isNaN(+char)) {
                validGames.push(+char)
            }
        }
    }
 }
 return validGames.reduce((a, b) => a + b, 0)
}
checkGames(trimmedInput)
// console.log(checkGames(trimmedInput))
//2076

//check for highest value of r/b/g for each game
//multiply those values together
//add values of all the games together

const calculateMinGameMultiples = (game) => {
const highestRGB = {red: 0, green: 0, blue:0}
const red = new RegExp(/red/)
    const green = new RegExp(/green/)
    const blue = new RegExp(/blue/)
const splitGame = game.split(';')
for (let i = 0; i < splitGame.length; i++){
    const split = splitGame[i].split(',')
     for (let k = 0; k < split.length; k++){
        if (split[k].match(red)){
            const string = split[k].split(' ')
            for (let j = 0; j < string.length; j++){
                if (!isNaN(+string[j])){
                    if (+string[j] > highestRGB.red){
                        highestRGB.red = +string[j]
                    } 
                }
            }
        }
        if (split[k].match(green)){
            const string = split[k].split(' ')
            for (let j = 0; j < string.length; j++){
                if (!isNaN(+string[j])){
                    if (+string[j] > highestRGB.green){
                        highestRGB.green = +string[j]
                    } 
                }
            }
        }
        if (split[k].match(blue)){
            const string = split[k].split(' ')
            for (let j = 0; j < string.length; j++){
                if (!isNaN(+string[j])){
                    if (+string[j] > highestRGB.blue){
                        highestRGB.blue = +string[j]
                    } 
                }
            }
        }
     }
}
return highestRGB.red * highestRGB.green * highestRGB.blue
}

const checkGamesTwo = (gamesArray) => {
    const multiples = []
    for(let i = 0; i <gamesArray.length; i++){
        const splitArray = gamesArray[i].split(':')
        const cubes = splitArray.slice(1)
        const rbgMultiplied = calculateMinGameMultiples(cubes[0])
        multiples.push(rbgMultiplied)
    }
    return multiples.reduce((a, b) => a + b, 0)
}

console.log(checkGamesTwo(trimmedInput))
//70950