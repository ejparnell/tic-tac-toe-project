const { isWinningIndex } = require('../game/utils.js')
const onFailure = function () {
  console.log('You failed bro!')
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
    <p>I'v played ${count} number of games!</p>
    <p>I've won ${winningGames}</p>
    <br>
    `)
}
module.exports = {
  onFailure,
  onGetGameSuccess
}
