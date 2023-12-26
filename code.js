
start = document.querySelector('.start')

start.addEventListener('click', function() {

    function getComputerChoice() {

        let options = ['Rock', 'Paper', 'Scissors']

        let variable = Math.floor(Math.random() * 3);

        return options[variable]
    }

    let playRound = function(playerSelection, computerSelection) {

        try {
            playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()

            if (['Rock', 'Paper', 'Scissors'].includes(playerSelection)) {
                console.log(`You chose: ${playerSelection}. Computer chose: ${computerSelection}`)
            }
            
            if (playerSelection === computerSelection) {
                return playRound(prompt('Enter your choice:'), getComputerChoice())
            }
            else if (playerSelection === 'Rock') {
                switch (computerSelection) {
                    case 'Paper':
                        return 'You lose! Paper beats Rock'
                        break
                    case 'Scissors':
                        return 'You win! Rock beats Scissors'
                }
            }
            else if (playerSelection === 'Paper') {
                switch (computerSelection) {
                    case 'Rock':
                        return 'You win! Paper beats Rock'
                    case 'Scissors':
                        return 'You lose! Scissors beats Paper'
                }
            }
            else if (playerSelection === 'Scissors') {
                switch (computerSelection) {
                    case 'Rock':
                        return 'You lose! Rock beats Scissors'
                        break
                    case 'Paper':
                        return 'You win! Scissors beats Paper'
                }
            }
            else {
                return 'Please make sure your input is valid'
            }
        }
        catch (e) {
            return 'Please enter "Rock", "Paper", or "Scissors' // catching any inputs that would trip up the case-insensitivity functionality
        }
        
    }

    function game() {
        console.clear()

        let computerScore = 0;
        let playerScore = 0;

        for (let i = 0; i < 5; i++) {

            input = prompt('Enter your choice:')

            if (input == null) {
                console.log('Gamed Ended')
                break
            }
            
            result = playRound(input, getComputerChoice())

            if (result.includes('win')) {
                playerScore++
                console.log(`You win round ${i + 1}`)
                console.log(`Player: ${playerScore}. Computer: ${computerScore}`)
            }
            else if (result.includes('lose')) {
                computerScore++
                console.log(`Computer wins round ${i + 1}`)
                console.log(`Player: ${playerScore}. Computer: ${computerScore}`)
            }
            else {
                console.log(result)
                i--
            }

            if (playerScore === 3 || computerScore === 3) {
                console.log(`${playerScore === 3 ? 'Player' : 'Computer'} wins the game!`)
                break
            }

        }
        
    }

    game()
})
