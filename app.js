//required variables
let paperBtn = document.getElementById('paper')
let rockBtn = document.getElementById('rock')
let scissorsBtn = document.getElementById('scissors')
let movePlayer = document.getElementById('movePlayer')
let result = document.querySelector('.result')
let resultStatus = document.getElementById('result-status')
let netScorePlayer = document.getElementById('score-player')
let netScoreComputer = document.getElementById('score-computer')
let moveComputer = document.getElementById('moveComputer')
let replay = document.querySelector('.button')
let playerScore = 0
let computerScore = 0


//to check the score for win or draw
function checkScore(player, computer){
    result.style.display = 'block'
    if (player >= 5){        
        resultStatus.innerHTML = `You won the game`
    }
    else if(computer >= 5){
        resultStatus.innerHTML = `Computer won the game`
    }
    else{
        resultStatus.innerHTML = `Its's a draw 💛`
    }
}

//to update the score on the board
function updateScore(){
    netScorePlayer.innerHTML = playerScore
    netScoreComputer.innerHTML = computerScore
    if (playerScore >= 5 || computerScore >= 5) {
        checkScore(playerScore, computerScore);
    }
}

//to check the result of the round
function gameRound(Pchoice, CompChoice){
    if (Pchoice == 1 && CompChoice == 0){
        playerScore++
    }
    else if (Pchoice == 0 && CompChoice == 1){
        computerScore++
    }
    else if (Pchoice == 1 && CompChoice == 2){
        computerScore++
    }
    else if (Pchoice == 2 && CompChoice == 1){
        playerScore++
    }
    else if (Pchoice == 0 && CompChoice == 2){
        playerScore++
    }
    else if (Pchoice == 2 && CompChoice == 0){
        computerScore++
    }
    else if (Pchoice == CompChoice){
        playerScore += 0
    }
    updateScore()
    
}

//to set the computer's choices
function computerMoves(Pchoice){
    let operation = Math.round(Math.random()*2)
    switch(operation){
        case 0:
            moveComputer.innerHTML = `<img src = './assets/paper-hand.png' alt = 'paper'>`
            gameRound(Pchoice, 0)
            break
        case 1:
            moveComputer.innerHTML = `<img src = './assets/rock-hand.png' alt = 'rock'>`
            gameRound(Pchoice, 2)
            break
        case 2:
            moveComputer.innerHTML = `<img src = './assets/scissors-hand.png' alt = 'scissors'>`
            gameRound(Pchoice, 1)
            break
    }
}

//Event listeners for the clicks of the player's moves
paperBtn.onclick =() =>{
    movePlayer.innerHTML = `<img src = './assets/paper-hand.png' alt = 'paper'>`
    let choice = 0
    computerMoves(choice)
}
rockBtn.onclick =() =>{
    movePlayer.innerHTML = `<img src = './assets/rock-hand.png' alt = 'rock'>`
    let choice = 2
    computerMoves(choice)
}
scissorsBtn.onclick =() =>{
    movePlayer.innerHTML = `<img src = './assets/scissors-hand.png' alt = 'scissors'>`
    let choice = 1
    computerMoves(choice)
}

//replay on click of the button
replay.onclick = () =>{
    location.reload()
}