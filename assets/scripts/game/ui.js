let player = 1
const board = ['', '', '', '', '', '', '', '', '']

const gameLogic = function (gameBoard) {
  if (gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2]) {
    console.log('you win!!') // 0, 1, 2
  } else if (gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2]) {
    console.log('you win!!') // 0, 1, 2
  } else if (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6]) {
    console.log('you win!!') // 0, 3, 6
  } else if (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6]) {
    console.log('you win!!') // 0, 3, 6
  } else if (gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8]) {
    console.log('you win!!') // 0, 4, 8
  } else if (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8]) {
    console.log('you win!!') // 0, 4, 8
  } else if (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7]) {
    console.log('you win!!') // 1, 4, 7
  } else if (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7]) {
    console.log('you win!!') // 1, 4, 7
  } else if (gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8]) {
    console.log('you win!!') // 2, 5, 8
  } else if (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8]) {
    console.log('you win!!') // 2, 5, 8
  } else if (gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6]) {
    console.log('you win!!') // 2, 4, 6
  } else if (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6]) {
    console.log('you win!!') // 2, 4, 6
  } else if (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5]) {
    console.log('you win!!') // 3, 4, 5
  } else if (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5]) {
    console.log('you win!!') // 3, 4, 5
  } else if (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8]) {
    console.log('you win!!') // 6, 7, 8
  } else if (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8]) {
    console.log('you win!!') // 6, 7, 8
  }
}
const createBoard = function (item, index) {
  board[index] = item
  gameLogic(board)
}
const addXOrO = function () {
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
const onClickSuccess = function (box) {
  $(box).text(addXOrO)
}

module.exports = {
  onClickSuccess,
  removeClass,
  createBoard
}
