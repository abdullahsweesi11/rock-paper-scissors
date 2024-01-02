
const start = document.querySelector('.start')
const reload = document.querySelector('.reload')

const options = document.querySelectorAll('button.option')
const detail = document.querySelector('.detail')
let playerScore = document.querySelector('#player>.score')
let playerChoice = document.querySelector('#player-choice')
let computerScore = document.querySelector('#computer>.score')
let computerChoice = document.querySelector('#computer-choice')

let result;

console.log(options)

start.addEventListener('click', function (event) {
    event.target.style.display = 'none'
    document.querySelector('#game-screen').style.display = 'block'
})

reload.addEventListener('click', function() {
    location.reload()
})


function getComputerChoice() {

    let options = ['Rock', 'Paper', 'Scissors']

    let variable = Math.floor(Math.random() * 3);

    computerChoice.textContent = options[variable]

    return options[variable]
}

let playRound = function(playerSelection, computerSelection) {
    console.log(playerSelection)

        playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()

        
        
        if (playerSelection === computerSelection) {
            return "That was a draw!"
        }
        else if (playerSelection === 'Rock') {
            switch (computerSelection) {
                case 'Paper':
                    return 'You lose this round! Paper beats Rock'
                    break
                case 'Scissors':
                    return 'You win this round! Rock beats Scissors'
            }
        }
        else if (playerSelection === 'Paper') {
            switch (computerSelection) {
                case 'Rock':
                    return 'You win this round! Paper beats Rock'
                case 'Scissors':
                    return 'You lose this round! Scissors beats Paper'
            }
        }
        else if (playerSelection === 'Scissors') {
            switch (computerSelection) {
                case 'Rock':
                    return 'You lose this round! Rock beats Scissors'
                    break
                case 'Paper':
                    return 'You win this round! Scissors beats Paper'
            }
        }
    
}

function checkGame() {

        if (playerScore.textContent === '5' || computerScore.textContent === '5') {
            document.querySelector('.disable').style.display = 'block'
            document.querySelector('#winner').textContent = playerScore.textContent === '5' ? 'PLAYER' : 'COMPUTER'

        }
        
}

options.forEach( (option) => {
    option.addEventListener('click', function(event) {
    
    result = playRound(option.value, getComputerChoice())
    playerChoice.textContent = option.value

    if (result.includes('win')) {
        console.log(+playerScore.textContent)
        playerScore.textContent = (+(playerScore.textContent) + 1).toString()
        detail.textContent = "Player Won!"
        
    }
    else if (result.includes('lose')) {
        console.log(+computerScore.textContent)
        computerScore.textContent = (+(computerScore.textContent) + 1).toString()
        detail.textContent = "Computer Won!"
        
    }
    else {
        detail.textContent = result
    }

    checkGame()

})}
)