const store = require('../store.js')
const onSuccess = function (data) {
  console.log('response from creating game is', data)
  store.game = data.game
}
const onFailure = function () {
  console.log('You failed bro!')
}
const onGetGameSuccess = function (response) {
  $('#games').text('')
  $('#games').html('')
  response.games.forEach(function (game) {
    $('#games').append(`
      <h3>${game.id}</h3>
      <p>${game.cells}</p>
      <p> ${game.over}</p>
      <p>${game.player_x}</p>
      <br>
      `)
  })
}
module.exports = {
  onSuccess,
  onFailure,
  onGetGameSuccess
}
