let humanTotal = 0,
      computerTotal = 0

function getComputerChoice(){
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    let result = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    if (result === 1){
        return "rock"
    } else if (result === 2){
        return "paper"
    } else if(result === 3){
        return "scissors"
    }

}

function getHumanChoice(){
    game_pick = prompt("Pick your choice")
        return game_pick.toLowerCase()

}


function countScore(humanScore, computerScore){
        humanTotal += humanScore
        computerTotal += computerScore

        return {humanTotal, computerTotal}

}

function playRound(humanChoice, computerChoice){
    console.log("The computer played: " + computerChoice)
    let humanScore = 0,
        computerScore = 0
    
    const rules = {
        "rock" : [["paper", 0], ["scissors", 1]],
        "paper": [["scissors", 0], ["rock", 1]],
        "scissors": [["rock", 0], ["paper", 1]]
    }
    
    
    let choiceKeys = Object.keys(rules)
    choiceKeys.forEach((key) => {
        if(humanChoice === key){
            if(computerChoice === rules[key][0][0]){
                console.log("Dammm! Computer gets the point")
                humanScore = rules[key][0][1]
                computerScore = 1
            } else if(computerChoice === rules[key][1][0]){
                console.log("Wohoo! This round goes to YOU")
                humanScore = rules[key][1][1]
                computerScore = 0
            }
            else{
                console.log("DRAW!!! Seems like nobody is in luck this time!")
                humanScore = 0
                computerScore = 0
            }
        }
        
    });

    score = countScore(humanScore, computerScore)
    console.log("So far the computer has scored: " + score.computerTotal)
    console.log("And you have earned: " + score.humanTotal)

}


function playGame(){
    for (let i=1; i<=5; i++){
        console.log("Let's start! Round: " + i)
        playRound(getHumanChoice(), getComputerChoice()   )     
        }

        console.log("Computer final score:" + computerTotal)
        console.log("Your final score:" + humanTotal)

        if(computerTotal > humanTotal){
            console.log("Uhoh! Computer Wins")
        } else if(computerTotal < humanTotal){
            console.log("Congratulations!!! Win is yours")
        } else{
            console.log("GG to both. It's a draw")
        }

}

playGame()