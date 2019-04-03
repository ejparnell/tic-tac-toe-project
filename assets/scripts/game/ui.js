let player = 1
const board = ['', '', '', '', '', '', '', '', '']
let winner = ''
let gameOver = false

const gameLogic = function (gameBoard) {
  if (gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') {
    console.log('you win!! 0, 1, 2 x')
    winner = 'x'
    gameOver = true // 0, 1, 2
  } else if (gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') {
    console.log('you win!! 0, 1, 2 o')
    winner = 'o'
    gameOver = true // 0, 1, 2
  } else if (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x') {
    console.log('you win!! 0, 3, 6 x')
    winner = 'x'
    gameOver = true // 0, 3, 6
  } else if (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') {
    console.log('you win!! 0, 3, 6 o')
    winner = 'o'
    gameOver = true // 0, 3, 6
  } else if (gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x') {
    console.log('you win!! 0, 4, 8 x')
    winner = 'x'
    gameOver = true // 0, 4, 8
  } else if (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') {
    console.log('you win!! 0, 4, 8 o')
    winner = 'o'
    gameOver = true // 0, 4, 8
  } else if (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x') {
    console.log('you win!! 1, 4, 7 x')
    winner = 'x'
    gameOver = true // 1, 4, 7
  } else if (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') {
    console.log('you win!! 1, 4, 7 o')
    winner = 'o'
    gameOver = true // 1, 4, 7
  } else if (gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x') {
    console.log('you win!! 2, 5, 8 x')
    winner = 'x'
    gameOver = true// 2, 5, 8
  } else if (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o') {
    console.log('you win!! 2, 5, 8 o')
    winner = 'o'
    gameOver = true // 2, 5, 8
  } else if (gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6] === 'x') {
    console.log('you win!! 2, 4, 6 x')
    winner = 'x'
    gameOver = true // 2, 4, 6
  } else if (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o') {
    console.log('you win!! 2, 4, 6 o')
    winner = 'o'
    gameOver = true // 2, 4, 6
  } else if (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x') {
    console.log('you win!! 3, 4, 5 x')
    winner = 'x'
    gameOver = true // 3, 4, 5
  } else if (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') {
    console.log('you win!! 3, 4, 5 o')
    winner = 'o'
    gameOver = true // 3, 4, 5
  } else if (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x') {
    console.log('you win!! 6, 7, 8 x')
    winner = 'x'
    gameOver = true // 6, 7, 8
  } else if (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') {
    console.log('you win!! 6, 7, 8 o')
    winner = 'o'
    gameOver = true // 6, 7, 8
  }
}
const checkForDraw = function (gameBoard) {
  if (gameBoard.every(index => index !== '')) {
    gameOver = true
    console.log('draw!')
  }
}
const createBoard = function (item, index) {
  board[index] = item
  checkForDraw(board)
  if (gameOver === false) {
    gameLogic(board)
  }
}
const addXOrO = function (item) {
  playerMessage()
  if (player === 1) {
    player = 0
    return 'x'
  } else {
    player = 1
    return 'o'
  }
}
const removeClass = function (box) {
  $(box).removeClass()
}
const onClickSuccess = function (box, item) {
  $(box).text(addXOrO)
}
const playerMessage = function () {
  if (player === 0) {
    $('.player-update').text('Player is X')
  } else if (player === 1) {
    $('.player-update').text('Player is O')
  }
}

module.exports = {
  onClickSuccess,
  removeClass,
  createBoard
}
