
const gameL = require('../game/ui.js')

const onFailure = function () {
  console.log('You failed bro!')
}
const onGetGameSuccess = function (response) {
  $('.game-update').show()
  $('.game-update').text('')
  $('.game-update').html('')
  let count = 0
  let winner = 0
  let userIndex = []
  console.log(winner)
  response.games.forEach(function (game) {
    game.cells.forEach(i => {
      if (i === 'x') {
        userIndex.push(i.indexOf())
      }
    })
  })
  console.log(userIndex)
  $('.game-update').append(`
    <p>I'v played ${count} number of games!</p>
    <p>I've won ${winner}</p>
    <br>
    `)
}
module.exports = {
  onFailure,
  onGetGameSuccess
}
