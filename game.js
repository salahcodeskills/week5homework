//create secretNumber
let secretNumber = 11;


//ask user for guess
let guess = prompt("Guess a number");


//check if guess is right
if (Number(guess) === secretNumber) {
    alert("YOU GOT IT RIGHT");
}
//otherwise, check if higher
else if (Number(guess) > secretNumber) {
    alert("TOO high Guess again!");
}
//otherwise, check if lower
else {
    alert("TOO low Guess again!")
}