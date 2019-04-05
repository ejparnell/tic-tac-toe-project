const store = require('../store.js')
const gameL = require('../game/ui.js')

const onSuccess = function (data) {
  console.log('response from creating game is', data)
  store.game = data.game
  $('#game-board').show()
  $('.player-update').show()
}
const onFailure = function () {
  console.log('You failed bro!')
}
const onGetGameSuccess = function (response) {
  $('.game-update').show()
  $('.game-update').text('')
  $('.game-update').html('')
  let count = 0
  let winner = 0
  console.log(winner)
  response.games.forEach(function (game) {
    if (gameL.gameLogic(game.cells) === 'x') {
      winner++
    } else {
      count++
    }
  })
  $('.game-update').append(`
    <p>I'v played ${count} number of games!</p>
    <p>I've won ${winner}</p>
    <br>
    `)
}
module.exports = {
  onSuccess,
  onFailure,
  onGetGameSuccess
}
