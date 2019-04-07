const winCondition = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]]

const isWinningIndex = function (userIndex) {
  return winCondition.some(child => child.every(i => userIndex.includes(i)))
}

module.exports = {
  isWinningIndex
}
