const ui = require('./ui.js')
// The game board
const oneBox = function () {
  console.log('clicked oneBox')
  const item = $('.messageOne').text()
  ui.onClickSuccess('.messageOne', item)
  ui.createBoard(item, 0)
  ui.removeClass('.messageOne')
}
const twoBox = function () {
  console.log('clicked twoBox')
  ui.onClickSuccess('.messageTwo')
  const item = $('.messageTwo').text()
  ui.createBoard(item, 1)
  ui.removeClass('.messageTwo')
}
const threeBox = function () {
  console.log('clicked threeBox')
  ui.onClickSuccess('.messageThree')
  const item = $('.messageThree').text()
  ui.createBoard(item, 2)
  ui.removeClass('.messageThree')
}
const fourBox = function () {
  console.log('clicked fourBox')
  ui.onClickSuccess('.messageFour')
  const item = $('.messageFour').text()
  ui.createBoard(item, 3)
  ui.removeClass('.messageFour')
}
const fiveBox = function () {
  console.log('clicked fiveBox')
  ui.onClickSuccess('.messageFive')
  const item = $('.messageFive').text()
  ui.createBoard(item, 4)
  ui.removeClass('.messageFive')
}
const sixBox = function () {
  console.log('clicked sixBox')
  ui.onClickSuccess('.messageSix')
  const item = $('.messageSix').text()
  ui.createBoard(item, 5)
  ui.removeClass('.messageSix')
}
const sevenBox = function () {
  console.log('clicked sevenBox')
  ui.onClickSuccess('.messageSeven')
  const item = $('.messageSeven').text()
  ui.createBoard(item, 6)
  ui.removeClass('.messageSeven')
}
const eightBox = function () {
  console.log('clicked eightBox')
  ui.onClickSuccess('.messageEight')
  const item = $('.messageEight').text()
  ui.createBoard(item, 7)
  ui.removeClass('.messageEight')
}
const nineBox = function () {
  console.log('clicked nineBox')
  ui.onClickSuccess('.messageNine')
  const item = $('.messageNine').text()
  ui.createBoard(item, 8)
  ui.removeClass('.messageNine')
}
// The game updates

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
}

module.exports = {
  gameHandlers
}
