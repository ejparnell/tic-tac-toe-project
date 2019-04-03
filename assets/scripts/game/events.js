const ui = require('./ui.js')

const oneBox = function () {
  console.log('clicked oneBox')
  ui.onClickSuccess('.messageOne')
  ui.removeClass('.messageOne')
}
const twoBox = function () {
  console.log('clicked twoBox')
  ui.onClickSuccess('.messageTwo')
  ui.removeClass('.messageTwo')
}
const threeBox = function () {
  console.log('clicked threeBox')
  ui.onClickSuccess('.messageThree')
  ui.removeClass('.messageThree')
}
const fourBox = function () {
  console.log('clicked fourBox')
  ui.onClickSuccess('.messageFour')
  ui.removeClass('.messageFour')
}
const fiveBox = function () {
  console.log('clicked fiveBox')
  ui.onClickSuccess('.messageFive')
  ui.removeClass('.messageFive')
}
const sixBox = function () {
  console.log('clicked sixBox')
  ui.onClickSuccess('.messageSix')
  ui.removeClass('.messageSix')
}
const sevenBox = function () {
  console.log('clicked sevenBox')
  ui.onClickSuccess('.messageSeven')
  ui.removeClass('.messageSeven')
}
const eightBox = function () {
  console.log('clicked eightBox')
  ui.onClickSuccess('.messageEight')
  ui.removeClass('.messageEight')
}
const nineBox = function () {
  console.log('clicked nineBox')
  ui.onClickSuccess('.messageNine')
  ui.removeClass('.messageNine')
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
}

module.exports = {
  gameHandlers
}
