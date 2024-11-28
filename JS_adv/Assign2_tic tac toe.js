// create and visualize the board
let gameBoard = (function(){        //using iife factory function
    let board = [["_", "_", "_"],
            ["_", "_", "_"],
            ["_", "_", "_"]]
    // let board = [["1", "2", "3"],
    //         ["4", "5", "6"],
    //         ["7", "8", "9"]]

    const displayBoard = () => {     
        board.forEach(row => {
        console.log("|  " + row.join("  |  ") + "  |")
        console.log("--------------------")  
        })}
    return {board, displayBoard}
    }) ()
// let gameBoard = {                //creating direct object and visualization function
//     board: [["_", "_", "_"],
//             ["_", "_", "_"],
//             ["_", "_", "_"]],
// }
// displayBoard = () => {     
// gameBoard.board.forEach(row => {
//     console.log("|  " + row.join("  |  ") + "  |")
//     console.log("--------------------")  
// })}
//gameBoard.displayBoard()

// creating players
function createPlayer(name, marker, score){
    return {name, marker, score}
}
const player1 = createPlayer("player1", "X", 0)
const player2 = createPlayer("player2", "O", 0)



// Taking position and setting them on the board
function if_occupied(position, board) {
    if (board.board[position[0]][position[1]] === "_") {
        return false
    } else {
        return true
    }
}
function getPosition (player) {
    position = prompt(`${player.name} preferred position `)
    let split_pos = position.split(",")
    let pos = split_pos.map(i => parseInt(i, 10))
    return pos
}
function playerTurn(player, board){
    let position = getPosition(player)
    if(if_occupied(position, board)){
        console.log("This place is taken, choose another one")
        playerTurn(player, board)
    } else {
    board.board[position[0]][position[1]] = player.marker}

        return {board}
}



// Game rules
function gameRules(gameBoard){
    for (let row of gameBoard.board) { 
        if(row[0] == row[1] &&
           row[1] == row[2] &&
           row[0] != "_"){
            console.log(" We got a row match !!!")
            return true
        }
    }
    for(let i=0; i<3; i++){
           if(gameBoard.board[0][i] == gameBoard.board[1][i] &&
            gameBoard.board[1][i] == gameBoard.board[2][i] &&
            gameBoard.board[0][i] != "_"){
            console.log(" We got a column match !!!")
            return true
           }
    }
    if(gameBoard.board[0][0] == gameBoard.board[1][1] &&
        gameBoard.board[1][1] == gameBoard.board[2][2] &&
        gameBoard.board[0][0] !== "_" ) {
        console.log(" We got a diagonal match !!!")
        return true
    }
    if(gameBoard.board[0][2] == gameBoard.board[1][1] &&
        gameBoard.board[1][1] == gameBoard.board[2][0] &&
        gameBoard.board[0][2] !== "_" ) {
        console.log(" We got a anti-diagonal match !!!")
        return true
    }

    console.log("no match")
    return false
}



// play one round
function playRound(){
    if(gameRules(gameBoard)) {
        console.log(`We found a winner: ${player2.name}`)
        return 555
    } else {
        console.log("continue")
        playerTurn(player1, gameBoard)
    }
    if(gameRules(gameBoard)) {
        console.log(`We found a winner: ${player1.name}`)
        return 555
    } else {
        console.log("continue")
        playerTurn(player2, gameBoard)
    }
        return gameBoard.displayBoard()
}



//The full game play
while (true) {
    let end = playRound()
    if (end === 555) {
        gameBoard.displayBoard()
        break
    } 
  }

