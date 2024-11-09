let humanTotal = 0,
    computerTotal = 0

const buttons = document.querySelectorAll("button")
const header = document.getElementById("header")


function getComputerChoice(){
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    let result = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    if (result === 1){
        alert("Computer choose ROCK")
        return "rock"
    } else if (result === 2){
        alert("Computer choose PAPER")
        return "paper"
    } else if(result === 3){
        alert("Computer choose SCISSORS")
        return "scissors"
    }

}

// function getHumanChoice(){
//     buttons.forEach((button) => {
//         button.addEventListener("click", () => {
//             console.log(button.id)
//             return button.id
//         })
//     })

// }

// function getHumanChoice(){
//     game_pick = prompt("Pick your choice")
//         return game_pick.toLowerCase()

// }
    let compScore = document.createElement("p")
    let playerScore = document.createElement("p")

    
    

document.addEventListener("DOMContentLoaded", () =>{
    header.appendChild(compScore)
    header.appendChild(playerScore)

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let getHumanChoice = button.id
            console.log(getHumanChoice)
            playRound(getHumanChoice, getComputerChoice())
        })
    })
})




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

    compScore.textContent = `The computer has scored:  ${score.computerTotal}`
    playerScore.textContent = `You have earned:  ${score.humanTotal}`

    if(score.humanTotal >=3 || score.computerTotal >=3){
        const winner = document.createElement("div")

        buttons.forEach((button) => {
            button.setAttribute("disabled", true)
            })
        
        if(score.humanTotal===3){
            winner.textContent = "congratulations!!! The win is yours"
         } else {
            winner.textContent = "uhoh!!! It's the computer this time"        
         }
         document.body.appendChild(winner)
    }
}
    
    // console.log("So far the computer has scored: " + score.computerTotal)
    // console.log("And you have earned: " + score.humanTotal)




function playGame(){
    // for (let i=1; i<=5; i++){}
        // console.log("Let's start! Round: " + i)
        playRound(getHumanChoice, getComputerChoice())     
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



//playGame()