const api = require('../user/api.js')
const store = require('../store.js')
const { isWinningIndex } = require('./utils.js')
let player = 1
let board = ['', '', '', '', '', '', '', '', '']
let userIndex = {
  x: [],
  o: []
}
let winner = ''
let newGameOver = false

const newGameLogic = function (userIndex) {
  newGameOver = isWinningIndex(userIndex.x) || isWinningIndex(userIndex.o)
  if (newGameOver === true) {
    if (player === 1) {
      player = 0
      winner = 'o'
      $('.game-update').text(`Game Over! Winner is ${winner}`).show()
      $('#game-board').hide()
    } else {
      player = 1
      winner = 'x'
      $('.game-update').text(`Game Over! Winner is ${winner}`).show()
      $('#game-board').hide()
    }
  }
}
const checkForDraw = function (gameBoard) {
  if (gameBoard.every(index => index !== '')) {
    newGameOver = true
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
// This puts an x or o in the box by calling addXOrO and also calls createBoard
const onClickSuccess = function (box, index) {
  if ($(box).text() !== 'x' && $(box).text() !== 'o') {
    $(box).text(addXOrO)
  }
  if ($(box).text() === 'x') {
    createBoard('x', index)
  } else if ($(box).text() === 'o') {
    createBoard('o', index)
  }
}
const playerMessage = function () {
  if (player === 1 && newGameOver === false) {
    $('.player-update').text('Player is X')
  } else if (player === 0 && newGameOver === false) {
    $('.player-update').text('Player is O')
  }
}

const resetBoardVariables = function () {
  player = 1
  board = ['', '', '', '', '', '', '', '', '']
  userIndex = {
    x: [],
    o: []
  }
  winner = ''
  newGameOver = false
}

const onSuccess = function (data) {
  resetBoardVariables()
  playerMessage()
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
}

//
const createBoard = function (item, index) {
  board[index] = item
  userIndex[item].push(index)
  checkForDraw(board)
  newGameLogic(userIndex)
  api.updateBoard(item, index, newGameOver)
}
module.exports = {
  onClickSuccess,
  createBoard,
  onSuccess,
  newGameLogic
}
