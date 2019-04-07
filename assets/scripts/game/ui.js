const api = require('../user/api.js')
const store = require('../store.js')
let player = 1
const board = ['', '', '', '', '', '', '', '', '']
const userIndex = []
let winner = ''
let gameOver = false
let newGameOver = false

const newGameLogic = function (userIndex) {
  const winCondition = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]]
  newGameOver = winCondition.some(child =>
    child.every(i =>
      userIndex.includes(i)
    )
  )
  console.log(newGameOver)
  if (newGameOver === true) {
    console.log('new game over works')
    if (player === 1) {
      player = 0
      winner = 'o'
      console.log(winner)
      $('.game-update').text(`Game Over! Winner is ${winner}`).show()
      $('#game-board').hide()
    } else {
      player = 1
      winner = 'x'
      console.log(winner)
      $('.game-update').text(`Game Over! Winner is ${winner}`).show()
      $('#game-board').hide()
    }
  }
}

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
const checkForWin = function () {
  if (gameOver === true) {
    $('.game-update').text(`Game Over! Winner is ${winner}`).show()
    // $('span').removeClass()
  }
}
const checkForDraw = function (gameBoard) {
  if (gameBoard.every(index => index !== '')) {
    gameOver = true
    console.log('draw!')
    $('.game-update').text(`Game Over! Draw!`).show()
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
const removeClass = function (box, boxId) {
  $(box).removeClass()
  $(boxId).addClass('invalid')
  console.log('got here')
}
const onClickSuccess = function (box, index) {
  if ($(box).text() !== 'x' && $(box).text() !== 'o') {
  //  console.log('stop')
    $(box).text(addXOrO)
  } if ($(box).text() === 'x') {
    createBoard('x', index)
  } else if ($(box).text() === 'o') {
    createBoard('o', index)
  }
}
const playerMessage = function () {
  if (player === 0 && gameOver === false) {
    $('.player-update').text('Player is X')
  } else if (player === 1 && gameOver === false) {
    $('.player-update').text('Player is O')
  }
}
const onSuccess = function (data) {
  console.log('response from creating game is', data)
  store.game = data.game
  $('#oneBox').empty()
  $('#twoBox').empty()
  $('#threeBox').empty()
  $('#fourBox').empty()
  $('#fiveBox').empty()
  $('#sixBox').empty()
  $('#sevenBox').empty()
  $('#eightBox').empty()
  $('#nineBox').empty()
  $('#game-board').show()
  $('.player-update').show()
  gameOver = false
}
const createBoard = function (item, index) {
  board[index] = item
  userIndex.push(index)
  console.log(userIndex)
  // console.log(item, index)
  // console.log(board)
  checkForDraw(board)
  // gameLogic(board)
  newGameLogic(userIndex)
  api.updateBoard(item, index, gameOver)
  // checkForWin()
}
module.exports = {
  onClickSuccess,
  createBoard,
  removeClass,
  gameLogic,
  onSuccess
}
