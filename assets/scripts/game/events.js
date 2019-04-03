const ui = require('./ui.js')

const oneBox = function () {
  console.log('clicked oneBox')
  ui.onClickSuccess('.messageOne', 'box 1')
}
const twoBox = function () {
  console.log('clicked twoBox')
  ui.onClickSuccess('.messageTwo')
}
const threeBox = function () {
  console.log('clicked threeBox')
  ui.onClickSuccess('.messageThree')
}
const fourBox = function () {
  console.log('clicked fourBox')
  ui.onClickSuccess('.messageFour')
}
const fiveBox = function () {
  console.log('clicked fiveBox')
  ui.onClickSuccess('.messageFive')
}
const sixBox = function () {
  console.log('clicked sixBox')
  ui.onClickSuccess('.messageSix')
}
const sevenBox = function () {
  console.log('clicked sevenBox')
  ui.onClickSuccess('.messageSeven')
}
const eightBox = function () {
  console.log('clicked eightBox')
  ui.onClickSuccess('.messageEight')
}
const nineBox = function () {
  console.log('clicked nineBox')
  ui.onClickSuccess('.messageNine')
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
