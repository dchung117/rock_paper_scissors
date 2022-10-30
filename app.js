// get moves from browser
const computerMoveDisplay = document.getElementById("computer-move")
const userMoveDisplay = document.getElementById("user-move")
const resultDisplay = document.getElementById("result")

// possible user moves (all buttons)
const possibleMoves = document.querySelectorAll("button")

// set user and computer moves as global variables
let userMove
let computerMove
let result

// listen for buttons that were clicked, run callback fn
possibleMoves.forEach(possibleMove => possibleMove.addEventListener("click", (e) => {
    // get the user move, display on screen
    userMove = e.target.id
    userMoveDisplay.innerHTML = userMove

    // generate computer choice, display on screen
    generateComputerChoice()

    // determine result, display result
    getResult()
}))

function generateComputerChoice() {
    // sample random move, round down
    const randomNumber = Math.floor(Math.random() * possibleMoves.length)

    // display computer's move
    if (randomNumber === 0) {
        computerMove = "Rock"
    }
    if (randomNumber === 1) {
        computerMove = "Paper"
    }
    if (randomNumber === 2) {
        computerMove = "Scissors"
    }
    computerMoveDisplay.innerHTML = computerMove
}

function getResult() {
    // draw
    if (computerMove === userMove) {
        result = "DRAW"
    }

    // user wins
    if ((computerMove === "Rock" && userMove === "Paper") || (computerMove === "Paper" && userMove === "Scissors") || (computerMove === "Scissors" && userMove === "Rock")) {
        result = "YOU WIN"
    }

    // user loses
    if ((computerMove === "Rock" && userMove === "Scissors") || (computerMove === "Paper" && userMove === "Rock") || (computerMove === "Scissors" && userMove === "Paper")) {
        result = "YOU LOSE"
    }

    // display result
    resultDisplay.innerHTML = result
}