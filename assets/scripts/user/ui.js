const { isWinningIndex } = require('../game/utils.js')
const onFailure = function () {
  $('.game-update').text('Please try again.')
}

const convertCellsToPlayers = function (cells) {
  return cells.reduce((accum, current, index) => {
    if (!current) {
      return accum
    }
    accum[current].push(index)
    return accum
  }, { x: [], o: [] })
}
const onGetGameSuccess = function (response) {
  $('.game-update')
    .show()
    .text('')
    .html('')
  const count = response.games.length
  const winningGames = response
    .games
    .map(i => convertCellsToPlayers(i.cells).x)
    .filter(i => i.length > 0 && isWinningIndex(i)).length

  $('.game-update').append(`
    <p>You've played ${count} number of games!</p>
    <p>You've won ${winningGames}</p>
    <br>
    `)
}
module.exports = {
  onFailure,
  onGetGameSuccess
}
