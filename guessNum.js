const input = require('prompt-sync')();

function main() {
    const randomNum = Math.floor(Math.random() * 101);
    while (true) {
        const userInput = input('Pick a number 0 - 100 (or type "exit" to quit): ');
        
        if (userInput.toLowerCase() === 'exit') {
            console.log('Goodbye!');
            break;
        }

        const user = parseInt(userInput);
        if (isNaN(user) || user < 0 || user > 100) {
            console.log('Please enter a valid number between 0 and 100.');
            continue;
        }

        const gameFlow = logic(user, randomNum);
        console.log(gameFlow);

        if (gameFlow.includes('You win')) {
            break;
        }
    }
}
function logic(guessNum, compNum) {
    if (guessNum > compNum) {
        return `Number is less than ${guessNum}`;
    } else if (guessNum < compNum) {
        return `Number is greater than ${guessNum}`;
    } else {
        return `You win: ${compNum} = ${guessNum}`;
    }
}

main()