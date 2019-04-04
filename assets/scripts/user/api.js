const config = require('../config.js')
const store = require('../store.js')

const createBoard = function () {
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}
const updateBoard = function (cell, index, gamestatus) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          cell: cell
        },
        over: false
      }
    }
  })
}
const getGame = function () {
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createBoard,
  updateBoard,
  getGame
}
