// Welcome the player and collect their name
let playerName = prompt("Welcome to Bear Ninja Hunter! Please enter your name:");

// Greet the player
alert("Hello " + playerName + "! Let's play Bear Ninja Hunter!");

// Ask the player for their choice
let playerChoice = prompt("Who are you: Bear, Ninja, or Hunter?");

// Hard coded computer choice
let computerChoice = "Bear";

// Variable to store the winner message
let winnerMessage = "";

// Use switch to display player choice in console
switch(playerChoice) {
    case "Bear":
        console.log(playerName + " chose Bear.");
        break;

    case "Ninja":
        console.log(playerName + " chose Ninja.");
        break;

    case "Hunter":
        console.log(playerName + " chose Hunter.");
        break;

    default:
        console.log("Invalid choice.");
}

// Determine game results using conditional statements
if (playerChoice === "Bear" && computerChoice === "Bear") {
    winnerMessage = "It's a tie!";
}
else if (playerChoice === "Bear" && computerChoice === "Ninja") {
    winnerMessage = "Bear beats Ninja! " + playerName + " wins!";
}
else if (playerChoice === "Bear" && computerChoice === "Hunter") {
    winnerMessage = "Hunter beats Bear! Computer wins!";
}
else if (playerChoice === "Ninja" && computerChoice === "Bear") {
    winnerMessage = "Bear beats Ninja! Computer wins!";
}
else if (playerChoice === "Ninja" && computerChoice === "Ninja") {
    winnerMessage = "It's a tie!";
}
else if (playerChoice === "Ninja" && computerChoice === "Hunter") {
    winnerMessage = "Ninja beats Hunter! " + playerName + " wins!";
}
else if (playerChoice === "Hunter" && computerChoice === "Bear") {
    winnerMessage = "Hunter beats Bear! " + playerName + " wins!";
}
else if (playerChoice === "Hunter" && computerChoice === "Ninja") {
    winnerMessage = "Ninja beats Hunter! Computer wins!";
}
else if (playerChoice === "Hunter" && computerChoice === "Hunter") {
    winnerMessage = "It's a tie!";
}
else {
    winnerMessage = "Invalid input.";
}

// Create final game results message
let resultsMessage =
    "Player Name: " + playerName + "<br>" +
    "Player Choice: " + playerChoice + "<br>" +
    "Computer Choice: " + computerChoice + "<br><br>" +
    winnerMessage;

// Output results to HTML page
document.getElementById("gameResults").innerHTML = resultsMessage;

// Output results to console
console.log("Player Name: " + playerName);
console.log("Player Choice: " + playerChoice);
console.log("Computer Choice: " + computerChoice);
console.log(winnerMessage);
