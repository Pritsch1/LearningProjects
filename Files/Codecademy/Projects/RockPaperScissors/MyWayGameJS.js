
function showUserAnswer(clicked_id) {
    switch (clicked_id) {
        case "choice1":
            document.getElementById("userChoice").innerHTML = "Rock";
            return "rock";
            break;
        case "choice2":
            document.getElementById("userChoice").innerHTML = "Paper";
            return "paper";
            break;
        case "choice3":
            document.getElementById("userChoice").innerHTML = "Scissors";
            return "scissors";
            break;
    }
}

function showAIAnswer() {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            document.getElementById("aiChoice").innerHTML = "Rock";
            return "rock";
            break;
        case 1:
            document.getElementById("aiChoice").innerHTML = "Paper";
            return "paper";
            break;
        case 2:
            document.getElementById("aiChoice").innerHTML = "Scissors";
            return "scissors";
            break;
    }
}



function gameProgress() {
    if (showAIAnswer() === showUserAnswer()) {
        document.getElementById("winner").innerHTML = "It's a Tie!";
    }
    else {
        document.getElementById("winner").innerHTML = "working...";
    }
}

/*function whoWon(userInput, aiInput) {
    if (userInput === aiInput) {
        document.getElementById("winner").innerHTML = "It's a Tie!";
    }
}*/

//extra code

//A substititute for the switch of showUserAnswer() i decided to leave here... Why not :)
/*if (clicked_id === "choice1") {
    document.getElementById("userChoice").innerHTML = "Rock";
}
else if (clicked_id === "choice2") {
    document.getElementById("userChoice").innerHTML = "Paper";
}
else if (clicked_id === "choice3") {
    document.getElementById("userChoice").innerHTML = "Scissors";
}*/
