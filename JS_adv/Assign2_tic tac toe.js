// create and visualize the board
let gameBoard = (function(){        //using iife factory function
    let board = [["_", "_", "_"],
            ["_", "_", "_"],
            ["_", "_", "_"]]
    
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

//ameBoard.displayBoard()

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


// play one round
function playRound(){
    playerTurn(player1, gameBoard)
    playerTurn(player2, gameBoard)
        return gameBoard.displayBoard()

}

playRound()

