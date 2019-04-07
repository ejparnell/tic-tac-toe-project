const ui = require('./ui.js')

// The game updates
const invalidMessage = function () {
  $('.game-update').text('Pick another')
}

const clickGame = function () {
  const index = $(this).data('id')
  ui.onClickSuccess($(this), index)
}

const gameHandlers = function () {
  $('#oneBox').on('click', clickGame)
  $('#twoBox').on('click', clickGame)
  $('#threeBox').on('click', clickGame)
  $('#fourBox').on('click', clickGame)
  $('#fiveBox').on('click', clickGame)
  $('#sixBox').on('click', clickGame)
  $('#sevenBox').on('click', clickGame)
  $('#eightBox').on('click', clickGame)
  $('#nineBox').on('click', clickGame)
  $('body').on('click', '.invalid', invalidMessage)
  $('#pop-up').show()
  $('#game-board').hide()
  $('.player-update').hide()
  $('.game-update').hide()
  // $('.cp-pop-up').on('click', showCP)
}

module.exports = {
  gameHandlers
}
