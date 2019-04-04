const ui = require('./ui.js')
const api = require('../user/api.js')
const gameOver = require('./ui.js')
// The game board
const oneBox = function () {
  console.log('clicked oneBox')
  ui.onClickSuccess('.messageOne')
  const item = $('.messageOne').text()
  ui.createBoard(item, 0)
  api.updateBoard(0, item, gameOver)
  ui.removeClass('.messageOne', '#oneBox')
}
const twoBox = function () {
  console.log('clicked twoBox')
  ui.onClickSuccess('.messageTwo')
  const item = $('.messageTwo').text()
  ui.createBoard(item, 1)
  api.updateBoard(1, item, gameOver)
  ui.removeClass('.messageTwo')
}
const threeBox = function () {
  console.log('clicked threeBox')
  ui.onClickSuccess('.messageThree')
  const item = $('.messageThree').text()
  ui.createBoard(item, 2)
  api.updateBoard(2, item, gameOver)
  ui.removeClass('.messageThree')
}
const fourBox = function () {
  console.log('clicked fourBox')
  ui.onClickSuccess('.messageFour')
  const item = $('.messageFour').text()
  ui.createBoard(item, 3)
  api.updateBoard(3, item, gameOver)
  ui.removeClass('.messageFour')
}
const fiveBox = function () {
  console.log('clicked fiveBox')
  ui.onClickSuccess('.messageFive')
  const item = $('.messageFive').text()
  ui.createBoard(item, 4)
  api.updateBoard(4, item, gameOver)
  ui.removeClass('.messageFive')
}
const sixBox = function () {
  console.log('clicked sixBox')
  ui.onClickSuccess('.messageSix')
  const item = $('.messageSix').text()
  ui.createBoard(item, 5)
  api.updateBoard(5, item, gameOver)
  ui.removeClass('.messageSix')
}
const sevenBox = function () {
  console.log('clicked sevenBox')
  ui.onClickSuccess('.messageSeven')
  const item = $('.messageSeven').text()
  ui.createBoard(item, 6)
  api.updateBoard(6, item, gameOver)
  ui.removeClass('.messageSeven')
}
const eightBox = function () {
  console.log('clicked eightBox')
  ui.onClickSuccess('.messageEight')
  const item = $('.messageEight').text()
  ui.createBoard(item, 7)
  api.updateBoard(7, item, gameOver)
  ui.removeClass('.messageEight')
}
const nineBox = function () {
  console.log('clicked nineBox')
  ui.onClickSuccess('.messageNine')
  const item = $('.messageNine').text()
  ui.createBoard(item, 8)
  api.updateBoard(8, item, gameOver)
  ui.removeClass('.messageNine')
}
// The game updates
const invalidMessage = function () {
  $('.game-update').text('Pick another')
}

const gameHandlers = function () {
  $('#oneBox').on('click', oneBox)
  $('#twoBox').on('click', twoBox)
  $('#threeBox').on('click', threeBox)
  $('#fourBox').on('click', fourBox)
  $('#fiveBox').on('click', fiveBox)
  $('#sixBox').on('click', sixBox)
  $('#sevenBox').on('click', sevenBox)
  $('#eightBox').on('click', eightBox)
  $('#nineBox').on('click', nineBox)
  $('body').on('click', '.invalid', invalidMessage)
}

module.exports = {
  gameHandlers
}
