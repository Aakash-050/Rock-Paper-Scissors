function getComputerChoice(){
    let ramdomNumber = Math.floor((Math.random()*3));
    if(ramdomNumber === 0){
        return 'rock'
    } 
    else if(ramdomNumber === 1){
        return 'paper'
    }
    else{
        return 'scissor'
    }
}


function playGround(playerChoice, computerChoice){
    if(playerChoice === 'rock'){
        if(computerChoice === 'rock'){
            return "It's a draw"
        }
        else if(computerChoice === 'paper'){
            return "You lose!, computer won"
        }
        else{
            return "Great, You won!"
        }
    }
    else if(playerChoice === 'paper'){
        if(computerChoice === 'rock'){
            return "Great, You won!"
        }
        else if(computerChoice === 'paper'){
            return "It's a draw!"
        }
        else{
            return "You lose!, computer won"
        }
    }
    else if(playerChoice === 'scissor'){
        if(computerChoice === 'rock'){
            return "You lose!, computer won"
        }
        else if(computerChoice === 'paper'){
            return "Great, You won!"
        }
        else{
            return "It's a draw!"
        }
    }
}

let playerChoice
let computerChoice 

for(let i=0;i<5;i++){
    playerChoice = (prompt('What are you?, Rock, Paper or Scissor')).toLocaleLowerCase()
    computerChoice = getComputerChoice();
    console.log((playGround(playerChoice, computerChoice)), computerChoice)
}
