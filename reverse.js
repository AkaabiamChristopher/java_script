function reverse(number) {
    let reversed = 0;
    while (number != 0) {
        reversed = reversed * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    return reversed;
}

let prompt = require("prompt-sync")();
let number = prompt("Enter an integer: ");
console.log("Reversed integer: " + reverse(number));